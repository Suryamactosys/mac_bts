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
// import Avatar from "@mui/material/Avatar";
// import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

// const pages = ["Products", "Pricing", "FAQ", "Company", "Contact"];
// const settings = ["Profile", "Account", "Dashboard →", "Logout"];
const pages = [
  { id: 1, name: "Products", link: "/products" },
  { id: 2, name: "Pricing", link: "/pricing" },
  { id: 3, name: "FAQ", link: "/faq" },
  { id: 4, name: "Company", link: "/company" },
  { id: 5, name: "Contact", link: "/contact" },
];

const ColorButton = styled(Button)(() => ({
  backgroundColor: "White",
  border: "none",
  "&:hover": {
    backgroundColor: "#FF7E78",
    color: "white",
  },
}));
function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar
      position="static"
      sx={{
        color: "Black",
        backgroundColor: "transparent",
        boxShadow: "none",
      }}>
      <Box>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}>
              BTS
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit">
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
                sx={{
                  display: { xs: "block", md: "none", color: "black" },
                }}>
                {pages.map((page) => (
                  <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: "center" }}>
                      {page.name}
                    </Typography>
                  </MenuItem>
                  // <MenuItem
                  //   onClick={handleCloseNavMenu}
                  //   key={page.id}
                  //   to={page.link}
                  //   style={{
                  //     fontSize: "1rem",
                  //   }}
                  //   className={({ isActive }) =>
                  //     isActive ? "nav-link-active" : "nav-link"
                  //   }>
                  //   {page.name}
                  // </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}>
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Typography
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    marginLeft: "40px",
                    fontWeight: "600",
                    fontSize: "22px",
                    textDecoration: "none",
                  }}
                  component={Link}
                  to={page.link}>
                  {page.name}
                </Typography>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                columnGap: 2,
              }}>
              <Link to={"/login"}>
                <ColorButton
                  variant="contained"
                  className="btn2"
                  sx={{
                    backgroundColor: "white",
                    color: "red",
                    textDecoration: "none",
                  }}>
                  Request Quote
                </ColorButton>{" "}
              </Link>{" "}
              <ColorButton
                variant="contained"
                className="btn2"
                sx={{
                  backgroundColor: "white",
                  color: "red",
                  textDecoration: "none",
                }}>
                Dashboard →
              </ColorButton>
            </Box>
            {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          </Toolbar>
        </Container>
      </Box>
    </AppBar>
  );
}
export default Header;
