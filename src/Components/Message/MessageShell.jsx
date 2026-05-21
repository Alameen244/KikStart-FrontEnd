import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import ChatHeader from "./ChatHeader.jsx";
import ConversationList from "./ConversationList.jsx";
import MessageComposer from "./MessageComposer.jsx";
import MessageThread from "./MessageThread.jsx";

const MessageShell = ({
  users,
  selectedUser,
  searchTerm,
  messages,
  currentIdentity,
  messageDraft,
  unreadCounts,
  lastMessages,
  lastMessageAuthors,
  lastMessageTimes,
  isUsersLoading,
  usersError,
  isConversationLoading,
  conversationError,
  conversationSid,
  isSending,
  onSearch,
  onRefreshUsers,
  onSelectUser,
  onMessageChange,
  onSendMessage,
}) => (
  <ShellWrap>
    <ConversationList
      users={users}
      selectedUser={selectedUser}
      searchTerm={searchTerm}
      unreadCounts={unreadCounts}
      lastMessages={lastMessages}
      lastMessageAuthors={lastMessageAuthors}
      lastMessageTimes={lastMessageTimes}
      currentIdentity={currentIdentity}
      isLoading={isUsersLoading}
      error={usersError}
      onSearch={onSearch}
      onRefresh={onRefreshUsers}
      onSelectUser={onSelectUser}
    />
    <ChatPanel>
      <ChatHeader selectedUser={selectedUser} conversationSid={conversationSid} />
      <MessageThread
        messages={messages}
        currentIdentity={currentIdentity}
        selectedUser={selectedUser}
        isLoading={isConversationLoading}
        conversationError={conversationError}
      />
      <MessageComposer
        value={messageDraft}
        disabled={!selectedUser || !conversationSid || isConversationLoading}
        isSending={isSending}
        onChange={onMessageChange}
        onSubmit={onSendMessage}
      />
    </ChatPanel>
  </ShellWrap>
);

export default MessageShell;

const ShellWrap = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "calc(100vh - 188px)",
  minHeight: "560px",
  display: "flex",
  overflow: "hidden",
  border: "1px solid rgba(237, 28, 36, 0.08)",
  borderRadius: "18px",
  backgroundColor: "#fff",
  boxShadow: "0 22px 60px rgba(43, 43, 43, 0.08)",
  [theme.breakpoints.down("lg")]: {
    height: "auto",
    minHeight: 0,
    flexDirection: "column",
  },
}));

const ChatPanel = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fffdfd",
  [theme.breakpoints.down("lg")]: {
    minHeight: "620px",
  },
}));
