import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider
} from '@mui/material';
import { 
  Car, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  ArrowRight
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Cars', path: '/cars' },
    { name: 'Blog', path: '/blog' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const carBrands = [
    'Ferrari', 'Lamborghini', 'McLaren', 'Porsche', 
    'Aston Martin', 'Bugatti', 'BMW', 'Mercedes'
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', name: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', name: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', name: 'Instagram' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', name: 'YouTube' }
  ];

  return (
    <Box className="bg-slate-900 border-t border-slate-800">
      <Container maxWidth="xl" className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Car className="w-8 h-8 text-blue-400" />
              <Typography variant="h5" className="text-white font-bold">
                SuperCars
              </Typography>
            </div>
            <Typography variant="body1" className="text-gray-400 leading-relaxed">
              Your premier destination for luxury and sports cars. We connect you with the world's most exclusive vehicles from certified dealers.
            </Typography>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>contact@supercars.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Beverly Hills, CA 90210</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <Typography variant="h6" className="text-white font-semibold mb-6">
              Quick Links
            </Typography>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="flex items-center group text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Car Brands */}
          <div>
            <Typography variant="h6" className="text-white font-semibold mb-6">
              Featured Brands
            </Typography>
            <div className="space-y-3">
              {carBrands.map((brand) => (
                <Link
                  key={brand}
                  to={`/cars?brand=${brand}`}
                  className="flex items-center group text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                  {brand}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter & Social */}
          <div>
            <Typography variant="h6" className="text-white font-semibold mb-6">
              Stay Connected
            </Typography>
            <Typography variant="body2" className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest luxury car news and exclusive deals.
            </Typography>
            
            {/* Email Subscription */}
            <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent text-white placeholder-gray-400 border-none outline-none"
                />
                <IconButton className="text-blue-400 hover:text-blue-300">
                  <ArrowRight className="w-5 h-5" />
                </IconButton>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <Typography variant="body2" className="text-gray-400 mb-3">
                Follow us on social media
              </Typography>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.name}
                    href={social.href}
                    className="bg-slate-800/50 text-gray-400 hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-200"
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Divider className="border-slate-800" />

      {/* Bottom Bar */}
      <Container maxWidth="xl">
        <Box className="py-6 flex flex-col md:flex-row justify-between items-center">
          <Typography variant="body2" className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} SuperCars. All rights reserved. Built with ❤️ for car enthusiasts.
          </Typography>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              Cookie Policy
            </Link>
            <Link to="/sitemap" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              Sitemap
            </Link>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
