import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
} from "@mui/material";
import {
  Chat,
  Dashboard,
  Laptop,
  PeopleAlt,
  Login,
  AccountBalance,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useAuth } from "../../../../../frontEnd/src/Context/AuthContext";



export default function Sidebar() {
  const [contentOpen, setContentOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();
  const isLoggedIn = Boolean(user);

  const isActive = (path) => {
    if (path === "/user-dashboard") {
      return location.pathname === "/user-dashboard";
    }

    return (
      location.pathname === path || location.pathname.startsWith(`${path}/`)
    );
  };



  const handleLogout = () => {
    localStorage.removeItem("loginName");
    logout({ redirectTo: "/login", showToast: true });
  };

  return (
    <SidebarWrapper>
      <List sx={{ padding: "16px 0" }}>
        {/* Dashboard */}
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/user-dashboard"
            className={isActive("/user-dashboard") ? "active" : ""}
          >
            <ListItemIcon
              sx={{ color: isActive("/user-dashboard") ? "activeSidebar" : "white" }}
            >
              <Dashboard />
            </ListItemIcon>

            <ListItemText
              primary="Dashboard"
              sx={{
                "& .MuiListItemText-primary": {
                  color: isActive("/user-dashboard") ? "activeSidebar" : "white",
                  fontWeight: isActive("/user-dashboard") ? 600 : 400,
                },
              }}
            />
          </ListItemButton>
        </ListItem>

        {/* Programs */}
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/user-dashboard/dashboard-programs"
            className={isActive("/user-dashboard/dashboard-programs") ? "active" : ""}
          >
            <ListItemIcon
              sx={{ color: isActive("/user-dashboard/dashboard-programs") ? "activeSidebar" : "white" }}
            >
              <Laptop />
            </ListItemIcon>

            <ListItemText
              primary="Programs"
              sx={{
                "& .MuiListItemText-primary": {
                  color: isActive("/user-dashboard/dashboard-programs") ? "activeSidebar" : "white",
                  fontWeight: isActive("/user-dashboard/dashboard-programs") ? 600 : 400,
                },
              }}
            />
          </ListItemButton>
        </ListItem>

        {/* Children Profile */}
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/user-dashboard/dashboard-children-profile"
            className={isActive("/user-dashboard/dashboard-children-profile") ? "active" : ""}
          >
            <ListItemIcon
              sx={{
                color: isActive("/user-dashboard/dashboard-children-profile")
                  ? "activeSidebar"
                  : "white",
              }}
            >
              <PeopleAlt />
            </ListItemIcon>

            <ListItemText
              primary="Children Profile"
              sx={{
                "& .MuiListItemText-primary": {
                  color: isActive("/user-dashboard/dashboard-children-profile")
                    ? "activeSidebar"
                    : "white",
                  fontWeight: isActive("/user-dashboard/dashboard-children-profile") ? 600 : 400,
                },
              }}
            />
          </ListItemButton>
        </ListItem>

        {/* My Transactions */}
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/user-dashboard/dashboard-transactions"
            className={isActive("/user-dashboard/dashboard-transactions") ? "active" : ""}
          >
            <ListItemIcon
              sx={{
                color: isActive("/user-dashboard/dashboard-transactions")
                  ? "activeSidebar"
                  : "white",
              }}
            >
              <AccountBalance/>
            </ListItemIcon>

            <ListItemText
              primary="My Transactions"
              sx={{
                "& .MuiListItemText-primary": {
                  color: isActive("/user-dashboard/dashboard-transactions")
                    ? "activeSidebar"
                    : "white",
                  fontWeight: isActive("/user-dashboard/dashboard-transactions") ? 600 : 400,
                },
              }}
            />
          </ListItemButton>
        </ListItem>

        {/* Message */}
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/user-dashboard/dashboard-messages"
            className={isActive("/user-dashboard/dashboard-messages") ? "active" : ""}
          >
            <ListItemIcon
              sx={{
                color: isActive("/user-dashboard/dashboard-messages")
                  ? "activeSidebar"
                  : "white",
              }}
            >
              <Chat/>
            </ListItemIcon>

            <ListItemText
              primary="Message"
              sx={{
                "& .MuiListItemText-primary": {
                  color: isActive("/user-dashboard/dashboard-messages")
                    ? "activeSidebar"
                    : "white",
                  fontWeight: isActive("/user-dashboard/dashboard-messages") ? 600 : 400,
                },
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
      {/* admin login */}
      <Box sx={{ padding: "0 20px 20px", marginTop: "auto" }}>
        <ListItemButton
          component={isLoggedIn ? "button" : Link}
          to={isLoggedIn ? undefined : "/login"}
          onClick={isLoggedIn ? handleLogout : undefined}
          className={isActive("/login") ? "active" : ""}
          sx={{
            borderRadius: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.08)",
          }}
        >
          <ListItemIcon
            sx={{
              color: isActive("/login") ? "activeSidebar" : "white",
            }}
          >
            <Login />
          </ListItemIcon>
          <ListItemText
            primary={isLoggedIn ? "Logout" : "Login"}
            sx={{
              "& .MuiListItemText-primary": {
                color: isActive("/login") ? "activeSidebar" : "white",
                fontWeight: isActive("/login") ? 600 : 500,
              },
            }}
          />
        </ListItemButton>
      </Box>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.sidebar.bg,
  overflowY: "auto",
  overflowX: "hidden",
  scrollbarWidth: "thin",
  scrollbarColor: `${theme.palette.activeSidebar} ${theme.palette.sidebar.bg}`,

  "&::-webkit-scrollbar": {
    width: "8px",
  },

  "&::-webkit-scrollbar-track": {
    backgroundColor: theme.palette.sidebar.bg,
  },

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.activeSidebar,
    borderRadius: "999px",
  },

  ".MuiListItemButton-root": {
    padding: "12px 20px",
    transition: "all 0.2s ease",

    "&:hover": {
      backgroundColor: theme.palette.sidebar.hover,
    },

    "&.active": {
      backgroundColor: theme.palette.sidebar.active,
      borderLeft: `3px solid ${theme.palette.myRed}`,
    },
  },

  ".MuiListItemIcon-root": {
    minWidth: "40px",
  },
}));
