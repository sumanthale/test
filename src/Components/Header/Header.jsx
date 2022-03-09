import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Slide, useScrollTrigger, useTheme } from '@mui/material';
import { ColorModeContext } from '../../themes/colorModeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Twitter from '../../assets/images/twitter.gif';
import Google from '../../assets/images/google.png';
import Discord from '../../assets/images/discord.png';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { signIn, signOutUser } from '../../Helpers/Login';
const pages = [
  {
    name: 'Home',
    to: '/',
    public: true,
  },
  {
    name: 'Live Mints',
    to: 'live',
    public: true,
  },
  {
    name: 'Closed Mints',
    to: 'closed',
    public: true,
  },
  {
    name: 'Pick Winners',
    to: 'winners',
    public: false,
  },
];

const Header = () => {
  let navigate = useNavigate();
  let { user } = React.useContext(AuthContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  console.log(user);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <HideOnScroll>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h2"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', md: 'flex' } }}
            >
              Solana Laughing Buddha
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
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
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page, idx) => {
                  if (page.public || user) {
                    return (
                      <MenuItem
                        key={idx}
                        onClick={() => {
                          handleCloseNavMenu();
                          navigate(page.to);
                        }}
                      >
                        <Typography textAlign="center">{page.name}</Typography>
                      </MenuItem>
                    );
                  } else {
                    return null;
                  }
                })}
              </Menu>
            </Box>
            <Typography
              variant="h3"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              Solana Laughing Buddha
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'space-around',
                'button:first-of-type': {
                  marginLeft: 'auto',
                },
                'button:last-of-type': {
                  marginRight: 'auto',
                },
              }}
            >
              {pages.map((page, idx) => {
                if (page.public || user) {
                  return (
                    <Button
                      key={idx}
                      onClick={() => {
                        navigate(page.to);
                      }}
                      size="large"
                      sx={{
                        my: 1,
                        color: 'white',
                        display: 'block',
                        fontSize: '1rem',
                      }}
                    >
                      {page.name}
                    </Button>
                  );
                } else {
                  return null;
                }
              })}
            </Box>
            <IconButton
              sx={{ ml: 1, mr: 3 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === 'dark' ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <img
                src={Twitter}
                alt="img"
                width="40px"
                height="40px"
                style={{
                  borderRadius: '50%',
                  marginRight: '15px',
                  cursor: 'pointer',
                }}
              />
              <img
                src={Discord}
                alt="img"
                width="40px"
                height="40px"
                style={{
                  borderRadius: '50%',
                  marginRight: '15px',
                  cursor: 'pointer',
                }}
              />
            </Box>
            {user ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Log Out">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={user.photoURL} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem
                    onClick={() => {
                      handleCloseUserMenu();
                      signOutUser();
                    }}
                  >
                    <Typography textAlign="center">Log Out</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Admin Login">
                  <IconButton
                    onClick={() => {
                      signIn();
                    }}
                    sx={{ p: 0 }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src={Google}
                      sx={{
                        backgroundColor: 'transparent',
                      }}
                    />
                  </IconButton>
                </Tooltip>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};
export default Header;

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
