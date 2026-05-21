import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material/styles";
import { getInitials, getProfileImageUrl } from "../../utils/messageUtils.js";

const ChatHeader = ({ selectedUser, conversationSid }) => (
  <HeaderWrap>
    {selectedUser ? (
      <>
        <Avatar
          key={getProfileImageUrl(selectedUser) || selectedUser?.profileImage?.public_id}
          src={getProfileImageUrl(selectedUser)}
          alt={selectedUser?.name}
          imgProps={{ referrerPolicy: "no-referrer" }}
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
  height: "84px",
  padding: "18px 24px",
  display: "flex",
  alignItems: "center",
  gap: "14px",
  borderBottom: "1px solid rgba(237, 28, 36, 0.08)",
  backgroundColor: "#fff",
  ".header-avatar": {
    width: 50,
    height: 50,
    border: "3px solid #fff",
    backgroundColor: "#202020",
    fontSize: "0.9rem",
    fontWeight: 800,
    boxShadow: `0 0 0 2px ${theme.palette.myRed}, 0 12px 22px rgba(237, 28, 36, 0.14)`,
  },
  ".header-name": {
    color: "#1f1f1f",
    fontSize: "0.98rem",
    fontWeight: 800,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  ".header-status": {
    color: "#00a35c",
    fontSize: "0.76rem",
    fontWeight: 600,
    marginTop: "3px",
  },
  ".MuiIconButton-root": {
    backgroundColor: "#fff8f8",
    border: "1px solid #f1dddd",
    color: "#777",
  },
  ".MuiIconButton-root:hover": {
    backgroundColor: "#fff0f0",
  },
}));
