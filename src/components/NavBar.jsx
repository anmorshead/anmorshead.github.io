import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const pages = [
    { name: 'Home', path: '/', color: '#ff63d8' },
    { name: 'Projects', path: '/projects', color: '#Fbd90b' },
    { name: 'Resume', path: 'https://drive.google.com/file/d/1HMcLIYtjl62FH2bN0dosxCkRYMPO_62E/view?usp=sharing', color: '#8ff0fb' },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Black with 70% transparency
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for Desktop */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography
              sx={{
                display: { xs: 'none', md: 'flex' }
              }}
            >
              <img src="images/neonwelcome.png" className="h-10 object-contain m-2" alt="Logo" />
            </Typography>
          </Link>

          {/* Responsive Menu Icon */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
            <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                '& .MuiPaper-root': {
                backgroundColor: 'black'},
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) =>
                page.name === 'Resume' ? (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Button
                      href={page.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: page.color,
                        textAlign: 'center',
                      }}
                    >
                      {page.name}
                    </Button>
                  </MenuItem>
                ) : (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Button
                      component={Link}
                      to={page.path}
                      sx={{
                        color: page.color,
                      }}
                    >
                      {page.name}
                    </Button>
                  </MenuItem>
                )
              )}
            </Menu>
          </Box>

          {/* Logo for Mobile */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
            }}
          >
            <img src="images/neonwelcome.png" className="h-10 object-contain m-2" alt="Logo" />
          </Typography>

          {/* Desktop Links */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) =>
              page.name === 'Resume' ? (
                <Button
                  key={page.name}
                  href={page.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    my: 2,
                    color: page.color,
                    display: 'block',
                    fontWeight: 'bold',
                  }}
                >
                  {page.name}
                </Button>
              ) : (
                <Button
                  key={page.name}
                  component={Link}
                  to={page.path}
                  sx={{
                    my: 2,
                    color: page.color,
                    display: 'block',
                    fontWeight: 'bold',
                  }}
                >
                  {page.name}
                </Button>
              )
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}


