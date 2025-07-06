import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Container,
  Alert,
  InputAdornment,
  IconButton,
  Divider,
  Stack
} from '@mui/material';
import { motion } from 'framer-motion';
import { Car, Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(formData.email, formData.password);
      navigate('/');
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <Container maxWidth="sm" className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo and Title */}
          <Box className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center mb-4"
            >
              <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                <Car className="w-12 h-12 text-white" />
              </div>
            </motion.div>
            <Typography variant="h3" className="text-white font-bold mb-2">
              Welcome Back
            </Typography>
            <Typography variant="h6" className="text-gray-300">
              Sign in to your SuperCars account
            </Typography>
          </Box>

          {/* Login Card */}
          <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
            <CardContent className="p-8">
              {error && (
                <Alert severity="error" className="mb-6">
                  {error}
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  label="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Mail className="w-5 h-5 text-gray-400" />
                      </InputAdornment>
                    ),
                    className: "bg-white/5 text-white"
                  }}
                  InputLabelProps={{
                    className: "text-gray-300"
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#3b82f6',
                      },
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#3b82f6',
                    },
                  }}
                />

                {/* Password Field */}
                <TextField
                  fullWidth
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  label="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock className="w-5 h-5 text-gray-400" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                          className="text-gray-400 hover:text-white"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </IconButton>
                      </InputAdornment>
                    ),
                    className: "bg-white/5 text-white"
                  }}
                  InputLabelProps={{
                    className: "text-gray-300"
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#3b82f6',
                      },
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#3b82f6',
                    },
                  }}
                />

                {/* Login Button */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={loading}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-4 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
                  endIcon={<ArrowRight className="w-5 h-5" />}
                >
                  {loading ? 'Signing In...' : 'Sign In'}
                </Button>

                {/* Divider */}
                <Divider className="my-6">
                  <Typography variant="body2" className="text-gray-400 px-4">
                    Don't have an account?
                  </Typography>
                </Divider>

                {/* Register Link */}
                <Button
                  component={Link}
                  to="/register"
                  fullWidth
                  variant="outlined"
                  size="large"
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 py-4 text-lg font-semibold rounded-xl transition-all duration-200"
                >
                  Create New Account
                </Button>
              </form>

              {/* Demo Credentials */}
              <Box className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
                <Typography variant="body2" className="text-gray-300 text-center mb-2">
                  Demo Credentials
                </Typography>
                <Stack spacing={1} className="text-sm text-gray-400">
                  <div>Email: demo@supercars.com</div>
                  <div>Password: demo123</div>
                </Stack>
              </Box>
            </CardContent>
          </Card>

          {/* Footer Links */}
          <Box className="mt-6 text-center">
            <Typography variant="body2" className="text-gray-400">
              <Link to="/forgot-password" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                Forgot your password?
              </Link>
              {' • '}
              <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                Back to Home
              </Link>
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </div>
  );
};

export default Login;
