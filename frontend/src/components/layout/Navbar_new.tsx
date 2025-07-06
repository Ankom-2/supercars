import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Menu, 
  MenuItem,
  Box,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  Car, 
  Menu as MenuIcon, 
  User, 
  LogOut, 
  Settings,
  BookOpen,
  Home
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [userMenuAnchor, setUserMenuAnchor] = useState<null | HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'Cars', path: '/cars', icon: <Car className="w-5 h-5" /> },
    { name: 'Blog', path: '/blog', icon: <BookOpen className="w-5 h-5" /> },
  ];

  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchor(null);
  };

  const handleLogout = () => {
    logout();
    handleUserMenuClose();
  };

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const renderDesktopNavigation = () => (
    <Box className="flex items-center space-x-8">
      {navigationItems.map((item) => (
        <Button
          key={item.name}
          component={Link}
          to={item.path}
          className={`text-white hover:text-blue-400 transition-colors duration-200 ${
            isActivePath(item.path) ? 'text-blue-400 font-semibold' : ''
          }`}
          startIcon={item.icon}
        >
          {item.name}
        </Button>
      ))}
    </Box>
  );

  const renderMobileNavigation = () => (
    <Drawer
      anchor="right"
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
      className="md:hidden"
    >
      <Box className="w-64 bg-slate-900 h-full">
        <div className="p-4 border-b border-slate-700">
          <Typography variant="h6" className="text-white font-bold">
            SuperCars
          </Typography>
        </div>
        <List>
          {navigationItems.map((item) => (
            <ListItem 
              key={item.name} 
              button 
              component={Link} 
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`hover:bg-slate-800 ${
                isActivePath(item.path) ? 'bg-slate-800 border-r-4 border-blue-400' : ''
              }`}
            >
              <Box className="flex items-center space-x-3 text-white">
                {item.icon}
                <ListItemText primary={item.name} />
              </Box>
            </ListItem>
          ))}
          {!user && (
            <>
              <ListItem 
                button 
                component={Link} 
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:bg-slate-800"
              >
                <ListItemText primary="Login" className="text-white" />
              </ListItem>
              <ListItem 
                button 
                component={Link} 
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:bg-slate-800"
              >
                <ListItemText primary="Register" className="text-white" />
              </ListItem>
            </>
          )}
        </List>
      </Box>
    </Drawer>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        className="bg-slate-900/95 backdrop-blur-lg border-b border-slate-700"
        elevation={0}
      >
        <Toolbar className="px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Box className="flex items-center space-x-2 flex-grow">
            <Car className="w-8 h-8 text-blue-400" />
            <Typography 
              variant="h5" 
              component={Link} 
              to="/" 
              className="text-white font-bold text-xl hover:text-blue-400 transition-colors duration-200 no-underline"
            >
              SuperCars
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <>
              {renderDesktopNavigation()}
              
              {/* User Actions */}
              <Box className="flex items-center space-x-4 ml-8">
                {user ? (
                  <>
                    <IconButton
                      onClick={handleUserMenuOpen}
                      className="p-1"
                    >
                      <Avatar 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-10 h-10"
                      >
                        {user.email?.charAt(0).toUpperCase() || 'U'}
                      </Avatar>
                    </IconButton>
                    <Menu
                      anchorEl={userMenuAnchor}
                      open={Boolean(userMenuAnchor)}
                      onClose={handleUserMenuClose}
                      className="mt-2"
                    >
                      <MenuItem 
                        onClick={handleUserMenuClose}
                        component={Link}
                        to="/profile"
                        className="flex items-center space-x-2"
                      >
                        <User className="w-4 h-4" />
                        <span>Profile</span>
                      </MenuItem>
                      {user.role === 'admin' && (
                        <MenuItem 
                          onClick={handleUserMenuClose}
                          component={Link}
                          to="/admin"
                          className="flex items-center space-x-2"
                        >
                          <Settings className="w-4 h-4" />
                          <span>Admin Dashboard</span>
                        </MenuItem>
                      )}
                      <MenuItem 
                        onClick={handleLogout}
                        className="flex items-center space-x-2 text-red-600"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Logout</span>
                      </MenuItem>
                    </Menu>
                  </>
                ) : (
                  <Box className="flex items-center space-x-3">
                    <Button
                      component={Link}
                      to="/login"
                      variant="outlined"
                      className="border-white text-white hover:bg-white hover:text-slate-900 transition-all duration-200"
                    >
                      Login
                    </Button>
                    <Button
                      component={Link}
                      to="/register"
                      variant="contained"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-200"
                    >
                      Get Started
                    </Button>
                  </Box>
                )}
              </Box>
            </>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              onClick={() => setMobileMenuOpen(true)}
              className="text-white"
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Navigation */}
      {renderMobileNavigation()}

      {/* Spacer for fixed navbar */}
      <Toolbar />
    </>
  );
};

export default Navbar;
