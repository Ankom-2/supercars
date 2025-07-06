import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Slider,
  IconButton,
  Pagination
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  GridIcon, 
  List, 
  Star, 
  Heart, 
  Settings,
  Calendar,
  Fuel,
  Gauge,
  MapPin,
  ArrowRight
} from 'lucide-react';

interface Car {
  id: number;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  image: string;
  type: 'New' | 'Used';
  category: string;
  mileage?: number;
  fuelType: string;
  transmission: string;
  rating: number;
  reviews: number;
  features: string[];
  location: string;
}

const CarListing: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<number[]>([0, 500000]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);

  const carsPerPage = 12;

  // Mock data
  const mockCars: Car[] = [
    {
      id: 1,
      name: 'Lamborghini Huracán EVO',
      brand: 'Lamborghini',
      model: 'Huracán',
      year: 2024,
      price: 299000,
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      type: 'New',
      category: 'Sports',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      rating: 4.8,
      reviews: 12,
      features: ['V10 Engine', 'All-Wheel Drive', 'Carbon Fiber', 'Premium Sound'],
      location: 'Los Angeles, CA'
    },
    {
      id: 2,
      name: 'Ferrari F8 Tributo',
      brand: 'Ferrari',
      model: 'F8',
      year: 2024,
      price: 280000,
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      type: 'New',
      category: 'Sports',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      rating: 4.9,
      reviews: 8,
      features: ['V8 Twin-Turbo', 'Rear-Wheel Drive', 'Sport Suspension', 'Carbon Brakes'],
      location: 'Miami, FL'
    },
    {
      id: 3,
      name: 'McLaren 720S',
      brand: 'McLaren',
      model: '720S',
      year: 2023,
      price: 195000,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      type: 'Used',
      category: 'Sports',
      mileage: 1200,
      fuelType: 'Petrol',
      transmission: 'Automatic',
      rating: 4.7,
      reviews: 15,
      features: ['V8 Twin-Turbo', 'Active Aerodynamics', 'Carbon Tub', 'Track Mode'],
      location: 'New York, NY'
    },
    {
      id: 4,
      name: 'Porsche 911 Turbo S',
      brand: 'Porsche',
      model: '911',
      year: 2024,
      price: 230000,
      image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      type: 'New',
      category: 'Sports',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      rating: 4.6,
      reviews: 22,
      features: ['Flat-6 Turbo', 'All-Wheel Drive', 'PASM', 'Sport Chrono'],
      location: 'San Francisco, CA'
    },
    {
      id: 5,
      name: 'Aston Martin DBS',
      brand: 'Aston Martin',
      model: 'DBS',
      year: 2023,
      price: 350000,
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      type: 'New',
      category: 'Luxury',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      rating: 4.5,
      reviews: 6,
      features: ['V12 Engine', 'Carbon Fiber', 'Luxury Interior', 'Bang & Olufsen'],
      location: 'Chicago, IL'
    },
    {
      id: 6,
      name: 'Bugatti Chiron',
      brand: 'Bugatti',
      model: 'Chiron',
      year: 2024,
      price: 3200000,
      image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      type: 'New',
      category: 'Hypercar',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      rating: 5.0,
      reviews: 3,
      features: ['W16 Quad-Turbo', 'All-Wheel Drive', 'Carbon Fiber Body', 'Handcrafted Interior'],
      location: 'Beverly Hills, CA'
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setCars(mockCars);
      setFilteredCars(mockCars);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    filterAndSortCars();
  }, [cars, searchQuery, selectedBrand, selectedType, selectedCategory, priceRange, sortBy]);

  const filterAndSortCars = () => {
    let filtered = cars.filter(car => {
      const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           car.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBrand = !selectedBrand || car.brand === selectedBrand;
      const matchesType = !selectedType || car.type === selectedType;
      const matchesCategory = !selectedCategory || car.category === selectedCategory;
      const matchesPrice = car.price >= priceRange[0] && car.price <= priceRange[1];

      return matchesSearch && matchesBrand && matchesType && matchesCategory && matchesPrice;
    });

    // Sort cars
    filtered = filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'year-new':
          return b.year - a.year;
        case 'year-old':
          return a.year - b.year;
        case 'rating':
          return b.rating - a.rating;
        default:
          return b.year - a.year;
      }
    });

    setFilteredCars(filtered);
    setCurrentPage(1);
  };

  const brands = Array.from(new Set(cars.map(car => car.brand)));
  const categories = Array.from(new Set(cars.map(car => car.category)));

  const paginatedCars = filteredCars.slice(
    (currentPage - 1) * carsPerPage,
    currentPage * carsPerPage
  );

  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const renderCarCard = (car: Car) => (
    <motion.div
      key={car.id}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full bg-slate-800/50 backdrop-blur-lg border border-slate-700 hover:border-blue-400/50 transition-all duration-300 group overflow-hidden">
        <div className="relative overflow-hidden">
          <CardMedia
            component="img"
            height="240"
            image={car.image}
            alt={car.name}
            className="h-60 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <Chip 
              label={car.type}
              className={`${car.type === 'New' ? 'bg-green-600' : 'bg-blue-600'} text-white font-semibold`}
            />
          </div>
          <div className="absolute top-4 right-4 flex space-x-2">
            <IconButton className="bg-black/50 text-white hover:bg-black/70">
              <Heart className="w-5 h-5" />
            </IconButton>
            <div className="flex items-center bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              <span className="text-white text-sm font-semibold">{car.rating}</span>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <CardContent className="p-6">
          <Typography variant="h6" className="text-white font-bold mb-2 line-clamp-1">
            {car.name}
          </Typography>
          <div className="flex items-center space-x-4 mb-3 text-gray-400 text-sm">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {car.year}
            </div>
            <div className="flex items-center">
              <Settings className="w-4 h-4 mr-1" />
              {car.transmission}
            </div>
            <div className="flex items-center">
              <Fuel className="w-4 h-4 mr-1" />
              {car.fuelType}
            </div>
          </div>
          {car.mileage && (
            <div className="flex items-center text-gray-400 text-sm mb-3">
              <Gauge className="w-4 h-4 mr-1" />
              {car.mileage.toLocaleString()} miles
            </div>
          )}
          <div className="flex items-center text-gray-400 text-sm mb-4">
            <MapPin className="w-4 h-4 mr-1" />
            {car.location}
          </div>
          <div className="flex justify-between items-center mb-4">
            <Typography variant="h5" className="text-blue-400 font-bold">
              {formatPrice(car.price)}
            </Typography>
            <div className="text-gray-400 text-sm">
              {car.reviews} reviews
            </div>
          </div>
          <div className="flex flex-wrap gap-1 mb-4">
            {car.features.slice(0, 2).map((feature, index) => (
              <Chip
                key={index}
                label={feature}
                size="small"
                className="bg-slate-700 text-gray-300"
              />
            ))}
            {car.features.length > 2 && (
              <Chip
                label={`+${car.features.length - 2} more`}
                size="small"
                className="bg-slate-700 text-gray-300"
              />
            )}
          </div>
          <Button
            component={Link}
            to={`/cars/${car.id}`}
            variant="contained"
            fullWidth
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 font-semibold rounded-lg"
            endIcon={<ArrowRight className="w-4 h-4" />}
          >
            View Details
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-400 mb-4"></div>
          <Typography variant="h6" className="text-white">Loading Cars...</Typography>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <Box className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 py-16">
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Typography variant="h2" className="text-4xl md:text-6xl font-bold text-white mb-4">
              Find Your Perfect
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                {" "}SuperCar
              </span>
            </Typography>
            <Typography variant="h6" className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover our exclusive collection of luxury and sports cars from the world's most prestigious brands
            </Typography>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-4xl mx-auto">
              <TextField
                fullWidth
                placeholder="Search by brand, model, or name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: <Search className="w-5 h-5 text-gray-400 mr-3" />,
                  className: "bg-white/10 text-white text-lg"
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { border: 'none' },
                  },
                }}
              />
            </div>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="xl" className="py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <Box className="w-full lg:w-80 space-y-6">
            <Card className="bg-slate-800/50 backdrop-blur-lg border border-slate-700">
              <CardContent className="p-6">
                <Typography variant="h6" className="text-white font-bold mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </Typography>

                {/* Brand Filter */}
                <FormControl fullWidth className="mb-4">
                  <InputLabel className="text-gray-300">Brand</InputLabel>
                  <Select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="text-white"
                    sx={{
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#3b82f6',
                      },
                    }}
                  >
                    <MenuItem value="">All Brands</MenuItem>
                    {brands.map(brand => (
                      <MenuItem key={brand} value={brand}>{brand}</MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {/* Type Filter */}
                <FormControl fullWidth className="mb-4">
                  <InputLabel className="text-gray-300">Type</InputLabel>
                  <Select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="text-white"
                    sx={{
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#3b82f6',
                      },
                    }}
                  >
                    <MenuItem value="">All Types</MenuItem>
                    <MenuItem value="New">New</MenuItem>
                    <MenuItem value="Used">Used</MenuItem>
                  </Select>
                </FormControl>

                {/* Category Filter */}
                <FormControl fullWidth className="mb-4">
                  <InputLabel className="text-gray-300">Category</InputLabel>
                  <Select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="text-white"
                    sx={{
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#3b82f6',
                      },
                    }}
                  >
                    <MenuItem value="">All Categories</MenuItem>
                    {categories.map(category => (
                      <MenuItem key={category} value={category}>{category}</MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {/* Price Range */}
                <div className="mb-4">
                  <Typography variant="body2" className="text-gray-300 mb-2">
                    Price Range: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
                  </Typography>
                  <Slider
                    value={priceRange}
                    onChange={(_, newValue) => setPriceRange(newValue as number[])}
                    valueLabelDisplay="auto"
                    min={0}
                    max={5000000}
                    step={10000}
                    className="text-blue-400"
                  />
                </div>
              </CardContent>
            </Card>
          </Box>

          {/* Main Content */}
          <Box className="flex-1">
            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <Typography variant="h6" className="text-white">
                {filteredCars.length} Cars Found
              </Typography>
              <div className="flex items-center space-x-4">
                <FormControl size="small">
                  <Select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-white bg-slate-800/50"
                    sx={{
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                      },
                    }}
                  >
                    <MenuItem value="newest">Newest First</MenuItem>
                    <MenuItem value="price-low">Price: Low to High</MenuItem>
                    <MenuItem value="price-high">Price: High to Low</MenuItem>
                    <MenuItem value="rating">Highest Rated</MenuItem>
                  </Select>
                </FormControl>
                <div className="flex bg-slate-800/50 rounded-lg">
                  <IconButton
                    onClick={() => setViewMode('grid')}
                    className={`${viewMode === 'grid' ? 'text-blue-400' : 'text-gray-400'}`}
                  >
                    <GridIcon className="w-5 h-5" />
                  </IconButton>
                  <IconButton
                    onClick={() => setViewMode('list')}
                    className={`${viewMode === 'list' ? 'text-blue-400' : 'text-gray-400'}`}
                  >
                    <List className="w-5 h-5" />
                  </IconButton>
                </div>
              </div>
            </div>

            {/* Cars Grid */}
            <AnimatePresence mode="wait">
              {filteredCars.length > 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'} gap-6 mb-8`}>
                    {paginatedCars.map(renderCarCard)}
                  </div>
                  
                  {/* Pagination */}
                  {totalPages > 1 && (
                    <Box className="flex justify-center">
                      <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={(_, page) => setCurrentPage(page)}
                        color="primary"
                        size="large"
                        className="bg-slate-800/50 rounded-lg p-2"
                      />
                    </Box>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-16"
                >
                  <Typography variant="h5" className="text-gray-400 mb-4">
                    No cars found matching your criteria
                  </Typography>
                  <Button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedBrand('');
                      setSelectedType('');
                      setSelectedCategory('');
                      setPriceRange([0, 500000]);
                    }}
                    variant="outlined"
                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                  >
                    Clear Filters
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default CarListing;
