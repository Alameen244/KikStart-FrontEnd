import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { formatMessageTime, getInitials } from "../../utils/messageUtils";

const MessageThread = ({
  messages,
  currentIdentity,
  selectedUser,
  isLoading,
  conversationError,
}) => {
  if (!selectedUser) {
    return (
      <EmptyThread>
        <Typography>Select a user to create a conversation.</Typography>
      </EmptyThread>
    );
  }

  if (isLoading) {
    return (
      <EmptyThread>
        <CircularProgress size={28} />
        <Typography>Preparing conversation...</Typography>
      </EmptyThread>
    );
  }

  if (conversationError) {
    return (
      <EmptyThread>
        <Typography>{conversationError}</Typography>
      </EmptyThread>
    );
  }

  return (
    <ThreadWrap>
      {messages.length ? (
        messages.map((message) => {
          const isMine = message.author === currentIdentity;
          return (
            <MessageRow key={message.sid} className={isMine ? "mine" : ""}>
              {!isMine && (
                <Avatar
                  key={selectedUser?.profileImage?.public_id}
                  src={
                    selectedUser?.profileImage?.public_id === "google-oauth"
                      ? selectedUser?.profileImage?.url
                      : undefined
                  }
                  alt={selectedUser?.name}
                  className="message-avatar"
                >
                  {getInitials(selectedUser?.name, selectedUser?.email)}
                </Avatar>
              )}
              <Box className="bubble">
                <Typography>{message.body}</Typography>
                <span>{formatMessageTime(message.dateCreated)}</span>
              </Box>
            </MessageRow>
          );
        })
      ) : (
        <EmptyThread>
          <Typography>
            No messages yet. Say hello to start the conversation.
          </Typography>
        </EmptyThread>
      )}
    </ThreadWrap>
  );
};

export default MessageThread;

const ThreadWrap = styled(Box)({
  flex: 1,
  minHeight: 0,
  padding: "24px 22px",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(255,250,250,0.82) 100%)",
});

const EmptyThread = styled(Box)({
  flex: 1,
  minHeight: "220px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  color: "#777",
  textAlign: "center",
  padding: "24px",
});

const MessageRow = styled(Box)({
  display: "flex",
  alignItems: "flex-end",
  gap: "10px",
  ".message-avatar": {
    width: 30,
    height: 30,
    fontSize: "0.65rem",
    fontWeight: 800,
    backgroundColor: "#222",
  },
  ".bubble": {
    maxWidth: "68%",
    padding: "13px 16px 9px",
    borderRadius: "8px",
    backgroundColor: "#fff3f3",
    color: "#555",
    boxShadow: "0 10px 24px rgba(0,0,0,0.03)",
  },
  ".bubble p": {
    fontSize: "0.82rem",
    lineHeight: 1.6,
  },
  ".bubble span": {
    display: "block",
    marginTop: "7px",
    color: "#aaa",
    fontSize: "0.66rem",
    textAlign: "right",
  },
  "&.mine": {
    justifyContent: "flex-end",
  },
  "&.mine .bubble": {
    backgroundColor: "#fff",
    color: "#4f4f4f",
  },
});
