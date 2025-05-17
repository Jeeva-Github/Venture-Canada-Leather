import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography, Container, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './style.css';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const menuItems = (
    <List className="drawer-menu">
      {['Home', 'Products', 'About'].map((text) => (
        <ListItem
          button
          key={text}
          component={NavLink}
          to={text === 'Home' ? '/' : `/${text.toLowerCase().replace(/\s/g, '')}`}
          onClick={toggleDrawer(false)}
        >
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Container maxWidth="lg" className="navbar-container">
          <div className="navbar-left">
            {isMobile && (
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)} className="menu-icon">
                <MenuIcon />
              </IconButton>
            )}
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="h6" component="div" className="navbar-title">
                Venture Canada Leather
              </Typography>
            </Link>
          </div>

          {!isMobile && (
            <div className="navbar-buttons">
              {[
                { label: 'Home', icon: <HomeIcon />, path: '/' },
                { label: 'Products', icon: <ShoppingBasketIcon />, path: '/products' },
                { label: 'About Us', icon: <InfoIcon />, path: '/about' },
              ].map(({ label, icon, path }) => (
                <NavLink
                  key={label}
                  to={path}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  <Button color="inherit" startIcon={icon}>
                    {label}
                  </Button>
                </NavLink>
              ))}
            </div>
          )}
        </Container>
      </Toolbar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div className="drawer-header">
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </div>
        {menuItems}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
