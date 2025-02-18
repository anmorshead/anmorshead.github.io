import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const pages = [
    { name: "Home", path: "/", color: "#ff63d8" },
    { name: "Projects", path: "/projects", color: "#Fbd90b" },
    {
      name: "Resume",
      path: "https://drive.google.com/file/d/1Z_R_VHefdSqph0Wg_oO4dnhBCN9cKZZY/view?usp=sharing",
      color: "#8ff0fb",
    },
  ];

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
      <Container maxWidth="4xl">
        <Toolbar disableGutters sx={{ width: "100%", display: "flex", alignItems: "center" }}>
          {/* Desktop Logo */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography sx={{ display: { xs: "none", md: "flex" } }}>
              <img
                src={isHovered ? "images/AM-home.png" : "images/AM.png"}
                className="h-20 object-contain m-2"
                alt="Logo"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </Typography>
          </Link>

          {/* Mobile View: Flexbox wrapper to separate logo and menu */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Mobile Logo (Left) */}
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography variant="h6" noWrap>
                <img src="images/AM.png" className="h-10 object-contain m-2" alt="Logo" />
              </Typography>
            </Link>

            {/* Mobile Menu Icon (Right) */}
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: '#fc0fc0' }}
            >
              <MenuIcon />
            </IconButton>

            {/* Mobile Dropdown Menu */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }} 
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                "& .MuiPaper-root": { backgroundColor: "black" },
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Button
                    component={page.name === "Resume" ? "a" : Link}
                    href={page.name === "Resume" ? page.path : undefined}
                    to={page.name !== "Resume" ? page.path : undefined}
                    target={page.name === "Resume" ? "_blank" : undefined}
                    rel={page.name === "Resume" ? "noopener noreferrer" : undefined}
                    sx={{
                      color: page.color,
                      fontFamily: "'Roboto Condensed', sans-serif",
                      fontWeight: 300,
                      fontSize: "1.2rem",
                    }}
                  >
                    {page.name}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "flex-end", gap: 3 }}>
            {pages.map((page) => (
                <Button
                key={page.name}
                component={page.name === 'Resume' ? 'a' : Link}
                href={page.name === 'Resume' ? page.path : undefined}
                to={page.name !== 'Resume' ? page.path : undefined}
                target={page.name === 'Resume' ? '_blank' : undefined}
                rel={page.name === 'Resume' ? 'noopener noreferrer' : undefined}
                sx={{
                  my: 2,
                  color: page.color,
                  display: 'block',
                  fontFamily: "'Roboto Condensed', sans-serif",
                  fontWeight: 300,
                  fontSize: '1.2rem',
                  position: 'relative', 
                  '&:after': {
                    content: "''",
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: 'auto',
                    width: '0%',
                    height: '1px',
                    background: page.color,
                    transition: 'width 0.3s ease',
                  },
                  '&:hover:after': {
                    width: '100%',
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}



