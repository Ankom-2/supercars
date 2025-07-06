import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Chip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Rating,
  Stack,
  LinearProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  X,
  Download,
  Share2,
  Play,
  ChevronDown,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Image as ImageIcon,
  Video,
  FileText
} from 'lucide-react';

interface Car {
  id: number;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  image: string;
  images: string[];
  videos: string[];
  specifications: {
    engine: string;
    horsepower: number;
    torque: string;
    acceleration: string;
    topSpeed: string;
    fuelType: string;
    transmission: string;
    drivetrain: string;
    mileage: string;
    seating: number;
    dimensions: {
      length: string;
      width: string;
      height: string;
      wheelbase: string;
    };
    weight: string;
    fuelTank: string;
  };
  features: {
    exterior: string[];
    interior: string[];
    safety: string[];
    technology: string[];
  };
  ratings: {
    overall: number;
    performance: number;
    comfort: number;
    fuelEconomy: number;
    reliability: number;
    value: number;
  };
  pros: string[];
  cons: string[];
  expertReview: string;
  userReviews: {
    count: number;
    average: number;
  };
}

// Sample car data with comprehensive information
const sampleCars: Car[] = [
  {
    id: 1,
    name: 'McLaren 720S',
    brand: 'McLaren',
    model: '720S',
    year: 2024,
    price: 299000,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    videos: [
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    ],
    specifications: {
      engine: '4.0L Twin-Turbo V8',
      horsepower: 710,
      torque: '568 lb-ft',
      acceleration: '2.9 seconds (0-60 mph)',
      topSpeed: '212 mph',
      fuelType: 'Gasoline',
      transmission: '7-Speed Dual-Clutch',
      drivetrain: 'RWD',
      mileage: '15/22 mpg',
      seating: 2,
      dimensions: {
        length: '185.1 in',
        width: '76.0 in',
        height: '47.1 in',
        wheelbase: '105.1 in'
      },
      weight: '3,186 lbs',
      fuelTank: '19.4 gal'
    },
    features: {
      exterior: ['Carbon Fiber Body', 'LED Headlights', 'Active Aerodynamics', 'Dihedral Doors'],
      interior: ['Carbon Fiber Dashboard', 'Alcantara Upholstery', '8-inch Touchscreen', 'Bowers & Wilkins Audio'],
      safety: ['Electronic Stability Control', 'Traction Control', 'ABS', 'Airbags'],
      technology: ['Variable Drift Control', 'Active Dynamics Panel', 'Track Telemetry', 'McLaren Connect']
    },
    ratings: {
      overall: 4.7,
      performance: 4.9,
      comfort: 4.2,
      fuelEconomy: 3.1,
      reliability: 4.0,
      value: 4.3
    },
    pros: ['Incredible performance', 'Stunning design', 'Advanced aerodynamics', 'Track-focused'],
    cons: ['High maintenance costs', 'Limited storage', 'Firm ride quality'],
    expertReview: 'The McLaren 720S represents the pinnacle of supercar engineering, delivering breathtaking performance with sophisticated aerodynamics and cutting-edge technology.',
    userReviews: {
      count: 127,
      average: 4.6
    }
  },
  {
    id: 2,
    name: 'Ferrari F8 Tributo',
    brand: 'Ferrari',
    model: 'F8 Tributo',
    year: 2024,
    price: 280000,
    image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    videos: [
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    ],
    specifications: {
      engine: '3.9L Twin-Turbo V8',
      horsepower: 710,
      torque: '568 lb-ft',
      acceleration: '2.9 seconds (0-60 mph)',
      topSpeed: '211 mph',
      fuelType: 'Gasoline',
      transmission: '7-Speed Dual-Clutch',
      drivetrain: 'RWD',
      mileage: '15/19 mpg',
      seating: 2,
      dimensions: {
        length: '185.9 in',
        width: '76.9 in',
        height: '47.8 in',
        wheelbase: '104.3 in'
      },
      weight: '3,164 lbs',
      fuelTank: '21.1 gal'
    },
    features: {
      exterior: ['Ferrari Styling', 'LED Matrix Headlights', 'Active Rear Spoiler', 'Carbon Fiber Elements'],
      interior: ['Premium Leather', 'Carbon Fiber Trim', '8.4-inch Touchscreen', 'JBL Premium Audio'],
      safety: ['Electronic Stability Control', 'F1-Trac System', 'ABS', 'Multiple Airbags'],
      technology: ['Ferrari Dynamic Enhancer', 'Side Slip Control', 'Ferrari Telemetry', 'Apple CarPlay']
    },
    ratings: {
      overall: 4.8,
      performance: 4.9,
      comfort: 4.4,
      fuelEconomy: 3.0,
      reliability: 4.2,
      value: 4.5
    },
    pros: ['Legendary Ferrari heritage', 'Exceptional handling', 'Beautiful design', 'Amazing sound'],
    cons: ['Expensive maintenance', 'Limited practicality', 'Firm suspension'],
    expertReview: 'The Ferrari F8 Tributo combines the best of Ferrari\'s engineering prowess with modern technology, delivering an exhilarating driving experience.',
    userReviews: {
      count: 89,
      average: 4.7
    }
  }
];

const Compare: React.FC = () => {
  const [selectedCars, setSelectedCars] = useState<Car[]>([]);
  const [availableCars] = useState<Car[]>(sampleCars);
  const [isSelectionOpen, setIsSelectionOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState<{ [key: number]: number }>({});

  const addCarToComparison = (car: Car) => {
    if (selectedCars.length < 3 && !selectedCars.find(c => c.id === car.id)) {
      setSelectedCars([...selectedCars, car]);
      setIsSelectionOpen(false);
    }
  };

  const removeCarFromComparison = (carId: number) => {
    setSelectedCars(selectedCars.filter(car => car.id !== carId));
  };

  const comparisonSections = [
    { label: 'Overview', value: 0 },
    { label: 'Specifications', value: 1 },
    { label: 'Features', value: 2 },
    { label: 'Gallery', value: 3 },
    { label: 'Ratings & Reviews', value: 4 },
    { label: 'Pros & Cons', value: 5 }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      pt: { xs: 10, md: 12 }
    }}>
      {/* Header Section */}
      <Container maxWidth="xl" sx={{ pb: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 800,
                mb: 2,
                background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Compare Supercars
            </Typography>
            
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'text.secondary',
                fontWeight: 400,
                maxWidth: 600,
                mx: 'auto',
                mb: 4
              }}
            >
              Get detailed comparisons with specs, features, images, videos, and expert reviews
            </Typography>

            <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
              <Chip icon={<BarChart3 size={16} />} label="Detailed Analytics" color="primary" />
              <Chip icon={<ImageIcon size={16} />} label="High-Quality Images" color="primary" />
              <Chip icon={<Video size={16} />} label="Video Reviews" color="primary" />
              <Chip icon={<FileText size={16} />} label="Expert Analysis" color="primary" />
            </Stack>
          </Box>
        </motion.div>
      </Container>

      <Container maxWidth="xl">
        {/* Car Selection Area */}
        <Box sx={{ mb: 4 }}>
          <Grid container spacing={3} alignItems="stretch">
            {[0, 1, 2].map((index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {selectedCars[index] ? (
                    <Card
                      sx={{
                        height: '100%',
                        borderRadius: 4,
                        border: '2px solid #667eea',
                        position: 'relative',
                        overflow: 'hidden',
                        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)'
                      }}
                    >
                      <IconButton
                        onClick={() => removeCarFromComparison(selectedCars[index].id)}
                        sx={{
                          position: 'absolute',
                          top: 8,
                          right: 8,
                          zIndex: 2,
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 107, 107, 0.9)',
                            color: 'white'
                          }
                        }}
                      >
                        <X size={20} />
                      </IconButton>

                      <CardMedia
                        component="img"
                        height="200"
                        image={selectedCars[index].image}
                        alt={selectedCars[index].name}
                      />

                      <CardContent sx={{ p: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                          {selectedCars[index].name}
                        </Typography>
                        
                        <Typography 
                          variant="h5" 
                          sx={{ 
                            color: '#667eea',
                            fontWeight: 700,
                            mb: 2
                          }}
                        >
                          ${selectedCars[index].price.toLocaleString()}
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                          <Chip 
                            size="small" 
                            label={`${selectedCars[index].specifications.horsepower} HP`}
                            color="primary"
                          />
                          <Chip 
                            size="small" 
                            label={selectedCars[index].specifications.acceleration}
                            color="secondary"
                          />
                        </Box>
                      </CardContent>
                    </Card>
                  ) : (
                    <Card
                      onClick={() => setIsSelectionOpen(true)}
                      sx={{
                        height: '350px',
                        borderRadius: 4,
                        border: '2px dashed #667eea',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: '#764ba2',
                          backgroundColor: 'rgba(102, 126, 234, 0.05)'
                        }
                      }}
                    >
                      <Box sx={{ textAlign: 'center' }}>
                        <Plus size={48} color="#667eea" />
                        <Typography variant="h6" sx={{ mt: 2, color: '#667eea', fontWeight: 600 }}>
                          Add Car to Compare
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                          Select up to 3 cars for comparison
                        </Typography>
                      </Box>
                    </Card>
                  )}
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Comparison Content */}
        <AnimatePresence>
          {selectedCars.length >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <Card sx={{ borderRadius: 4, overflow: 'hidden', mb: 4 }}>
                <Box sx={{ borderBottom: '1px solid #e0e0e0' }}>
                  <Tabs 
                    value={activeTab} 
                    onChange={(_, newValue) => setActiveTab(newValue)}
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{ px: 2 }}
                  >
                    {comparisonSections.map((section) => (
                      <Tab 
                        key={section.value}
                        label={section.label} 
                        sx={{ 
                          fontWeight: 600,
                          textTransform: 'none',
                          fontSize: '1rem'
                        }}
                      />
                    ))}
                  </Tabs>
                </Box>

                <CardContent sx={{ p: 4 }}>
                  {/* Overview Tab */}
                  {activeTab === 0 && (
                    <Grid container spacing={3}>
                      {selectedCars.map((car) => (
                        <Grid item xs={12} md={12/selectedCars.length} key={car.id}>
                          <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                              {car.name}
                            </Typography>
                            
                            <Box sx={{ mb: 3 }}>
                              <Typography variant="h3" sx={{ color: '#667eea', fontWeight: 800 }}>
                                ${car.price.toLocaleString()}
                              </Typography>
                            </Box>

                            <Stack spacing={2}>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="body1" sx={{ fontWeight: 600 }}>Engine:</Typography>
                                <Typography variant="body1">{car.specifications.engine}</Typography>
                              </Box>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="body1" sx={{ fontWeight: 600 }}>Horsepower:</Typography>
                                <Typography variant="body1">{car.specifications.horsepower} HP</Typography>
                              </Box>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="body1" sx={{ fontWeight: 600 }}>0-60 mph:</Typography>
                                <Typography variant="body1">{car.specifications.acceleration}</Typography>
                              </Box>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="body1" sx={{ fontWeight: 600 }}>Top Speed:</Typography>
                                <Typography variant="body1">{car.specifications.topSpeed}</Typography>
                              </Box>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="body1" sx={{ fontWeight: 600 }}>Overall Rating:</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                  <Rating value={car.ratings.overall} precision={0.1} readOnly size="small" />
                                  <Typography variant="body2">({car.ratings.overall})</Typography>
                                </Box>
                              </Box>
                            </Stack>

                            <Box sx={{ mt: 3 }}>
                              <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                  background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
                                  borderRadius: 3,
                                  textTransform: 'none',
                                  fontWeight: 600,
                                  py: 1.5
                                }}
                              >
                                View Details
                              </Button>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  )}

                  {/* Specifications Tab */}
                  {activeTab === 1 && (
                    <TableContainer component={Paper} elevation={0}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell sx={{ fontWeight: 700, fontSize: '1rem' }}>Specification</TableCell>
                            {selectedCars.map((car) => (
                              <TableCell key={car.id} align="center" sx={{ fontWeight: 700, fontSize: '1rem' }}>
                                {car.name}
                              </TableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {Object.keys(selectedCars[0]?.specifications || {}).map((spec) => (
                            <TableRow key={spec}>
                              <TableCell sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
                                {spec.replace(/([A-Z])/g, ' $1').trim()}
                              </TableCell>
                              {selectedCars.map((car) => (
                                <TableCell key={car.id} align="center">
                                  {typeof car.specifications[spec as keyof typeof car.specifications] === 'object' 
                                    ? JSON.stringify(car.specifications[spec as keyof typeof car.specifications])
                                    : String(car.specifications[spec as keyof typeof car.specifications])
                                  }
                                </TableCell>
                              ))}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  )}

                  {/* Features Tab */}
                  {activeTab === 2 && (
                    <Grid container spacing={3}>
                      {['exterior', 'interior', 'safety', 'technology'].map((category) => (
                        <Grid item xs={12} key={category}>
                          <Accordion defaultExpanded>
                            <AccordionSummary expandIcon={<ChevronDown />}>
                              <Typography variant="h6" sx={{ fontWeight: 700, textTransform: 'capitalize' }}>
                                {category} Features
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Grid container spacing={2}>
                                {selectedCars.map((car) => (
                                  <Grid item xs={12} md={12/selectedCars.length} key={car.id}>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                                      {car.name}
                                    </Typography>
                                    <List dense>
                                      {car.features[category as keyof typeof car.features].map((feature, index) => (
                                        <ListItem key={index} sx={{ py: 0.5 }}>
                                          <ListItemAvatar>
                                            <CheckCircle size={16} color="#10b981" />
                                          </ListItemAvatar>
                                          <ListItemText primary={feature} />
                                        </ListItem>
                                      ))}
                                    </List>
                                  </Grid>
                                ))}
                              </Grid>
                            </AccordionDetails>
                          </Accordion>
                        </Grid>
                      ))}
                    </Grid>
                  )}

                  {/* Gallery Tab */}
                  {activeTab === 3 && (
                    <Grid container spacing={3}>
                      {selectedCars.map((car) => (
                        <Grid item xs={12} md={12/selectedCars.length} key={car.id}>
                          <Box>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, textAlign: 'center' }}>
                              {car.name} Gallery
                            </Typography>
                            
                            {/* Main Image */}
                            <Box sx={{ mb: 2 }}>
                              <img
                                src={car.images[selectedImageIndex[car.id] || 0]}
                                alt={car.name}
                                style={{
                                  width: '100%',
                                  height: '250px',
                                  objectFit: 'cover',
                                  borderRadius: '12px'
                                }}
                              />
                            </Box>

                            {/* Thumbnail Images */}
                            <Box sx={{ display: 'flex', gap: 1, mb: 3, justifyContent: 'center' }}>
                              {car.images.map((image, index) => (
                                <Box
                                  key={index}
                                  onClick={() => setSelectedImageIndex({
                                    ...selectedImageIndex,
                                    [car.id]: index
                                  })}
                                  sx={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    border: selectedImageIndex[car.id] === index ? '2px solid #667eea' : '2px solid transparent',
                                    transition: 'all 0.3s ease'
                                  }}
                                >
                                  <img
                                    src={image}
                                    alt={`${car.name} ${index + 1}`}
                                    style={{
                                      width: '100%',
                                      height: '100%',
                                      objectFit: 'cover'
                                    }}
                                  />
                                </Box>
                              ))}
                            </Box>

                            {/* Videos Section */}
                            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                              Video Reviews
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                              {car.videos.map((video, index) => (
                                <Chip
                                  key={index}
                                  icon={<Play size={16} />}
                                  label={`Video ${index + 1}`}
                                  onClick={() => window.open(video, '_blank')}
                                  sx={{ cursor: 'pointer' }}
                                />
                              ))}
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  )}

                  {/* Ratings & Reviews Tab */}
                  {activeTab === 4 && (
                    <Grid container spacing={4}>
                      {selectedCars.map((car) => (
                        <Grid item xs={12} md={12/selectedCars.length} key={car.id}>
                          <Box>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, textAlign: 'center' }}>
                              {car.name} Ratings
                            </Typography>
                            
                            <Box sx={{ textAlign: 'center', mb: 3 }}>
                              <Typography variant="h3" sx={{ fontWeight: 800, color: '#667eea' }}>
                                {car.ratings.overall}
                              </Typography>
                              <Rating value={car.ratings.overall} precision={0.1} readOnly size="large" />
                              <Typography variant="body2" sx={{ mt: 1 }}>
                                Based on {car.userReviews.count} reviews
                              </Typography>
                            </Box>

                            <Stack spacing={2}>
                              {Object.entries(car.ratings).filter(([key]) => key !== 'overall').map(([category, rating]) => (
                                <Box key={category}>
                                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
                                      {category}
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                      {rating}/5
                                    </Typography>
                                  </Box>
                                  <LinearProgress
                                    variant="determinate"
                                    value={(rating / 5) * 100}
                                    sx={{
                                      height: 8,
                                      borderRadius: 4,
                                      backgroundColor: 'rgba(102, 126, 234, 0.1)',
                                      '& .MuiLinearProgress-bar': {
                                        backgroundColor: '#667eea',
                                        borderRadius: 4
                                      }
                                    }}
                                  />
                                </Box>
                              ))}
                            </Stack>

                            <Box sx={{ mt: 3, p: 3, backgroundColor: '#f8fafc', borderRadius: 3 }}>
                              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>
                                Expert Review
                              </Typography>
                              <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                                {car.expertReview}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  )}

                  {/* Pros & Cons Tab */}
                  {activeTab === 5 && (
                    <Grid container spacing={3}>
                      {selectedCars.map((car) => (
                        <Grid item xs={12} md={12/selectedCars.length} key={car.id}>
                          <Box>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, textAlign: 'center' }}>
                              {car.name}
                            </Typography>
                            
                            <Grid container spacing={2}>
                              <Grid item xs={12} sm={6}>
                                <Box sx={{ p: 3, backgroundColor: '#f0fdf4', borderRadius: 3, height: '100%' }}>
                                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <CheckCircle size={20} color="#10b981" />
                                    <Typography variant="h6" sx={{ fontWeight: 700, ml: 1, color: '#10b981' }}>
                                      Pros
                                    </Typography>
                                  </Box>
                                  <List dense>
                                    {car.pros.map((pro, index) => (
                                      <ListItem key={index} sx={{ py: 0.5, pl: 0 }}>
                                        <ListItemText primary={pro} />
                                      </ListItem>
                                    ))}
                                  </List>
                                </Box>
                              </Grid>
                              
                              <Grid item xs={12} sm={6}>
                                <Box sx={{ p: 3, backgroundColor: '#fef2f2', borderRadius: 3, height: '100%' }}>
                                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <AlertCircle size={20} color="#ef4444" />
                                    <Typography variant="h6" sx={{ fontWeight: 700, ml: 1, color: '#ef4444' }}>
                                      Cons
                                    </Typography>
                                  </Box>
                                  <List dense>
                                    {car.cons.map((con, index) => (
                                      <ListItem key={index} sx={{ py: 0.5, pl: 0 }}>
                                        <ListItemText primary={con} />
                                      </ListItem>
                                    ))}
                                  </List>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  )}
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                  <Button
                    variant="contained"
                    startIcon={<Download />}
                    sx={{
                      background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
                      borderRadius: 3,
                      textTransform: 'none',
                      fontWeight: 600,
                      px: 4,
                      py: 1.5
                    }}
                  >
                    Download Comparison
                  </Button>
                  
                  <Button
                    variant="outlined"
                    startIcon={<Share2 />}
                    sx={{
                      borderColor: '#667eea',
                      color: '#667eea',
                      borderRadius: 3,
                      textTransform: 'none',
                      fontWeight: 600,
                      px: 4,
                      py: 1.5,
                      '&:hover': {
                        borderColor: '#764ba2',
                        backgroundColor: 'rgba(102, 126, 234, 0.08)'
                      }
                    }}
                  >
                    Share Comparison
                  </Button>
                </Stack>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>

      {/* Car Selection Dialog */}
      <Dialog 
        open={isSelectionOpen} 
        onClose={() => setIsSelectionOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ fontWeight: 700, fontSize: '1.5rem' }}>
          Select Cars to Compare
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            {availableCars.filter(car => !selectedCars.find(c => c.id === car.id)).map((car) => (
              <Grid item xs={12} sm={6} md={4} key={car.id}>
                <Card
                  onClick={() => addCarToComparison(car)}
                  sx={{
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 25px rgba(102, 126, 234, 0.15)'
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="150"
                    image={car.image}
                    alt={car.name}
                  />
                  <CardContent sx={{ p: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {car.name}
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#667eea', fontWeight: 700 }}>
                      ${car.price.toLocaleString()}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Compare;
