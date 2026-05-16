import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import { styled } from "@mui/material/styles";
import { getInitials, getUserId } from "../../utils/messageUtils.js";

const ConversationList = ({
  users,
  selectedUser,
  searchTerm,
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
            return (
              <UserButton
                key={getUserId(chatUser)}
                type="button"
                className={isActive ? "active" : ""}
                onClick={() => onSelectUser(chatUser)}
              >
                <Avatar
                  key={chatUser?.profileImage?.public_id}
                  src={
                    chatUser?.profileImage?.public_id === "google-oauth"
                      ? chatUser?.profileImage?.url
                      : undefined
                  }
                  className="user-avatar"
                >
                  {getInitials(chatUser?.name, chatUser?.email)}
                </Avatar>
                <Box className="user-copy">
                  <Box className="user-row">
                    <Typography className="user-name">
                      {chatUser?.name || "User"}
                    </Typography>
                    <Typography className="user-time">09:39pm</Typography>
                  </Box>
                  <Typography className="user-preview">
                    {chatUser?.email || "Start a conversation"}
                  </Typography>
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
  width: "320px",
  minWidth: "280px",
  display: "flex",
  flexDirection: "column",
  borderRight: `1px solid ${theme.palette.divider}`,
  backgroundColor: "#fff",
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
  padding: "20px 22px 12px",
  h2: {
    color: "#222",
    fontSize: "1.05rem",
    fontWeight: 800,
  },
});

const SearchBox = styled(Box)({
  height: "44px",
  margin: "0 22px 14px",
  padding: "0 14px",
  border: "1px solid #dfdfdf",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  color: "#8b8b8b",
  ".MuiInputBase-root": {
    flex: 1,
    fontSize: "0.82rem",
  },
});

const UsersScroll = styled(Box)({
  overflowY: "auto",
  padding: "0 14px 18px",
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
  minHeight: "72px",
  border: 0,
  backgroundColor: "transparent",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "10px",
  textAlign: "left",
  cursor: "pointer",
  transition: "background-color 0.2s ease",
  borderBottom: "1px solid #f0f0f0",
  "&:hover": {
    backgroundColor: "#fff3f3",
  },
  "&.active": {
    backgroundColor: "#ffd1d4",
  },
  ".user-avatar": {
    width: 44,
    height: 44,
    border: `2px solid ${theme.palette.myRed}`,
    backgroundColor: "#212121",
    fontSize: "0.85rem",
    fontWeight: 800,
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
    color: theme.palette.myRed,
    fontSize: "0.68rem",
    fontWeight: 600,
    whiteSpace: "nowrap",
  },
  ".user-preview": {
    marginTop: "3px",
    color: "#777",
    fontSize: "0.76rem",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
}));
