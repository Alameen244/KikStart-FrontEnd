import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import { styled } from "@mui/material/styles";
import {
  formatMessageTime,
  getInitials,
  getProfileImageUrl,
  getUserId,
  getUserIdentity,
} from "../../utils/messageUtils.js";

const ConversationList = ({
  users,
  selectedUser,
  searchTerm,
  unreadCounts,
  lastMessages,
  lastMessageTimes,
  isLoading,
  error,
  onSearch,
  onRefresh,
  onSelectUser,
}) => {
  return (
    <ListPanel>
      <ListHeader>
        <Typography component="h2">Messages</Typography>
        <IconButton aria-label="Refresh users" size="small" onClick={onRefresh}>
          <RefreshIcon fontSize="small" />
        </IconButton>
      </ListHeader>

      <SearchBox>
        <InputBase
          value={searchTerm}
          onChange={(event) => onSearch(event.target.value)}
          placeholder="Search message"
          inputProps={{ "aria-label": "Search messages" }}
        />
        <SearchIcon fontSize="small" />
      </SearchBox>

      <UsersScroll>
        {isLoading ? (
          <StateBox>
            <CircularProgress size={24} />
            <Typography>Loading users...</Typography>
          </StateBox>
        ) : error ? (
          <StateBox>
            <Typography>{error}</Typography>
          </StateBox>
        ) : users.length ? (
          users.map((chatUser) => {
            const isActive = getUserId(selectedUser) === getUserId(chatUser);
            const identity = getUserIdentity(chatUser);
            const unreadCount = unreadCounts?.[identity] || 0;
            const lastMessage = lastMessages?.[identity];
            const lastMessageTime = lastMessageTimes?.[identity];
            const hasUnreadIncoming = unreadCount > 0;
            const previewText =
              hasUnreadIncoming && unreadCount >= 2
                ? `${Math.min(unreadCount, 4)}+ new messages`
                : lastMessage || "No messages yet";
            return (
              <UserButton
                key={getUserId(chatUser)}
                type="button"
                className={[isActive ? "active" : "", hasUnreadIncoming ? "unread" : ""]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => onSelectUser(chatUser)}
              >
                <Avatar
                  key={getProfileImageUrl(chatUser) || chatUser?.profileImage?.public_id}
                  src={getProfileImageUrl(chatUser)}
                  imgProps={{ referrerPolicy: "no-referrer" }}
                  className="user-avatar"
                >
                  {getInitials(chatUser?.name, chatUser?.email)}
                </Avatar>
                <Box className="user-copy">
                  <Box className="user-row">
                    <Typography className="user-name">
                      {chatUser?.name || "User"}
                    </Typography>
                    <Typography className="user-time">
                      {formatMessageTime(lastMessageTime)}
                    </Typography>
                  </Box>
                  <Box className="preview-row">
                    <Typography className="user-preview">
                      {previewText}
                    </Typography>
                    {hasUnreadIncoming && <UnreadDot />}
                  </Box>
                </Box>
              </UserButton>
            );
          })
        ) : (
          <StateBox>
            <Typography>No users found</Typography>
          </StateBox>
        )}
      </UsersScroll>
    </ListPanel>
  );
};

export default ConversationList;

const ListPanel = styled(Box)(({ theme }) => ({
  width: "340px",
  minWidth: "300px",
  display: "flex",
  flexDirection: "column",
  borderRight: "1px solid rgba(237, 28, 36, 0.08)",
  backgroundColor: "#fff9f9",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    minWidth: 0,
    borderRight: 0,
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

const ListHeader = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "22px 22px 14px",
  h2: {
    color: "#1f1f1f",
    fontSize: "1.08rem",
    fontWeight: 800,
  },
  ".MuiIconButton-root": {
    backgroundColor: "#fff",
    border: "1px solid #f1dddd",
    color: "#ED1C24",
  },
});

const SearchBox = styled(Box)({
  height: "46px",
  margin: "0 22px 14px",
  padding: "0 15px",
  border: "1px solid #efdada",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  color: "#a57474",
  backgroundColor: "#fff",
  boxShadow: "0 8px 20px rgba(237, 28, 36, 0.04)",
  ".MuiInputBase-root": {
    flex: 1,
    fontSize: "0.82rem",
  },
});

const UsersScroll = styled(Box)({
  overflowY: "auto",
  padding: "0 14px 20px",
  flex: 1,
  minHeight: 0,
});

const StateBox = styled(Box)({
  minHeight: "180px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  color: "#7b7b7b",
  textAlign: "center",
});

const UserButton = styled("button")(({ theme }) => ({
  width: "100%",
  minHeight: "76px",
  border: "1px solid transparent",
  backgroundColor: "transparent",
  borderRadius: "14px",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "11px",
  textAlign: "left",
  cursor: "pointer",
  transition:
    "background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
  marginBottom: "8px",
  "&:hover": {
    backgroundColor: "#fff",
    borderColor: "#f3d5d5",
    boxShadow: "0 12px 26px rgba(43, 43, 43, 0.05)",
  },
  "&.active": {
    backgroundColor: "#fff",
    borderColor: "rgba(237, 28, 36, 0.22)",
    boxShadow: "0 14px 30px rgba(237, 28, 36, 0.12)",
  },
  "&.unread": {
    backgroundColor: "#fff",
    borderColor: "rgba(255, 136, 0, 0.45)",
    boxShadow: "0 14px 30px rgba(255, 136, 0, 0.12)",
  },
  ".user-avatar": {
    width: 46,
    height: 46,
    border: "2px solid #fff",
    backgroundColor: "#2B2B2B",
    fontSize: "0.85rem",
    fontWeight: 800,
    boxShadow: `0 0 0 2px ${theme.palette.myRed}`,
  },
  ".user-copy": {
    minWidth: 0,
    flex: 1,
  },
  ".user-row": {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  ".user-name": {
    color: "#1f1f1f",
    fontSize: "0.86rem",
    fontWeight: 800,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    flex: 1,
  },
  ".user-time": {
    color: "#a6a6a6",
    fontSize: "0.68rem",
    fontWeight: 600,
    whiteSpace: "nowrap",
  },
  ".preview-row": {
    marginTop: "3px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    minWidth: 0,
  },
  ".user-preview": {
    color: "#777",
    fontSize: "0.76rem",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    minWidth: 0,
    flex: 1,
  },
  "&.unread .user-name": {
    color: "#101010",
  },
  "&.unread .user-preview": {
    color: "#202020",
    fontWeight: 800,
  },
}));

const UnreadDot = styled(Box)(() => ({
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  backgroundColor: "#ff8800",
  flex: "0 0 auto",
  boxShadow: "0 0 0 4px rgba(255, 136, 0, 0.12)",
}));
