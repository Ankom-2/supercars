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
  useTheme,
  useMediaQuery,
  Badge,
  Divider,
  Container,
  Paper
} from '@mui/material';
import { 
  Car, 
  Menu as MenuIcon, 
  User, 
  LogOut, 
  Settings,
  BookOpen,
  Home,
  X,
  Heart,
  Search,
  Zap
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
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'New Cars', path: '/cars', icon: <Car size={18} /> },
    { name: 'Used Cars', path: '/used-cars', icon: <Car size={18} /> },
    { name: 'Electric', path: '/electric-cars', icon: <Zap size={18} /> },
    { name: 'Compare', path: '/compare', icon: <Search size={18} /> },
    { name: 'News', path: '/blog', icon: <BookOpen size={18} /> },
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

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 1px 20px rgba(0, 0, 0, 0.1)',
          borderBottom: '1px solid rgba(229, 231, 235, 0.8)'
        }}
        elevation={0}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ px: { xs: 2, sm: 3 }, py: 1.5, minHeight: { xs: '64px', sm: '72px' } }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box 
                  sx={{ 
                    width: 40, 
                    height: 40, 
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
                  }}
                >
                  <Car size={20} color="white" />
                </Box>
                <Typography 
                  variant="h5" 
                  component={Link} 
                  to="/" 
                  sx={{
                    textDecoration: 'none',
                    fontWeight: 800,
                    fontSize: { xs: '1.3rem', sm: '1.5rem' },
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    fontFamily: '"Roboto", sans-serif',
                    '&:hover': {
                      opacity: 0.8,
                    }
                  }}
                >
                  SuperCars
                </Typography>
              </Box>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1 }}>
                  {navigationItems.map((item) => (
                    <Button
                      key={item.name}
                      component={Link}
                      to={item.path}
                      startIcon={item.icon}
                      sx={{
                        color: isActivePath(item.path) ? '#667eea' : '#4a5568',
                        fontWeight: isActivePath(item.path) ? 600 : 500,
                        fontSize: '0.95rem',
                        textTransform: 'none',
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        transition: 'all 0.2s ease',
                        position: 'relative',
                        '&:hover': {
                          backgroundColor: 'rgba(102, 126, 234, 0.08)',
                          color: '#667eea',
                        },
                        '&::after': isActivePath(item.path) ? {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '24px',
                          height: '3px',
                          backgroundColor: '#667eea',
                          borderRadius: '2px',
                        } : {}
                      }}
                    >
                      {item.name}
                    </Button>
                  ))}
                </Box>
                
                {/* User Actions */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  {user ? (
                    <>
                      <IconButton 
                        sx={{ 
                          p: 1.5,
                          '&:hover': { backgroundColor: 'rgba(102, 126, 234, 0.08)' }
                        }}
                      >
                        <Badge badgeContent={2} color="error">
                          <Heart size={20} color="#6b7280" />
                        </Badge>
                      </IconButton>
                      <IconButton
                        onClick={handleUserMenuOpen}
                        sx={{ p: 0.5 }}
                      >
                        <Avatar 
                          sx={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            width: 40,
                            height: 40,
                            fontSize: '1rem',
                            fontWeight: 600
                          }}
                        >
                          {user.email?.charAt(0).toUpperCase() || 'U'}
                        </Avatar>
                      </IconButton>
                      <Menu
                        anchorEl={userMenuAnchor}
                        open={Boolean(userMenuAnchor)}
                        onClose={handleUserMenuClose}
                        sx={{ mt: 1.5 }}
                        PaperProps={{
                          elevation: 8,
                          sx: {
                            mt: 1.5,
                            borderRadius: 3,
                            border: '1px solid rgba(229, 231, 235, 0.8)',
                            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                            minWidth: 200,
                            '&:before': {
                              content: '""',
                              display: 'block',
                              position: 'absolute',
                              top: 0,
                              right: 14,
                              width: 10,
                              height: 10,
                              bgcolor: 'background.paper',
                              transform: 'translateY(-50%) rotate(45deg)',
                              zIndex: 0,
                            },
                          },
                        }}
                      >
                        <MenuItem 
                          onClick={handleUserMenuClose}
                          component={Link}
                          to="/profile"
                          sx={{ 
                            py: 1.5, 
                            px: 2.5,
                            '&:hover': { backgroundColor: 'rgba(102, 126, 234, 0.08)' }
                          }}
                        >
                          <User size={18} style={{ marginRight: '12px' }} />
                          <span>Profile</span>
                        </MenuItem>
                        <MenuItem 
                          onClick={handleUserMenuClose}
                          component={Link}
                          to="/wishlist"
                          sx={{ 
                            py: 1.5, 
                            px: 2.5,
                            '&:hover': { backgroundColor: 'rgba(102, 126, 234, 0.08)' }
                          }}
                        >
                          <Heart size={18} style={{ marginRight: '12px' }} />
                          <span>Wishlist</span>
                        </MenuItem>
                        {user.role === 'admin' && (
                          <MenuItem 
                            onClick={handleUserMenuClose}
                            component={Link}
                            to="/admin"
                            sx={{ 
                              py: 1.5, 
                              px: 2.5,
                              '&:hover': { backgroundColor: 'rgba(102, 126, 234, 0.08)' }
                            }}
                          >
                            <Settings size={18} style={{ marginRight: '12px' }} />
                            <span>Admin Dashboard</span>
                          </MenuItem>
                        )}
                        <Divider sx={{ my: 1 }} />
                        <MenuItem 
                          onClick={handleLogout}
                          sx={{ 
                            py: 1.5, 
                            px: 2.5,
                            color: '#dc2626',
                            '&:hover': { backgroundColor: 'rgba(220, 38, 38, 0.08)' }
                          }}
                        >
                          <LogOut size={18} style={{ marginRight: '12px' }} />
                          <span>Logout</span>
                        </MenuItem>
                      </Menu>
                    </>
                  ) : (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Button
                        component={Link}
                        to="/login"
                        variant="outlined"
                        sx={{
                          borderColor: '#d1d5db',
                          color: '#4a5568',
                          textTransform: 'none',
                          fontWeight: 600,
                          px: 3,
                          py: 1,
                          borderRadius: 2,
                          '&:hover': {
                            borderColor: '#667eea',
                            backgroundColor: 'rgba(102, 126, 234, 0.08)',
                            color: '#667eea',
                          }
                        }}
                      >
                        Login
                      </Button>
                      <Button
                        component={Link}
                        to="/register"
                        variant="contained"
                        sx={{
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          textTransform: 'none',
                          fontWeight: 600,
                          px: 3,
                          py: 1,
                          borderRadius: 2,
                          boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)',
                            boxShadow: '0 6px 16px rgba(102, 126, 234, 0.4)',
                          }
                        }}
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
                sx={{ 
                  ml: 'auto',
                  color: '#4a5568',
                  '&:hover': { backgroundColor: 'rgba(102, 126, 234, 0.08)' }
                }}
              >
                <MenuIcon size={24} />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <Box
          sx={{
            position: 'fixed',
            inset: 0,
            zIndex: 1300,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <Paper
            sx={{
              position: 'absolute',
              right: 0,
              top: 0,
              height: '100%',
              width: 320,
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
              borderLeft: '1px solid rgba(229, 231, 235, 0.8)',
              transform: 'translateX(0)',
              transition: 'transform 0.3s ease-in-out',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Box sx={{ p: 3, borderBottom: '1px solid rgba(229, 231, 235, 0.8)' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  SuperCars
                </Typography>
                <IconButton 
                  onClick={() => setMobileMenuOpen(false)}
                  sx={{ 
                    color: '#6b7280',
                    '&:hover': { backgroundColor: 'rgba(102, 126, 234, 0.08)' }
                  }}
                >
                  <X size={24} />
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 1 }}>
              {navigationItems.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  startIcon={item.icon}
                  sx={{
                    justifyContent: 'flex-start',
                    p: 2,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: 500,
                    color: isActivePath(item.path) ? '#667eea' : '#4a5568',
                    backgroundColor: isActivePath(item.path) ? 'rgba(102, 126, 234, 0.1)' : 'transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(102, 126, 234, 0.08)',
                      color: '#667eea',
                    }
                  }}
                >
                  {item.name}
                </Button>
              ))}
              {!user && (
                <Box sx={{ pt: 3, mt: 2, borderTop: '1px solid rgba(229, 231, 235, 0.8)', display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Button
                    component={Link}
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    variant="outlined"
                    fullWidth
                    sx={{
                      borderColor: '#d1d5db',
                      color: '#4a5568',
                      textTransform: 'none',
                      fontWeight: 600,
                      py: 1.5,
                      borderRadius: 2,
                      '&:hover': {
                        borderColor: '#667eea',
                        backgroundColor: 'rgba(102, 126, 234, 0.08)',
                        color: '#667eea',
                      }
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    component={Link}
                    to="/register"
                    onClick={() => setMobileMenuOpen(false)}
                    variant="contained"
                    fullWidth
                    sx={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      textTransform: 'none',
                      fontWeight: 600,
                      py: 1.5,
                      borderRadius: 2,
                      boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)',
                        boxShadow: '0 6px 16px rgba(102, 126, 234, 0.4)',
                      }
                    }}
                  >
                    Get Started
                  </Button>
                </Box>
              )}
            </Box>
          </Paper>
        </Box>
      )}

      {/* Spacer for fixed navbar */}
      <Box sx={{ height: { xs: '64px', sm: '72px' } }} />
    </>
  );
};

export default Navbar;
