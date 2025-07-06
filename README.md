# SuperCars - Premium Car Marketplace

A comprehensive car marketplace platform built with React, Node.js, Express, and MongoDB featuring car listings, blog functionality, and admin management.

## 🚗 Features

### Public Features
- **Car Listings**: Browse luxury, sports, and premium cars
- **Search & Filter**: Advanced filtering by brand, type, price, category
- **Car Details**: Detailed specifications, image galleries, and features
- **Blog Section**: Latest automotive news, reviews, and guides
- **Responsive Design**: Mobile-friendly interface with modern UI
- **User Authentication**: Secure login and registration

### Admin Features
- **Admin Dashboard**: Comprehensive overview with analytics
- **Car Management**: Add, edit, delete car listings
- **Blog Management**: Create and manage blog posts
- **User Management**: Manage user accounts and roles
- **Image Upload**: Support for multiple car images

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Axios** for API calls
- **Lucide React** for icons
- **Framer Motion** for animations

### Backend
- **Node.js** with Express
- **TypeScript** for type safety
- **MongoDB** with Mongoose ODM
- **JWT** authentication
- **Bcrypt** for password hashing
- **Multer** for file uploads
- **Helmet** for security
- **Rate limiting** for API protection

## 📁 Project Structure

```
supercars/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React context providers
│   │   ├── services/       # API service functions
│   │   └── utils/          # Utility functions
│   ├── public/             # Static assets
│   └── package.json
├── backend/                 # Node.js backend API
│   ├── src/
│   │   ├── models/         # MongoDB models
│   │   ├── controllers/    # Route controllers
│   │   ├── routes/         # API routes
│   │   ├── middleware/     # Custom middleware
│   │   └── utils/          # Utility functions
│   ├── uploads/            # File upload directory
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:
```env
MONGODB_URI=mongodb://localhost:27017/supercars
JWT_SECRET=your-super-secret-jwt-key-here
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

5. Build and start the server:
```bash
npm run build
npm start
```

For development with auto-reload:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🔐 Default Admin Account

For testing purposes, use these credentials:
- **Email**: admin@supercars.com
- **Password**: admin123

## 📊 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile
- `PUT /api/auth/updatepassword` - Update password

### Cars
- `GET /api/cars` - Get all cars
- `GET /api/cars/:id` - Get car by ID
- `POST /api/cars` - Create car (Admin)
- `PUT /api/cars/:id` - Update car (Admin)
- `DELETE /api/cars/:id` - Delete car (Admin)

### Blog
- `GET /api/blog` - Get all blog posts
- `GET /api/blog/:id` - Get blog post by ID
- `POST /api/blog` - Create blog post (Admin)
- `PUT /api/blog/:id` - Update blog post (Admin)
- `DELETE /api/blog/:id` - Delete blog post (Admin)

## 🎨 Design Features

- **Modern UI**: Clean, professional design with Tailwind CSS
- **Responsive**: Mobile-first design approach
- **Fast Performance**: Optimized with Vite and lazy loading
- **Accessibility**: WCAG compliant components
- **Dark/Light Mode**: Theme switching capability
- **Animations**: Smooth transitions and micro-interactions

## 🔒 Security Features

- JWT authentication
- Password hashing with bcrypt
- Input validation and sanitization
- Rate limiting
- CORS protection
- Helmet security headers
- File upload restrictions

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🤝 Support

For support and questions, please contact the development team or create an issue in the repository.

---

Built with ❤️ for car enthusiasts
