import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import { Link, NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import kikstart from "../../assets/KIKSTART.png";
import RedButton from "../RedButton/RedButton";
import { useAuth } from "../../Context/AuthContext";
const pages = [
  { label: "About Us", path: "/about" },
  { label: "Programs", path: "/programs" },
  { label: "Why Us", path: "/why-us" },
  { label: "Contact Us", path: "/contact-us" },
  { label: "Interested Schools", path: "/schools" },
  { label: "Become a Coach", path: "/become-a-coach" },
  { label: "Coach's Login", path: "/subs" },
].filter(Boolean);

/* STYLED WRAPPERS (same values, no extras) */

const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: "#FFF8F8",
  margin: "auto",
  padding: "28px 0",
  boxShadow: "none",
  position: "static",
}));

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  alignItems: "center",
});

const LogoWrapper = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const MobileLogoWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  textDecoration: "none",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const LogoImg = styled("img")({
  cursor: "pointer",
});

const MobileMenuBox = styled(Box)(({ theme }) => ({
  display: "flex",
  order: 2,
  [theme.breakpoints.up("lg")]: {
    display: "none",
  },
}));
const StyledMenu = styled(Menu)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const StyledMenuItem = styled(MenuItem)({
  "&.active": {
    color: "myRed",
    backgroundColor: "rgba(255, 0, 0, 0.08)",
  },
  "&.hover": {
    backgroundColor: "rgba(0, 0, 0, 0.08)",
  },
});

const MenuTypography = styled(Typography)({
  textAlign: "center",
});

const DesktopMenu = styled(Box)(({ theme }) => ({
  flex: 1,
  justifyContent: "end",
  marginRight: "32px",
  display: "none",
  alignItems: "center",
  gap: 4,
  [theme.breakpoints.up("lg")]: {
    display: "flex",
  },
}));
const DesktopButton = styled(Button)(({ theme }) => ({
  color: "#000000",
  display: "block",
  fontSize: "16px",
  fontFamily: "Noto Sans",
  fontWeight: "400",
  textTransform: "none",
  fontStyle: "normal",
  gap: 2,
  "&.active": {
    color: theme.palette.myRed,
  },
  ":hover": {
    color: theme.palette.myRed,
    backgroundColor: "transparent",
  },
  "&:active": {
    backgroundColor: "transparent",
  },
  "&:focus": {
    backgroundColor: "transparent",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "transparent",
  },
}));

const ActionButtons = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "16px",
}));

const AccountButton = styled(Box)(({ theme }) => ({
  minHeight: "50px",
  borderRadius: "50px",
  padding: "13px 23px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontFamily: "Noto Sans",
  fontWeight: 500,
  fontSize: "16px",
  color: theme.palette.secondary.contrastText,
  backgroundColor: theme.palette.secondary.main,
  backgroundImage: `linear-gradient(
    to right,
    ${theme.palette.secondary.dark} 50%,
    ${theme.palette.secondary.main} 50%
  )`,
  backgroundSize: "200% 100%",
  backgroundPosition: "right",
  textDecoration: "none",
  transition: "background-position 360ms ease, box-shadow 260ms ease",
  "&:hover": {
    backgroundPosition: "left",
  },
}));

const AvatarWrap = styled(Box)({
  position: "relative",
  flexShrink: 0,
});

const AccountAvatar = styled(Avatar)({
  fontFamily: "Noto Sans",
  fontSize: "24px",
  fontWeight: 500,
  backgroundColor: "#1B2A41",
  color: "#FFFFFF",
});

const getAccountInitial = (name = "", email = "") => {
  const source = name || email || "A";
  const parts = source.trim().split(/\s+/).filter(Boolean);

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  return parts
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");
};

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const { user, isAuthenticated, logout } = useAuth();

  const isGoogleAuthUser = user?.profileImage?.public_id === "google-oauth";

  const googleProfileImage = isGoogleAuthUser
    ? user?.profileImage?.url
    : undefined;
  const accountInitial = getAccountInitial(user?.name, user?.email);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    Cookies.remove("token");
    localStorage.removeItem("loginName");

    logout({ redirectTo: "/login", showToast: true });
  };

  return (
    <StyledAppBar>
      <Container maxWidth="xl">
        <StyledToolbar disableGutters>
          {/* LEFT → LOGO */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LogoWrapper component={Link} to="/">
              <LogoImg src={kikstart} alt="logo" />
            </LogoWrapper>

            <MobileLogoWrapper component={Link} to="/">
              <LogoImg src={kikstart} alt="kikstart-logo" />
            </MobileLogoWrapper>
          </Box>

          {/* CENTER → NAV LINKS */}
          <DesktopMenu sx={{}}>
            {pages.map((page) => (
              <DesktopButton
                key={page.path}
                component={NavLink}
                to={page.path}
                onClick={handleCloseNavMenu}
              >
                {page.label}
              </DesktopButton>
            ))}
          </DesktopMenu>

          {/* RIGHT → BUTTONS + HAMBURGER */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <ActionButtons>
              {isAuthenticated ? (
                <RedButton
                  text="LOGOUT"
                  color="primary"
                  onClick={handleLogout}
                />
              ) : (
                <Box component={Link} to="/login">
                  <RedButton text="LOGIN" color="primary" />
                </Box>
              )}
              <AccountButton
                component={Link}
                to={isAuthenticated ? "/user-dashboard" : "/login"}
              >
                <AvatarWrap>
                  <AccountAvatar
                    key={googleProfileImage}
                    src={googleProfileImage}
                    alt={user?.name || "Your account"}
                  >
                    {accountInitial}
                  </AccountAvatar>
                </AvatarWrap>
                YOUR ACCOUNT
              </AccountButton>
            </ActionButtons>

            <MobileMenuBox>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="dark"
              >
                <MenuIcon />
              </IconButton>

              <StyledMenu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <StyledMenuItem
                    key={page.path}
                    component={NavLink}
                    to={page.path}
                    onClick={handleCloseNavMenu}
                  >
                    <MenuTypography>{page.label}</MenuTypography>
                  </StyledMenuItem>
                ))}
              </StyledMenu>
            </MobileMenuBox>
          </Box>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
}

export default Header;
