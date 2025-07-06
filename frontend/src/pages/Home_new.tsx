import React, { useState, useEffect } from 'react';
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
  Stack,
  Avatar,
  Rating,
  Grid,
  IconButton,
  Paper,
  Divider
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Car, 
  Star, 
  TrendingUp, 
  Shield, 
  Award, 
  ChevronLeft, 
  ChevronRight,
  Eye,
  Heart,
  Users,
  Calendar,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

const Home: React.FC = () => {
  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Latest Cars Data
  const latestCars = [
    {
      id: 1,
      name: 'Bugatti Chiron Super Sport',
      price: '$3,900,000',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2274&q=80',
      year: 2024,
      mileage: '0 mi',
      type: 'New',
      topSpeed: '304 mph'
    },
    {
      id: 2,
      name: 'McLaren P1 GTR',
      price: '$2,400,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      year: 2024,
      mileage: '0 mi',
      type: 'New',
      topSpeed: '217 mph'
    },
    {
      id: 3,
      name: 'Ferrari LaFerrari',
      price: '$1,800,000',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      year: 2024,
      mileage: '0 mi',
      type: 'New',
      topSpeed: '217 mph'
    },
    {
      id: 4,
      name: 'Koenigsegg Regera',
      price: '$2,200,000',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      year: 2024,
      mileage: '0 mi',
      type: 'New',
      topSpeed: '251 mph'
    }
  ];

  // Customer Testimonials
  const testimonials = [
    {
      id: 1,
      name: 'Michael Rodriguez',
      role: 'Business Owner',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      comment: 'Outstanding service! Found my dream McLaren 720S within days. The team was professional and the buying process was seamless.',
      purchasedCar: 'McLaren 720S'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Tech Executive',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      comment: 'Incredible selection of supercars. The financing options were flexible and the delivery was white-glove service.',
      purchasedCar: 'Lamborghini Huracán'
    },
    {
      id: 3,
      name: 'David Thompson',
      role: 'Investment Banker',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      comment: 'Best supercar marketplace I\'ve ever used. Transparent pricing, detailed inspections, and amazing customer support.',
      purchasedCar: 'Ferrari F8 Tributo'
    },
    {
      id: 4,
      name: 'Emma Williams',
      role: 'Real Estate Developer',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      comment: 'They helped me find a rare Bugatti Veyron. The authentication process gave me complete confidence in my purchase.',
      purchasedCar: 'Bugatti Veyron'
    }
  ];

  // Recently Viewed Cars
  const recentlyViewedCars = [
    {
      id: 5,
      name: 'Aston Martin DB11',
      price: '$215,000',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      year: 2023,
      mileage: '2,500 mi',
      type: 'Used'
    },
    {
      id: 6,
      name: 'Porsche 911 GT3',
      price: '$185,000',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      year: 2023,
      mileage: '1,800 mi',
      type: 'Used'
    },
    {
      id: 7,
      name: 'Mercedes-AMG GT',
      price: '$165,000',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      year: 2023,
      mileage: '3,200 mi',
      type: 'Used'
    },
    {
      id: 8,
      name: 'BMW M8 Competition',
      price: '$145,000',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      year: 2023,
      mileage: '4,100 mi',
      type: 'Used'
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const carInterval = setInterval(() => {
      setCurrentCarIndex((prev) => (prev + 1) % latestCars.length);
    }, 5000);

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => {
      clearInterval(carInterval);
      clearInterval(testimonialInterval);
    };
  }, [latestCars.length, testimonials.length]);

  const nextCar = () => {
    setCurrentCarIndex((prev) => (prev + 1) % latestCars.length);
  };

  const prevCar = () => {
    setCurrentCarIndex((prev) => (prev - 1 + latestCars.length) % latestCars.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <Box className="relative h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Background Video/Image Effect */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2274&q=80)',
            filter: 'blur(1px)'
          }}
        ></div>
        
        <Container maxWidth="lg" className="relative z-20 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center w-full"
          >
            <Typography 
              variant="h1" 
              className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight"
            >
              SUPERCARS
            </Typography>
            <Typography 
              variant="h2" 
              className="text-2xl md:text-4xl text-orange-400 mb-8 font-light"
            >
              Where Dreams Meet Reality
            </Typography>
            <Typography 
              variant="h6" 
              className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Discover the world's most exclusive supercars. From Ferrari to Bugatti, 
              McLaren to Lamborghini - your ultimate driving experience awaits.
            </Typography>
            
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} justifyContent="center">
              <Button
                component={Link}
                to="/cars"
                variant="contained"
                size="large"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 px-12 py-4 text-xl font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Explore Collection
              </Button>
              <Button
                component={Link}
                to="/register"
                variant="outlined"
                size="large"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-12 py-4 text-xl font-semibold rounded-full transform hover:scale-105 transition-all duration-300"
              >
                Get Started
              </Button>
            </Stack>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-20"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <Typography variant="h3" className="text-orange-400 font-bold">500+</Typography>
                  <Typography className="text-gray-300">Premium Cars</Typography>
                </div>
                <div className="text-center">
                  <Typography variant="h3" className="text-orange-400 font-bold">50+</Typography>
                  <Typography className="text-gray-300">Brands</Typography>
                </div>
                <div className="text-center">
                  <Typography variant="h3" className="text-orange-400 font-bold">10K+</Typography>
                  <Typography className="text-gray-300">Happy Customers</Typography>
                </div>
                <div className="text-center">
                  <Typography variant="h3" className="text-orange-400 font-bold">24/7</Typography>
                  <Typography className="text-gray-300">Support</Typography>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </Box>

      {/* Latest Cars Carousel */}
      <Box className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Typography variant="h2" className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Latest Arrivals
            </Typography>
            <Typography variant="h6" className="text-gray-600 text-xl">
              Discover our newest collection of extraordinary supercars
            </Typography>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCarIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <Card className="overflow-hidden bg-white shadow-2xl rounded-3xl">
                  <div className="relative h-96 md:h-[500px]">
                    <CardMedia
                      component="img"
                      height="500"
                      image={latestCars[currentCarIndex].image}
                      alt={latestCars[currentCarIndex].name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <Chip 
                        label={latestCars[currentCarIndex].type}
                        className="bg-orange-500 text-white mb-4"
                      />
                      <Typography variant="h3" className="text-white font-bold mb-2">
                        {latestCars[currentCarIndex].name}
                      </Typography>
                      <Typography variant="h4" className="text-orange-400 font-bold mb-4">
                        {latestCars[currentCarIndex].price}
                      </Typography>
                      <div className="flex gap-6 text-gray-200">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5" />
                          <span>{latestCars[currentCarIndex].year}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-5 h-5" />
                          <span>{latestCars[currentCarIndex].topSpeed}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <IconButton
              onClick={prevCar}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg z-10"
              size="large"
            >
              <ChevronLeft className="w-8 h-8" />
            </IconButton>
            <IconButton
              onClick={nextCar}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg z-10"
              size="large"
            >
              <ChevronRight className="w-8 h-8" />
            </IconButton>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {latestCars.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCarIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentCarIndex ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </Container>
      </Box>

      {/* Customer Testimonials */}
      <Box className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Typography variant="h2" className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Customers Say
            </Typography>
            <Typography variant="h6" className="text-gray-300 text-xl">
              Real stories from satisfied supercar owners
            </Typography>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border border-white/20 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Avatar 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-16 h-16 mr-4"
                      />
                      <div>
                        <Typography variant="h6" className="text-white font-semibold">
                          {testimonial.name}
                        </Typography>
                        <Typography className="text-gray-300 text-sm">
                          {testimonial.role}
                        </Typography>
                        <Rating 
                          value={testimonial.rating} 
                          readOnly 
                          className="mt-1"
                          sx={{ color: '#f59e0b' }}
                        />
                      </div>
                    </div>
                    <Typography className="text-gray-200 mb-4 italic">
                      "{testimonial.comment}"
                    </Typography>
                    <Chip
                      label={testimonial.purchasedCar}
                      className="bg-orange-500/20 text-orange-400 border border-orange-500/30"
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Box>

      {/* Recently Viewed Cars */}
      <Box className="py-20 bg-white">
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Typography variant="h2" className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Recently Viewed
            </Typography>
            <Typography variant="h6" className="text-gray-600 text-xl">
              Cars that caught your attention
            </Typography>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recentlyViewedCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                  <div className="relative">
                    <CardMedia
                      component="img"
                      height="200"
                      image={car.image}
                      alt={car.name}
                      className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Chip 
                        label={car.type}
                        className={`${car.type === 'New' ? 'bg-green-500' : 'bg-blue-500'} text-white`}
                      />
                    </div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <IconButton 
                        size="small" 
                        className="bg-white/80 hover:bg-white"
                      >
                        <Heart className="w-4 h-4" />
                      </IconButton>
                      <IconButton 
                        size="small" 
                        className="bg-white/80 hover:bg-white"
                      >
                        <Eye className="w-4 h-4" />
                      </IconButton>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Typography variant="h6" className="font-bold text-gray-800 mb-2">
                      {car.name}
                    </Typography>
                    <Typography variant="h5" className="text-orange-600 font-bold mb-3">
                      {car.price}
                    </Typography>
                    <div className="flex justify-between text-gray-600 text-sm">
                      <span>{car.year}</span>
                      <span>{car.mileage}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              component={Link}
              to="/cars"
              variant="contained"
              size="large"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 px-8 py-3 text-lg font-semibold rounded-xl"
            >
              View All Cars
            </Button>
          </div>
        </Container>
      </Box>

      {/* Advertisement Section */}
      <Box className="py-20 bg-gradient-to-r from-orange-500 to-red-600">
        <Container maxWidth="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography variant="h2" className="text-4xl md:text-5xl font-bold text-white mb-6">
                Exclusive Financing Options
              </Typography>
              <Typography variant="h6" className="text-white/90 mb-8 text-xl leading-relaxed">
                Make your dream car affordable with our flexible financing solutions. 
                Low interest rates, extended terms, and instant approval available.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
                <Button
                  variant="contained"
                  size="large"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 font-semibold rounded-xl"
                >
                  Learn More
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 font-semibold rounded-xl"
                >
                  Apply Now
                </Button>
              </Stack>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <Paper className="p-6 text-center bg-white/10 backdrop-blur-sm border border-white/20">
                <Typography variant="h4" className="text-white font-bold mb-2">2.9%</Typography>
                <Typography className="text-white/90">Starting APR</Typography>
              </Paper>
              <Paper className="p-6 text-center bg-white/10 backdrop-blur-sm border border-white/20">
                <Typography variant="h4" className="text-white font-bold mb-2">84</Typography>
                <Typography className="text-white/90">Months Max</Typography>
              </Paper>
              <Paper className="p-6 text-center bg-white/10 backdrop-blur-sm border border-white/20">
                <Typography variant="h4" className="text-white font-bold mb-2">$0</Typography>
                <Typography className="text-white/90">Down Payment</Typography>
              </Paper>
              <Paper className="p-6 text-center bg-white/10 backdrop-blur-sm border border-white/20">
                <Typography variant="h4" className="text-white font-bold mb-2">24h</Typography>
                <Typography className="text-white/90">Approval Time</Typography>
              </Paper>
            </motion.div>
          </div>
        </Container>
      </Box>

      {/* Services Advertisement */}
      <Box className="py-20 bg-slate-100">
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Typography variant="h2" className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Premium Services
            </Typography>
            <Typography variant="h6" className="text-gray-600 text-xl">
              Everything you need for your supercar journey
            </Typography>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <Typography variant="h5" className="font-bold text-gray-800 mb-4">
                  Warranty Protection
                </Typography>
                <Typography className="text-gray-600 mb-6">
                  Comprehensive warranty coverage for peace of mind. Up to 5 years extended warranty available.
                </Typography>
                <Button variant="outlined" className="border-orange-500 text-orange-600 hover:bg-orange-50">
                  Learn More
                </Button>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <Typography variant="h5" className="font-bold text-gray-800 mb-4">
                  Concierge Service
                </Typography>
                <Typography className="text-gray-600 mb-6">
                  Personal concierge to handle delivery, paperwork, and ongoing support for your luxury experience.
                </Typography>
                <Button variant="outlined" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                  Get Started
                </Button>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Car className="w-8 h-8 text-purple-600" />
                </div>
                <Typography variant="h5" className="font-bold text-gray-800 mb-4">
                  Maintenance Program
                </Typography>
                <Typography className="text-gray-600 mb-6">
                  Expert maintenance and service by certified technicians. Keep your supercar in perfect condition.
                </Typography>
                <Button variant="outlined" className="border-purple-500 text-purple-600 hover:bg-purple-50">
                  View Plans
                </Button>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Typography variant="h2" className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Own Your Dream Car?
            </Typography>
            <Typography variant="h6" className="text-gray-300 mb-12 max-w-3xl mx-auto text-xl">
              Join thousands of satisfied customers who found their perfect supercar with us. 
              Expert guidance, premium selection, and unmatched service.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} justifyContent="center">
              <Button
                component={Link}
                to="/cars"
                variant="contained"
                size="large"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 px-12 py-4 text-xl font-semibold rounded-full shadow-2xl"
              >
                Browse Collection
              </Button>
              <Button
                component={Link}
                to="/register"
                variant="outlined"
                size="large"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-12 py-4 text-xl font-semibold rounded-full"
              >
                Start Your Journey
              </Button>
            </Stack>
          </motion.div>
        </Container>
      </Box>
    </div>
  );
};

export default Home;
