import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { toast } from "react-toastify";
import {
  addParticipant,
  createConversation,
  findConversationByParticipants,
  getConversationMessages,
  sendChatMessage,
} from "../Apis/chatApi.js";
import { getAllUsers } from "../Apis/userApi.js";
import MessageShell from "../Components/Message/MessageShell.jsx";
import { useAuth } from "../Context/AuthContext.jsx";
import {
  getConversationKey,
  getUserId,
  getUserIdentity,
  normalizeMessages,
} from "../utils/messageUtils.js";

const getLastReadKey = (conversationKey, identity) =>
  identity ? `last-read:${identity}:${conversationKey}` : "";

const getConversationMessageCacheKey = (conversationSid) =>
  conversationSid ? `conversation-messages:${conversationSid}` : "";

const getMessageList = (response) => {
  if (Array.isArray(response)) return response;
  if (Array.isArray(response?.messages)) return response.messages;
  if (Array.isArray(response?.data)) return response.data;
  return [];
};

const getCachedMessages = (conversationSid) => {
  const cacheKey = getConversationMessageCacheKey(conversationSid);
  if (!cacheKey) return [];

  try {
    const cachedMessages = JSON.parse(localStorage.getItem(cacheKey) || "[]");
    return Array.isArray(cachedMessages) ? cachedMessages : [];
  } catch (_) {
    return [];
  }
};

const saveCachedMessage = (conversationSid, message) => {
  const cacheKey = getConversationMessageCacheKey(conversationSid);
  if (!cacheKey || !message?.sid) return;

  const cachedMessages = mergeMessages(getCachedMessages(conversationSid), [message]);
  localStorage.setItem(cacheKey, JSON.stringify(cachedMessages.slice(-50)));
};

const mergeMessages = (currentMessages, incomingMessages) => {
  const merged = new Map();
  [...currentMessages, ...incomingMessages].forEach((message) => {
    if (message?.sid) {
      merged.set(message.sid, message);
    }
  });
  return Array.from(merged.values()).sort(
    (a, b) => new Date(a.dateCreated) - new Date(b.dateCreated),
  );
};

const countUnreadIncomingMessages = (
  messages,
  lastReadSid,
  currentIdentity,
) => {
  const messagesAfterLastRead = lastReadSid
    ? messages.slice(
        Math.max(
          messages.findIndex((message) => message.sid === lastReadSid) + 1,
          0,
        ),
      )
    : messages;

  return messagesAfterLastRead.filter(
    (message) => message.author !== currentIdentity,
  ).length;
};

const MessagePage = () => {
  const { user: currentUser } = useAuth();
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [messageDraft, setMessageDraft] = useState("");
  const [conversationSid, setConversationSid] = useState("");
  const [isUsersLoading, setIsUsersLoading] = useState(false);
  const [isConversationLoading, setIsConversationLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [usersError, setUsersError] = useState("");
  const [conversationError, setConversationError] = useState("");
  const [unreadCounts, setUnreadCounts] = useState({});
  const [lastMessages, setLastMessages] = useState({});
  const [lastMessageAuthors, setLastMessageAuthors] = useState({});
  const [lastMessageTimes, setLastMessageTimes] = useState({});
  const messagesRef = useRef([]);
  const latestMessageSidRef = useRef({});
  const selectedConversationIsReadRef = useRef(false);
  const usersRequestIdRef = useRef(0);
  const conversationRequestIdRef = useRef(0);

  const currentIdentity = getUserIdentity(currentUser);
  const selectedIdentity = getUserIdentity(selectedUser);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    usersRequestIdRef.current += 1;
    conversationRequestIdRef.current += 1;
    latestMessageSidRef.current = {};
    selectedConversationIsReadRef.current = false;
    messagesRef.current = [];
    setUsers([]);
    setSelectedUser(null);
    setMessages([]);
    setSearchTerm("");
    setMessageDraft("");
    setConversationSid("");
    setIsUsersLoading(false);
    setIsConversationLoading(false);
    setIsSending(false);
    setUsersError("");
    setConversationError("");
    setUnreadCounts({});
    setLastMessages({});
    setLastMessageAuthors({});
    setLastMessageTimes({});
  }, [currentIdentity]);

  const visibleUsers = useMemo(() => {
    const needle = searchTerm.trim().toLowerCase();
    const currentId = getUserId(currentUser);

    return users
      .filter((chatUser) => getUserId(chatUser) !== currentId)
      .filter((chatUser) => {
        if (!needle) return true;
        return [chatUser?.name, chatUser?.email, chatUser?.phone]
          .filter(Boolean)
          .some((value) => value.toLowerCase().includes(needle));
      });
  }, [currentUser, searchTerm, users]);

  const loadUsers = useCallback(async () => {
    if (!currentIdentity) {
      usersRequestIdRef.current += 1;
      setUsers([]);
      setIsUsersLoading(false);
      setUsersError("");
      return;
    }

    const requestId = usersRequestIdRef.current + 1;
    usersRequestIdRef.current = requestId;
    setIsUsersLoading(true);
    setUsersError("");

    try {
      const res = await getAllUsers();
      if (usersRequestIdRef.current !== requestId) return;
      setUsers(Array.isArray(res?.data) ? res.data : []);
    } catch (error) {
      if (usersRequestIdRef.current !== requestId) return;
      const message = error?.response?.data?.message || "Unable to load users.";
      setUsersError(message);
    } finally {
      if (usersRequestIdRef.current === requestId) {
        setIsUsersLoading(false);
      }
    }
  }, [currentIdentity]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const resolveConversationSid = useCallback(
    async (chatUser) => {
      const conversationKey = getConversationKey(currentUser, chatUser);
      if (!conversationKey || !currentIdentity) return "";

      const savedSid = localStorage.getItem(conversationKey);
      if (savedSid) return savedSid;

      try {
        const foundConversation = await findConversationByParticipants(
          currentIdentity,
          getUserIdentity(chatUser),
        );
        if (foundConversation?.conversationSid) {
          localStorage.setItem(conversationKey, foundConversation.conversationSid);
          return foundConversation.conversationSid;
        }
      } catch (_) {
        // Conversation does not exist yet.
      }

      return "";
    },
    [currentIdentity, currentUser],
  );

  const ensureConversation = useCallback(
    async (chatUser) => {
      const conversationKey = getConversationKey(currentUser, chatUser);
      if (!conversationKey) {
        throw new Error("User identity missing for conversation.");
      }

      const existingSid = await resolveConversationSid(chatUser);
      if (existingSid) return existingSid;

      const friendlyName = [
        currentUser?.name || currentIdentity,
        chatUser?.name || getUserIdentity(chatUser),
      ]
        .filter(Boolean)
        .join(" - ");
      const conversation = await createConversation({ friendlyName });
      const newSid = conversation?.conversationSid;

      if (!newSid) {
        throw new Error("Conversation SID missing from response.");
      }

      await Promise.all([
        addParticipant({ conversationSid: newSid, identity: currentIdentity }),
        addParticipant({
          conversationSid: newSid,
          identity: getUserIdentity(chatUser),
        }),
      ]);

      localStorage.setItem(conversationKey, newSid);
      return newSid;
    },
    [currentIdentity, currentUser, resolveConversationSid],
  );

  const loadConversation = useCallback(async (chatUser, { markAsRead = false } = {}) => {
    if (!currentIdentity) return;

    const requestId = conversationRequestIdRef.current + 1;
    conversationRequestIdRef.current = requestId;
    const identity = getUserIdentity(chatUser);
    const conversationKey = getConversationKey(currentUser, chatUser);
    selectedConversationIsReadRef.current = markAsRead;
    setSelectedUser(chatUser);
    if (markAsRead) {
      setUnreadCounts((prev) => ({
        ...prev,
        [identity]: 0,
      }));
    }
    setMessages([]);
    setMessageDraft("");
    setConversationSid("");
    setConversationError("");
    setIsConversationLoading(true);

    try {
      const sid = await ensureConversation(chatUser);
      if (conversationRequestIdRef.current !== requestId) return;
      setConversationSid(sid);
      const loadedMessages = await getConversationMessages(sid);
      if (conversationRequestIdRef.current !== requestId) return;
      const normalizedMessages = mergeMessages(
        normalizeMessages(getCachedMessages(sid)),
        normalizeMessages(getMessageList(loadedMessages)),
      );
      setMessages(normalizedMessages);

      const lastMessage = normalizedMessages.at(-1);
      if (!lastMessage) return;

      latestMessageSidRef.current[identity] = lastMessage.sid;
      if (markAsRead && conversationKey) {
        localStorage.setItem(
          getLastReadKey(conversationKey, currentIdentity),
          lastMessage.sid,
        );
        setUnreadCounts((prev) => ({
          ...prev,
          [identity]: 0,
        }));
      }
      setLastMessages((prev) => ({
        ...prev,
        [identity]: lastMessage.body,
      }));
      setLastMessageAuthors((prev) => ({
        ...prev,
        [identity]: lastMessage.author,
      }));
      setLastMessageTimes((prev) => ({
        ...prev,
        [identity]: lastMessage.dateCreated,
      }));
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        error.message ||
        "Unable to start conversation.";
      if (conversationRequestIdRef.current !== requestId) return;
      setConversationError(message);
    } finally {
      if (conversationRequestIdRef.current === requestId) {
        setIsConversationLoading(false);
      }
    }
  }, [currentIdentity, currentUser, ensureConversation]);

  const handleSelectUser = useCallback(
    (chatUser) => {
      loadConversation(chatUser, { markAsRead: true });
    },
    [loadConversation],
  );

  const handleSendMessage = async (event) => {
    event.preventDefault();
    const trimmedMessage = messageDraft.trim();

    if (!trimmedMessage || !conversationSid || !currentIdentity) return;

    setIsSending(true);
    try {
      const selectedUserIdentity = getUserIdentity(selectedUser);
      const conversationKey = getConversationKey(currentUser, selectedUser);
      const sentMessage = await sendChatMessage({
        conversationSid,
        author: currentIdentity,
        message: trimmedMessage,
      });
      const normalizedSentMessage = normalizeMessages([
        {
          sid: sentMessage?.sid || sentMessage?.messageSid,
          author: sentMessage?.author || currentIdentity,
          body: sentMessage?.body || trimmedMessage,
          dateCreated: sentMessage?.dateCreated || new Date().toISOString(),
        },
      ])[0];

      if (normalizedSentMessage) {
        saveCachedMessage(conversationSid, normalizedSentMessage);
        setMessages((prevMessages) =>
          mergeMessages(prevMessages, [normalizedSentMessage]),
        );
      }
      setLastMessages((prev) => ({
        ...prev,
        [selectedUserIdentity]: sentMessage?.body || trimmedMessage,
      }));
      setLastMessageAuthors((prev) => ({
        ...prev,
        [selectedUserIdentity]: currentIdentity,
      }));
      setLastMessageTimes((prev) => ({
        ...prev,
        [selectedUserIdentity]: sentMessage?.dateCreated || new Date().toISOString(),
      }));
      setUnreadCounts((prev) => ({
        ...prev,
        [selectedUserIdentity]: 0,
      }));
      const sentMessageSid = sentMessage?.sid || sentMessage?.messageSid;
      if (sentMessageSid) {
        latestMessageSidRef.current[selectedUserIdentity] =
          sentMessageSid;
        if (conversationKey) {
          localStorage.setItem(
            getLastReadKey(conversationKey, currentIdentity),
            sentMessageSid,
          );
        }
      }
      setMessageDraft("");
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error?.response?.data?.error ||
          "Message could not be sent.",
      );
    } finally {
      setIsSending(false);
    }
  };

  useEffect(() => {
    if (!currentUser || !currentIdentity || !visibleUsers.length)
      return undefined;

    let isMounted = true;

    const syncUnreadMessages = async () => {
      await Promise.all(
        visibleUsers.map(async (chatUser) => {
          const identity = getUserIdentity(chatUser);
          const conversationKey = getConversationKey(currentUser, chatUser);
          const savedSid = await resolveConversationSid(chatUser);
          const lastReadKey = conversationKey
            ? getLastReadKey(conversationKey, currentIdentity)
            : "";

          if (!identity || !savedSid) return;

          try {
            const loadedMessages = await getConversationMessages(savedSid);
            if (!isMounted) return;

            const normalizedMessages = mergeMessages(
              normalizeMessages(getCachedMessages(savedSid)),
              normalizeMessages(getMessageList(loadedMessages)),
            );
            const lastMessage = normalizedMessages.at(-1);
            if (!lastMessage) return;

            setLastMessages((prev) => ({
              ...prev,
              [identity]: lastMessage.body,
            }));
            setLastMessageAuthors((prev) => ({
              ...prev,
              [identity]: lastMessage.author,
            }));
            setLastMessageTimes((prev) => ({
              ...prev,
              [identity]: lastMessage.dateCreated,
            }));

            const lastReadSid = lastReadKey
              ? localStorage.getItem(lastReadKey)
              : "";
            latestMessageSidRef.current[identity] = lastMessage.sid;

            if (identity === selectedIdentity) {
              const selectedConversationWasRead =
                selectedConversationIsReadRef.current;
              const mergedMessages = mergeMessages(
                messagesRef.current,
                normalizedMessages,
              );
              const mergedLastMessage = mergedMessages.at(-1);

              setMessages(mergedMessages);
              if (mergedLastMessage) {
                setLastMessages((prev) => ({
                  ...prev,
                  [identity]: mergedLastMessage.body,
                }));
                setLastMessageAuthors((prev) => ({
                  ...prev,
                  [identity]: mergedLastMessage.author,
                }));
                setLastMessageTimes((prev) => ({
                  ...prev,
                  [identity]: mergedLastMessage.dateCreated,
                }));
              }

              if (selectedConversationWasRead) {
                setUnreadCounts((prev) => ({
                  ...prev,
                  [identity]: 0,
                }));
              } else {
                setUnreadCounts((prev) => ({
                  ...prev,
                  [identity]: countUnreadIncomingMessages(
                    mergedMessages,
                    lastReadSid,
                    currentIdentity,
                  ),
                }));
              }

              if (selectedConversationWasRead && lastReadKey) {
                localStorage.setItem(
                  lastReadKey,
                  mergedLastMessage?.sid || lastMessage.sid,
                );
              }
              return;
            }

            if (lastMessage.author === currentIdentity) {
              setUnreadCounts((prev) => ({
                ...prev,
                [identity]: 0,
              }));
              if (lastReadKey) {
                localStorage.setItem(lastReadKey, lastMessage.sid);
              }
              return;
            }

            const unreadIncomingMessages = countUnreadIncomingMessages(
              normalizedMessages,
              lastReadSid,
              currentIdentity,
            );

            setUnreadCounts((prev) => ({
              ...prev,
              [identity]: unreadIncomingMessages,
            }));

            if (!lastReadSid && lastReadKey && lastMessage.author === currentIdentity) {
              localStorage.setItem(lastReadKey, lastMessage.sid);
            }
          } catch (_) {
            // Ignore polling misses; explicit chat open still shows errors.
          }
        }),
      );
    };

    syncUnreadMessages();
    const intervalId = window.setInterval(syncUnreadMessages, 5000);

    return () => {
      isMounted = false;
      window.clearInterval(intervalId);
    };
  }, [
    currentIdentity,
    currentUser,
    resolveConversationSid,
    selectedIdentity,
    visibleUsers,
  ]);

  return (
    <MessageShell
      users={visibleUsers}
      selectedUser={selectedUser}
      searchTerm={searchTerm}
      messages={messages}
      currentIdentity={currentIdentity}
      messageDraft={messageDraft}
      unreadCounts={unreadCounts}
      lastMessages={lastMessages}
      lastMessageAuthors={lastMessageAuthors}
      lastMessageTimes={lastMessageTimes}
      isUsersLoading={isUsersLoading}
      usersError={usersError}
      isConversationLoading={isConversationLoading}
      conversationError={conversationError}
      conversationSid={conversationSid}
      isSending={isSending}
      onSearch={setSearchTerm}
      onRefreshUsers={loadUsers}
      onSelectUser={handleSelectUser}
      onMessageChange={setMessageDraft}
      onSendMessage={handleSendMessage}
    />
  );
};

export default MessagePage;
