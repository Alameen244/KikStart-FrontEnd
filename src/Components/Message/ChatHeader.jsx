import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material/styles";
import { getInitials } from "../../utils/messageUtils.js";

const ChatHeader = ({ selectedUser, conversationSid }) => (
  <HeaderWrap>
    {selectedUser ? (
      <>
        <Avatar
          key={selectedUser?.profileImage?.public_id}
          src={
            selectedUser?.profileImage?.public_id === "google-oauth"
              ? selectedUser?.profileImage?.url
              : undefined
          }
          alt={selectedUser?.name}
          className="header-avatar"
        >
          {getInitials(selectedUser?.name, selectedUser?.email)}
        </Avatar>
        <Box sx={{ minWidth: 0 }}>
          <Typography className="header-name">
            {selectedUser?.name || "User"}
          </Typography>
          <Typography className="header-status">
            {conversationSid
              ? "Conversation ready"
              : "Create conversation to start"}
          </Typography>
        </Box>
      </>
    ) : (
      <Box>
        <Typography className="header-name">Select a user</Typography>
        <Typography className="header-status">
          Choose someone from the list to start chatting
        </Typography>
      </Box>
    )}
    <IconButton
      aria-label="Chat options"
      size="small"
      sx={{ marginLeft: "auto" }}
    >
      <MoreVertIcon fontSize="small" />
    </IconButton>
  </HeaderWrap>
);

export default ChatHeader;

const HeaderWrap = styled(Box)(({ theme }) => ({
  height: "78px",
  padding: "16px 22px",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  borderBottom: `1px solid ${theme.palette.divider}`,
  ".header-avatar": {
    width: 48,
    height: 48,
    border: `2px solid ${theme.palette.myRed}`,
    backgroundColor: "#202020",
    fontSize: "0.9rem",
    fontWeight: 800,
  },
  ".header-name": {
    color: "#1f1f1f",
    fontSize: "0.92rem",
    fontWeight: 800,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  ".header-status": {
    color: "#00a35c",
    fontSize: "0.76rem",
    fontWeight: 600,
    marginTop: "2px",
  },
}));
