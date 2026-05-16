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
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "8px",
  backgroundColor: "#fff",
  boxShadow: "0 16px 36px rgba(32, 24, 24, 0.05)",
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
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.down("lg")]: {
    minHeight: "620px",
  },
}));
