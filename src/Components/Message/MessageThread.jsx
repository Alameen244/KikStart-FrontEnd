import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useAuth } from "../../Context/AuthContext.jsx";
import { useEffect, useRef } from "react";
import {
  formatMessageTime,
  getInitials,
  getProfileImageUrl,
} from "../../utils/messageUtils";

const MessageThread = ({
  messages,
  currentIdentity,
  selectedUser,
  isLoading,
  conversationError,
}) => {
  const { user: currentUser } = useAuth();
  const bottomRef = useRef(null);
  const prevLengthRef = useRef(0);

  useEffect(() => {
    prevLengthRef.current = 0;
  }, [selectedUser]);

  useEffect(() => {
    if (isLoading || !messages.length) return;

    const isFirstLoad = prevLengthRef.current === 0;
    const isNewMessage = messages.length === prevLengthRef.current + 1;

    if (isFirstLoad || isNewMessage) {
      bottomRef.current?.scrollIntoView({
        behavior: isFirstLoad ? "instant" : "smooth",
      });
    }

    prevLengthRef.current = messages.length;
  }, [messages, isLoading]);

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
                  key={
                    getProfileImageUrl(selectedUser) ||
                    selectedUser?.profileImage?.public_id
                  }
                  src={getProfileImageUrl(selectedUser)}
                  alt={selectedUser?.name}
                  imgProps={{ referrerPolicy: "no-referrer" }}
                  className="message-avatar"
                >
                  {getInitials(selectedUser?.name, selectedUser?.email)}
                </Avatar>
              )}
              <Box className="bubble">
                <Typography>{message.body}</Typography>
                <span>{formatMessageTime(message.dateCreated)}</span>
              </Box>
              {isMine && (
                <Avatar
                  key={
                    getProfileImageUrl(currentUser) ||
                    currentUser?.profileImage?.public_id
                  }
                  src={getProfileImageUrl(currentUser)}
                  alt={currentUser?.name}
                  imgProps={{ referrerPolicy: "no-referrer" }}
                  className="message-avatar sender-avatar"
                >
                  {getInitials(
                    currentUser?.name,
                    currentUser?.email || currentIdentity,
                  )}
                </Avatar>
              )}
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
      <div ref={bottomRef} />
    </ThreadWrap>
  );
};

export default MessageThread;

const ThreadWrap = styled(Box)({
  flex: 1,
  minHeight: 0,
  padding: "28px 26px",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  background: "linear-gradient(180deg, #fffdfd 0%, #fff7f7 100%)",
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
  gap: "11px",
  ".message-avatar": {
    width: 32,
    height: 32,
    fontSize: "0.65rem",
    fontWeight: 800,
    backgroundColor: "#2B2B2B",
    boxShadow: "0 0 0 2px #fff",
  },
  ".bubble": {
    maxWidth: "70%",
    padding: "14px 16px 10px",
    borderRadius: "16px 16px 16px 5px",
    backgroundColor: "#fff",
    color: "#4f4f4f",
    border: "1px solid #f1e2e2",
    boxShadow: "0 12px 26px rgba(43, 43, 43, 0.05)",
  },
  ".bubble p": {
    fontSize: "0.82rem",
    lineHeight: 1.6,
  },
  ".bubble span": {
    display: "block",
    marginTop: "8px",
    color: "#a7a7a7",
    fontSize: "0.66rem",
    textAlign: "right",
  },
  "&.mine": {
    justifyContent: "flex-end",
  },
  "&.mine .message-avatar": {
    backgroundColor: "#ED1C24",
  },
  "&.mine .bubble": {
    backgroundColor: "#ED1C24",
    color: "#fff",
    borderColor: "#ED1C24",
    borderRadius: "16px 16px 5px 16px",
    boxShadow: "0 14px 28px rgba(237, 28, 36, 0.18)",
  },
  "&.mine .bubble span": {
    color: "rgba(255, 255, 255, 0.75)",
  },
});
