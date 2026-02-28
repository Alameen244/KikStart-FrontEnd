import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Link, NavLink } from "react-router-dom";
import kikstart from "../../assets/KIKSTART.png";
import RedButton from "../RedButton/RedButton";
const pages = [
  { label: "About Us", path: "/about" },
  { label: "Programs", path: "/programs" },
  { label: "Why Us", path: "/why-us" },
  { label: "Contact Us", path: "/contact" },
  { label: "Interested Schools", path: "/schools" },
  { label: "Become a Coach", path: "/become-a-coach" },
  { label: "Coach's Login", path: "/coach-login" },
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
  gap:4,
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
 gap:2,
  "&.active": {
    color: theme.palette.myRed,
  },
  ":hover": {
    color: theme.palette.myRed,
    backgroundColor: "transparent",
  },
}));

const ActionButtons = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "6px",
}));

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <StyledAppBar>
      <Container maxWidth="xl" >
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
              <Box component={Link} to="/subs">
                <RedButton text="LOGIN" color="primary" />
              </Box>
              <Box></Box>

              <RedButton text="REQUEST A FREE DEMO" color="secondary" />
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
