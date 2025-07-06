import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  CardMedia, 
  Container,
  Chip,
  Paper,
  TextField,
  IconButton,
  Stack
} from '@mui/material';
import { motion } from 'framer-motion';
import { 
  Car, 
  Shield, 
  Users,
  Award,
  Search,
  ArrowRight,
  Zap,
  Heart
} from 'lucide-react';

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Car Categories
  const categories = ['All', 'Luxury', 'Sports', 'Electric', 'Convertible'];

  // Most Searched Cars Data
  const mostSearchedCars = [
    {
      id: 1,
      name: 'Lamborghini Huracán',
      price: '$248,295',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      priceRange: '$248,295 - $287,400',
      category: 'Luxury',
      offers: 'View January Offers'
    },
    {
      id: 2,
      name: 'Ferrari F8 Tributo',
      price: '$280,000',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      priceRange: '$280,000 - $320,000',
      category: 'Sports',
      offers: 'View January Offers'
    },
    {
      id: 3,
      name: 'McLaren 720S',
      price: '$315,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      priceRange: '$315,000 - $365,000',
      category: 'Sports',
      offers: 'View January Offers'
    },
    {
      id: 4,
      name: 'Porsche 911 Turbo S',
      price: '$207,000',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      priceRange: '$207,000 - $230,000',
      category: 'Sports',
      offers: 'View January Offers'
    },
    {
      id: 5,
      name: 'Aston Martin DB11',
      price: '$215,000',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      priceRange: '$215,000 - $241,000',
      category: 'Luxury',
      offers: 'View January Offers'
    },
    {
      id: 6,
      name: 'Bugatti Chiron',
      price: '$3,900,000',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      priceRange: '$3,900,000 - $4,200,000',
      category: 'Luxury',
      offers: 'View January Offers'
    }
  ];

  // Electric Cars Data
  const electricCars = [
    {
      id: 7,
      name: 'Tesla Roadster',
      price: '$200,000',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      priceRange: '$200,000 - $250,000',
      offers: 'View January Offers',
      range: '620 miles'
    },
    {
      id: 8,
      name: 'Lucid Air Sapphire',
      price: '$249,000',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      priceRange: '$249,000 - $269,000',
      offers: 'View January Offers',
      range: '516 miles'
    },
    {
      id: 9,
      name: 'Porsche Taycan Turbo S',
      price: '$185,000',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      priceRange: '$185,000 - $200,000',
      offers: 'View January Offers',
      range: '227 miles'
    }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
    }}>
      {/* Hero Section */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        py: { xs: 4, md: 8 },
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.3
        }} />
        
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, flexDirection: { xs: 'column', lg: 'row' } }}>
            {/* Left Side - Search */}
            <Box sx={{ flex: { xs: 1, lg: '0 0 33.33%' } }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Paper 
                  elevation={16}
                  sx={{ 
                    p: 4, 
                    borderRadius: 4,
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 700,
                      background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      mb: 3
                    }}
                  >
                    Find Your Dream Car
                  </Typography>
                  
                  <Stack spacing={3}>
                    <Box>
                      <Typography variant="body2" sx={{ mb: 1, fontWeight: 600, color: 'text.secondary' }}>
                        Search by Budget or Brand
                      </Typography>
                      <Stack direction="row" spacing={2}>
                        <Button
                          variant="contained"
                          size="small"
                          sx={{
                            background: 'linear-gradient(45deg, #ff6b6b 30%, #ff8e8e 90%)',
                            borderRadius: 3,
                            textTransform: 'none',
                            fontWeight: 600
                          }}
                        >
                          By Budget
                        </Button>
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{
                            borderRadius: 3,
                            textTransform: 'none',
                            color: 'text.secondary'
                          }}
                        >
                          By Brand
                        </Button>
                      </Stack>
                    </Box>
                    
                    <TextField
                      select
                      fullWidth
                      label="Select Budget Range"
                      SelectProps={{ native: true }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 3,
                          '&:hover fieldset': {
                            borderColor: '#667eea',
                          },
                        }
                      }}
                    >
                      <option value="">Select Budget</option>
                      <option value="100k">Under $100,000</option>
                      <option value="300k">$100,000 - $300,000</option>
                      <option value="500k">$300,000 - $500,000</option>
                      <option value="1m">$500,000 - $1,000,000</option>
                      <option value="1m+">Above $1,000,000</option>
                    </TextField>
                    
                    <TextField
                      select
                      fullWidth
                      label="Vehicle Type"
                      SelectProps={{ native: true }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 3,
                        }
                      }}
                    >
                      <option value="">All Vehicle Types</option>
                      <option value="sports">Sports Car</option>
                      <option value="luxury">Luxury Car</option>
                      <option value="electric">Electric Car</option>
                      <option value="convertible">Convertible</option>
                      <option value="hypercar">Hypercar</option>
                    </TextField>
                    
                    <Button
                      variant="contained"
                      fullWidth
                      size="large"
                      startIcon={<Search />}
                      sx={{
                        background: 'linear-gradient(45deg, #ff6b6b 30%, #ff8e8e 90%)',
                        borderRadius: 3,
                        py: 1.5,
                        fontWeight: 700,
                        textTransform: 'none',
                        fontSize: '1.1rem',
                        boxShadow: '0 8px 32px rgba(255, 107, 107, 0.4)'
                      }}
                    >
                      Search Cars
                    </Button>
                    
                    <Button
                      variant="text"
                      endIcon={<ArrowRight size={16} />}
                      sx={{ 
                        color: '#667eea',
                        textTransform: 'none',
                        fontWeight: 600,
                        alignSelf: 'center'
                      }}
                    >
                      Advanced Search
                    </Button>
                  </Stack>
                </Paper>
              </motion.div>
            </Box>
            
            {/* Right Side - Hero Content */}
            <Box sx={{ flex: { xs: 1, lg: '0 0 66.67%' } }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box sx={{ color: 'white', textAlign: { xs: 'center', lg: 'left' } }}>
                  <Typography 
                    variant="h1" 
                    sx={{ 
                      fontSize: { xs: '3rem', md: '4.5rem', lg: '5.5rem' },
                      fontWeight: 800,
                      mb: 2,
                      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                      fontFamily: '"Roboto", sans-serif'
                    }}
                  >
                    Super
                    <Box component="span" sx={{ color: '#ffd700' }}>Cars</Box>
                  </Typography>
                  
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      fontSize: { xs: '1.5rem', md: '2rem' },
                      fontWeight: 300,
                      mb: 4,
                      opacity: 0.9,
                      fontFamily: '"Roboto", sans-serif'
                    }}
                  >
                    Where Luxury Meets Performance
                  </Typography>
                  
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontSize: { xs: '1rem', md: '1.2rem' },
                      fontWeight: 400,
                      mb: 4,
                      opacity: 0.8,
                      maxWidth: 600,
                      lineHeight: 1.6
                    }}
                  >
                    Discover the world's most exclusive collection of supercars. From Ferrari to Bugatti, 
                    McLaren to Lamborghini - experience automotive excellence like never before.
                  </Typography>
                  
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ mt: 4 }}>
                    <Button
                      variant="contained"
                      size="large"
                      component={Link}
                      to="/cars"
                      startIcon={<Car />}
                      sx={{
                        background: 'linear-gradient(45deg, #ffd700 30%, #ffed4e 90%)',
                        color: '#333',
                        borderRadius: 4,
                        px: 4,
                        py: 1.5,
                        fontWeight: 700,
                        textTransform: 'none',
                        fontSize: '1.1rem',
                        boxShadow: '0 8px 32px rgba(255, 215, 0, 0.4)',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 12px 40px rgba(255, 215, 0, 0.6)',
                        }
                      }}
                    >
                      Explore Collection
                    </Button>
                    
                    <Button
                      variant="outlined"
                      size="large"
                      component={Link}
                      to="/register"
                      sx={{
                        borderColor: 'white',
                        color: 'white',
                        borderRadius: 4,
                        px: 4,
                        py: 1.5,
                        fontWeight: 600,
                        textTransform: 'none',
                        fontSize: '1.1rem',
                        borderWidth: 2,
                        '&:hover': {
                          borderWidth: 2,
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          borderColor: '#ffd700',
                          color: '#ffd700',
                        }
                      }}
                    >
                      Get Started
                    </Button>
                  </Stack>
                </Box>
              </motion.div>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Most Searched Cars Section */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography 
            variant="h3" 
            sx={{ 
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 1,
              textAlign: 'center',
              color: '#2d3748'
            }}
          >
            The Most Searched Cars
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'text.secondary',
              textAlign: 'center',
              mb: 4,
              fontWeight: 400
            }}
          >
            Discover what others are looking for
          </Typography>
          
          {/* Category Tabs */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 1, 
                borderRadius: 4,
                backgroundColor: '#f7fafc',
                border: '1px solid #e2e8f0'
              }}
            >
              <Stack direction="row" spacing={1}>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "contained" : "text"}
                    onClick={() => setSelectedCategory(category)}
                    sx={{
                      borderRadius: 3,
                      textTransform: 'none',
                      fontWeight: 600,
                      px: 3,
                      py: 1,
                      ...(selectedCategory === category ? {
                        background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
                        color: 'white',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #5a6fd8 30%, #6a4190 90%)',
                        }
                      } : {
                        color: 'text.secondary',
                        '&:hover': {
                          backgroundColor: 'rgba(102, 126, 234, 0.08)',
                        }
                      })
                    }}
                  >
                    {category}
                  </Button>
                ))}
              </Stack>
            </Paper>
          </Box>
        </motion.div>

        {/* Cars Grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 3 }}>
          {mostSearchedCars.slice(0, 8).map((car, index) => (
            <Box key={car.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '1px solid #e2e8f0',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(102, 126, 234, 0.15)',
                    }
                  }}
                >
                  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={car.image}
                      alt={car.name}
                      sx={{
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        }
                      }}
                    />
                    <IconButton
                      sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(10px)',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 1)',
                          color: '#ff6b6b',
                        }
                      }}
                    >
                      <Heart size={18} />
                    </IconButton>
                  </Box>
                  
                  <CardContent sx={{ p: 3 }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 700,
                        mb: 1,
                        color: '#2d3748',
                        fontSize: '1.1rem'
                      }}
                    >
                      {car.name}
                    </Typography>
                    
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#667eea',
                        fontWeight: 700,
                        mb: 2,
                        fontSize: '1rem'
                      }}
                    >
                      {car.priceRange}
                    </Typography>
                    
                    <Button
                      variant="outlined"
                      fullWidth
                      sx={{
                        borderColor: '#ff6b6b',
                        color: '#ff6b6b',
                        borderRadius: 3,
                        textTransform: 'none',
                        fontWeight: 600,
                        py: 1,
                        '&:hover': {
                          borderColor: '#ff6b6b',
                          backgroundColor: 'rgba(255, 107, 107, 0.08)',
                        }
                      }}
                    >
                      View July Offers
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          ))}
        </Box>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            variant="text"
            component={Link}
            to="/cars"
            endIcon={<ArrowRight />}
            sx={{
              color: '#667eea',
              fontWeight: 600,
              textTransform: 'none',
              fontSize: '1.1rem',
              '&:hover': {
                backgroundColor: 'rgba(102, 126, 234, 0.08)',
              }
            }}
          >
            View All Supercars
          </Button>
        </Box>
      </Container>

      {/* Electric Cars Section */}
      <Box sx={{ backgroundColor: '#f8fafc', py: 8 }}>
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
                <Zap size={32} color="#10b981" />
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    fontWeight: 700,
                    ml: 2,
                    color: '#2d3748'
                  }}
                >
                  Electric Supercars
                </Typography>
              </Box>
              
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'text.secondary',
                  fontWeight: 400
                }}
              >
                The future of high-performance driving
              </Typography>
            </Box>
          </motion.div>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 3 }}>
            {electricCars.map((car, index) => (
              <Box key={car.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      overflow: 'hidden',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      border: '1px solid #e2e8f0',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(16, 185, 129, 0.15)',
                      }
                    }}
                  >
                    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={car.image}
                        alt={car.name}
                        sx={{
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.05)',
                          }
                        }}
                      />
                      <Chip
                        label="Electric"
                        icon={<Zap size={16} />}
                        sx={{
                          position: 'absolute',
                          top: 12,
                          left: 12,
                          backgroundColor: '#10b981',
                          color: 'white',
                          fontWeight: 600,
                          borderRadius: 2
                        }}
                      />
                    </Box>
                    
                    <CardContent sx={{ p: 3 }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 700,
                          mb: 1,
                          color: '#2d3748',
                          fontSize: '1.1rem'
                        }}
                      >
                        {car.name}
                      </Typography>
                      
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: '#667eea',
                          fontWeight: 700,
                          mb: 1,
                          fontSize: '1rem'
                        }}
                      >
                        {car.priceRange}
                      </Typography>
                      
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: '#10b981',
                          fontWeight: 600,
                          mb: 2
                        }}
                      >
                        Range: {car.range}
                      </Typography>
                      
                      <Button
                        variant="outlined"
                        fullWidth
                        sx={{
                          borderColor: '#10b981',
                          color: '#10b981',
                          borderRadius: 3,
                          textTransform: 'none',
                          fontWeight: 600,
                          py: 1,
                          '&:hover': {
                            borderColor: '#10b981',
                            backgroundColor: 'rgba(16, 185, 129, 0.08)',
                          }
                        }}
                      >
                        View July Offers
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Box>
            ))}
          </Box>

          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="text"
              endIcon={<ArrowRight />}
              sx={{
                color: '#10b981',
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1.1rem',
                '&:hover': {
                  backgroundColor: 'rgba(16, 185, 129, 0.08)',
                }
              }}
            >
              View All Electric Cars
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Upcoming Cars Section */}
      <Box sx={{ py: 8, backgroundColor: 'white' }}>
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 700,
                  mb: 2,
                  color: '#2d3748'
                }}
              >
                Upcoming Supercars
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'text.secondary',
                  fontWeight: 400
                }}
              >
                Get ready for the future of automotive excellence
              </Typography>
            </Box>
          </motion.div>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 3 }}>
            {[{
              id: 10,
              name: 'Ferrari Purosangue',
              price: 'Expected $400,000',
              image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
              expectedLaunch: 'Q2 2025'
            },
            {
              id: 11,
              name: 'McLaren Artura Spider',
              price: 'Expected $280,000',
              image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
              expectedLaunch: 'Q3 2025'
            },
            {
              id: 12,
              name: 'Lamborghini Revuelto',
              price: 'Expected $500,000',
              image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
              expectedLaunch: 'Q4 2025'
            },
            {
              id: 13,
              name: 'Aston Martin Valhalla',
              price: 'Expected $800,000',
              image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
              expectedLaunch: 'Q1 2026'
            }].map((car, index) => (
              <Box key={car.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      overflow: 'hidden',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      border: '1px solid #e2e8f0',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(255, 165, 0, 0.15)',
                      }
                    }}
                  >
                    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={car.image}
                        alt={car.name}
                        sx={{
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.05)',
                          }
                        }}
                      />
                      <Chip
                        label="Coming Soon"
                        sx={{
                          position: 'absolute',
                          top: 12,
                          left: 12,
                          backgroundColor: '#ff8c00',
                          color: 'white',
                          fontWeight: 600,
                          borderRadius: 2
                        }}
                      />
                    </Box>
                    
                    <CardContent sx={{ p: 3 }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 700,
                          mb: 1,
                          color: '#2d3748',
                          fontSize: '1.1rem'
                        }}
                      >
                        {car.name}
                      </Typography>
                      
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: '#ff8c00',
                          fontWeight: 700,
                          mb: 1,
                          fontSize: '1rem'
                        }}
                      >
                        {car.price}
                      </Typography>
                      
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: '#6b7280',
                          fontWeight: 500,
                          mb: 2
                        }}
                      >
                        Expected: {car.expectedLaunch}
                      </Typography>
                      
                      <Button
                        variant="outlined"
                        fullWidth
                        sx={{
                          borderColor: '#ff8c00',
                          color: '#ff8c00',
                          borderRadius: 3,
                          textTransform: 'none',
                          fontWeight: 600,
                          py: 1,
                          '&:hover': {
                            borderColor: '#ff8c00',
                            backgroundColor: 'rgba(255, 140, 0, 0.08)',
                          }
                        }}
                      >
                        Notify Me
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Latest Cars Section */}
      <Box sx={{ backgroundColor: '#f8fafc', py: 8 }}>
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 700,
                  mb: 2,
                  color: '#2d3748'
                }}
              >
                Latest Arrivals
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'text.secondary',
                  fontWeight: 400
                }}
              >
                Fresh additions to our premium collection
              </Typography>
            </Box>
          </motion.div>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 3 }}>
            {[{
              id: 14,
              name: 'Koenigsegg Gemera',
              price: '$1,700,000',
              image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
              isNew: true,
              mileage: '0 miles'
            },
            {
              id: 15,
              name: 'Rimac Nevera',
              price: '$2,400,000',
              image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
              isNew: true,
              mileage: '0 miles'
            },
            {
              id: 16,
              name: 'Gordon Murray T.50',
              price: '$3,100,000',
              image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
              isNew: true,
              mileage: '0 miles'
            },
            {
              id: 17,
              name: 'Pagani Huayra R',
              price: '$3,500,000',
              image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
              isNew: true,
              mileage: '0 miles'
            }].map((car, index) => (
              <Box key={car.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      overflow: 'hidden',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      border: '1px solid #e2e8f0',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(220, 38, 38, 0.15)',
                      }
                    }}
                  >
                    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={car.image}
                        alt={car.name}
                        sx={{
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.05)',
                          }
                        }}
                      />
                      <Chip
                        label="New"
                        sx={{
                          position: 'absolute',
                          top: 12,
                          left: 12,
                          backgroundColor: '#dc2626',
                          color: 'white',
                          fontWeight: 600,
                          borderRadius: 2
                        }}
                      />
                    </Box>
                    
                    <CardContent sx={{ p: 3 }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 700,
                          mb: 1,
                          color: '#2d3748',
                          fontSize: '1.1rem'
                        }}
                      >
                        {car.name}
                      </Typography>
                      
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: '#dc2626',
                          fontWeight: 700,
                          mb: 1,
                          fontSize: '1rem'
                        }}
                      >
                        {car.price}
                      </Typography>
                      
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: '#6b7280',
                          fontWeight: 500,
                          mb: 2
                        }}
                      >
                        {car.mileage}
                      </Typography>
                      
                      <Button
                        variant="outlined"
                        fullWidth
                        sx={{
                          borderColor: '#dc2626',
                          color: '#dc2626',
                          borderRadius: 3,
                          textTransform: 'none',
                          fontWeight: 600,
                          py: 1,
                          '&:hover': {
                            borderColor: '#dc2626',
                            backgroundColor: 'rgba(220, 38, 38, 0.08)',
                          }
                        }}
                      >
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Car Brands Carousel */}
      <Box sx={{ py: 8, backgroundColor: 'white' }}>
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 700,
                  mb: 2,
                  color: '#2d3748'
                }}
              >
                Browse by Brand
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'text.secondary',
                  fontWeight: 400
                }}
              >
                Discover supercars from the world's most prestigious brands
              </Typography>
            </Box>
          </motion.div>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(6, 1fr)' }, gap: 3 }}>
            {[{
              name: 'Ferrari',
              count: '45+ Cars',
              logo: '🏎️'
            },
            {
              name: 'Lamborghini',
              count: '38+ Cars',
              logo: '🐂'
            },
            {
              name: 'McLaren',
              count: '29+ Cars',
              logo: '🏁'
            },
            {
              name: 'Porsche',
              count: '67+ Cars',
              logo: '🔥'
            },
            {
              name: 'Bugatti',
              count: '12+ Cars',
              logo: '💎'
            },
            {
              name: 'Aston Martin',
              count: '23+ Cars',
              logo: '🦅'
            }].map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    borderRadius: 4,
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '1px solid #e2e8f0',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 24px rgba(102, 126, 234, 0.15)',
                      borderColor: '#667eea',
                    }
                  }}
                >
                  <Typography 
                    sx={{ 
                      fontSize: '2.5rem',
                      mb: 2,
                      display: 'block'
                    }}
                  >
                    {brand.logo}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 700,
                      mb: 1,
                      color: '#2d3748',
                      fontSize: '1rem'
                    }}
                  >
                    {brand.name}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#6b7280',
                      fontWeight: 500
                    }}
                  >
                    {brand.count}
                  </Typography>
                </Card>
              </motion.div>
            ))}
          </Box>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="outlined"
              component={Link}
              to="/brands"
              sx={{
                borderColor: '#667eea',
                color: '#667eea',
                borderRadius: 3,
                textTransform: 'none',
                fontWeight: 600,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  borderColor: '#667eea',
                  backgroundColor: 'rgba(102, 126, 234, 0.08)',
                }
              }}
            >
              View All Brands
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        py: 8,
        color: 'white'
      }}>
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography 
              variant="h3" 
              sx={{ 
                textAlign: 'center',
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              India's #1 Supercar Marketplace
            </Typography>
            
            <Typography 
              variant="h6" 
              sx={{ 
                textAlign: 'center',
                opacity: 0.9,
                mb: 6,
                fontWeight: 400
              }}
            >
              Trusted by thousands of supercar enthusiasts worldwide
            </Typography>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 4 }}>
              {[
                { icon: Car, number: '500+', label: 'Premium Cars' },
                { icon: Award, number: '50+', label: 'Luxury Brands' },
                { icon: Users, number: '10K+', label: 'Happy Customers' },
                { icon: Shield, number: '24/7', label: 'Expert Support' }
              ].map((stat, index) => (
                <Box key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Box sx={{ textAlign: 'center' }}>
                      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                        <stat.icon size={32} color="#ffd700" />
                      </Box>
                      <Typography 
                        variant="h3" 
                        sx={{ 
                          fontWeight: 800,
                          mb: 1,
                          fontSize: { xs: '2rem', md: '3rem' }
                        }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          opacity: 0.9,
                          fontWeight: 500
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Box>
                  </motion.div>
                </Box>
              ))}
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
