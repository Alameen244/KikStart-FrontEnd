import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import { Link, NavLink } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import kikstart from "./Images/KIKSTART.png";

const pages = [
  { label: "About Us", path: "/about" },
  { label: "Programs", path: "/programs" },
  { label: "Why Us", path: "/why-us" },
  { label: "Contact Us", path: "/contact" },
  { label: "Interested Schools", path: "/schools" },
  { label: "Become a Coach", path: "/become-a-coach" },
  { label: "Coach's Login", path: "/coach-login" },
].filter(Boolean);
function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#FFFAFA",
        maxWidth: "xl",
        margin: "auto",
        p: { xs: "10px 0", md: "20px 0 40px" },
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* LEFT SIDE → LOGO */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component={Link}
              to="/"
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <Box
                component="img"
                src={kikstart}
                alt="logo"
                sx={{ cursor: "pointer" }}
              />
            </Box>
            {/* MOBILE LOGO */}
            <Box
              component={NavLink}
              to="/app-bar-with-responsive-menu"
              sx={{
                display: { xs: "flex", md: "none" },
                textDecoration: "none",
              }}
            >
              <Box
                component="img"
                src={kikstart}
                alt="kikstart-logo"
                sx={{
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>

          {/* RIGHT SIDE → MENU + FUTURE BUTTONS */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              ml: { xs: 0, md: 2 },
              order: { xs: 1, md: 3 },
            }}
          >
            {/* MOBILE MENU ICON */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                order: 2,
              }}
            >
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
              <Menu
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
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.path}
                    component={NavLink}
                    to={page.path}
                    onClick={handleCloseNavMenu}
                    sx={{
                      "&.active": {
                        color: "myRed",
                        bgcolor: "rgba(255, 0, 0, 0.08)",
                      },
                      "&.hover": {
                        bgcolor: "rgba(0, 0, 0, 0.08)",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      {page.label}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* DESKTOP MENU */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 2,
                "& .MuiButton-root": {
                  minWidth: "auto",
                  whiteSpace: "nowrap",
                },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.path}
                  component={NavLink}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "#000000",
                    display: "block",
                    fontSize: "12px",
                    fontFamily: "Noto Sans",
                    textTransform: "none",
                    "&.active": {
                      color: "myRed",
                    },
                    "&.hover": {
                      bgcolor: "rgba(0, 0, 0, 0.08)",
                    },
                  }}
                >
                  {page.label}
                </Button>
              ))}
            </Box>

            {/* ACTION BUTTONS (NEW - LOGIN & DEMO) */}
            <Box
              sx={{
                display: { xs: "flex", md: "flex" },
                alignItems: "center",
                gap: 2,
                ml: 2, // spacing from menu
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                component={RouterLink}
                to="/subs"
                sx={{
                  borderRadius: "50px",
                  px: { xs: 1.5, md: 3 },
                  py: { xs: 0.8, md: 1.5 },
                  fontSize: { xs: "10px", md: "14px" },
                  whiteSpace: "nowrap",
                }}
              >
                LOGIN
              </Button>

              <Button
                variant="contained"
                color="secondary"
                sx={{
                  borderRadius: "50px",
                  px: { xs: 1.5, md: 3 }, // responsive padding
                  py: { xs: 0.8, md: 1.5 },
                  fontSize: { xs: "10px", md: "14px" },
                  whiteSpace: "nowrap",
                }}
              >
                REQUEST A FREE DEMO
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
