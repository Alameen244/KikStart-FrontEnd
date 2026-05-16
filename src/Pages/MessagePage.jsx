import { useCallback, useEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { toast } from "react-toastify";
import {
  addParticipant,
  createConversation,
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

  const currentIdentity = getUserIdentity(currentUser);

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
    setIsUsersLoading(true);
    setUsersError("");

    try {
      const res = await getAllUsers();
      setUsers(Array.isArray(res?.data) ? res.data : []);
    } catch (error) {
      const message = error?.response?.data?.message || "Unable to load users.";
      setUsersError(message);
    } finally {
      setIsUsersLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const ensureConversation = useCallback(
    async (chatUser) => {
      const conversationKey = getConversationKey(currentUser, chatUser);
      if (!conversationKey) {
        throw new Error("User identity missing for conversation.");
      }

      const savedSid = localStorage.getItem(conversationKey);
      if (savedSid) return savedSid;

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
    [currentIdentity, currentUser],
  );

  const handleSelectUser = async (chatUser) => {
    setSelectedUser(chatUser);
    setMessages([]);
    setMessageDraft("");
    setConversationSid("");
    setConversationError("");
    setIsConversationLoading(true);

    try {
      const sid = await ensureConversation(chatUser);
      setConversationSid(sid);
      const loadedMessages = await getConversationMessages(sid);
      setMessages(
        normalizeMessages(Array.isArray(loadedMessages) ? loadedMessages : []),
      );
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        error.message ||
        "Unable to start conversation.";
      setConversationError(message);
    } finally {
      setIsConversationLoading(false);
    }
  };

  const handleSendMessage = async (event) => {
    event.preventDefault();
    const trimmedMessage = messageDraft.trim();

    if (!trimmedMessage || !conversationSid || !currentIdentity) return;

    setIsSending(true);
    try {
      const sentMessage = await sendChatMessage({
        conversationSid,
        author: currentIdentity,
        message: trimmedMessage,
      });

      setMessages((prevMessages) => [
        ...prevMessages,
        ...normalizeMessages([
          {
            sid: sentMessage?.messageSid,
            author: currentIdentity,
            body: sentMessage?.body || trimmedMessage,
            dateCreated: new Date().toISOString(),
          },
        ]),
      ]);
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

  return (
      <MessageShell
        users={visibleUsers}
        selectedUser={selectedUser}
        searchTerm={searchTerm}
        messages={messages}
        currentIdentity={currentIdentity}
        messageDraft={messageDraft}
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


