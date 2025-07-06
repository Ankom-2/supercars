import mongoose, { Document, Schema } from 'mongoose';

export interface ICar extends Document {
  name: string;
  brand: string;
  carModel: string;
  year: number;
  price: number;
  type: 'new' | 'used';
  category: 'luxury' | 'sports' | 'suv' | 'sedan' | 'convertible' | 'electric' | 'hybrid';
  mileage?: number;
  fuelType: 'petrol' | 'diesel' | 'electric' | 'hybrid';
  transmission: 'manual' | 'automatic' | 'cvt';
  engineSize?: string;
  horsepower?: number;
  acceleration?: string; // 0-60 mph
  topSpeed?: number;
  fuelEconomy?: string;
  color: string;
  description: string;
  features: string[];
  images: string[];
  specifications: {
    exterior: Record<string, string>;
    interior: Record<string, string>;
    performance: Record<string, string>;
    safety: Record<string, string>;
  };
  availability: 'available' | 'sold' | 'reserved';
  views: number;
  likes: number;
  location: string;
  dealer?: {
    name: string;
    contact: string;
    address: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const carSchema = new Schema<ICar>({
  name: {
    type: String,
    required: [true, 'Car name is required'],
    trim: true,
    maxlength: [100, 'Car name cannot be more than 100 characters']
  },
  brand: {
    type: String,
    required: [true, 'Brand is required'],
    trim: true
  },
  carModel: {
    type: String,
    required: [true, 'Model is required'],
    trim: true
  },
  year: {
    type: Number,
    required: [true, 'Year is required'],
    min: [1900, 'Year must be after 1900'],
    max: [new Date().getFullYear() + 1, 'Year cannot be in the future']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  type: {
    type: String,
    required: [true, 'Type is required'],
    enum: ['new', 'used']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['luxury', 'sports', 'suv', 'sedan', 'convertible', 'electric', 'hybrid']
  },
  mileage: {
    type: Number,
    min: [0, 'Mileage cannot be negative']
  },
  fuelType: {
    type: String,
    required: [true, 'Fuel type is required'],
    enum: ['petrol', 'diesel', 'electric', 'hybrid']
  },
  transmission: {
    type: String,
    required: [true, 'Transmission is required'],
    enum: ['manual', 'automatic', 'cvt']
  },
  engineSize: String,
  horsepower: {
    type: Number,
    min: [0, 'Horsepower cannot be negative']
  },
  acceleration: String,
  topSpeed: {
    type: Number,
    min: [0, 'Top speed cannot be negative']
  },
  fuelEconomy: String,
  color: {
    type: String,
    required: [true, 'Color is required']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    maxlength: [2000, 'Description cannot be more than 2000 characters']
  },
  features: [String],
  images: [String],
  specifications: {
    exterior: {
      type: Map,
      of: String,
      default: {}
    },
    interior: {
      type: Map,
      of: String,
      default: {}
    },
    performance: {
      type: Map,
      of: String,
      default: {}
    },
    safety: {
      type: Map,
      of: String,
      default: {}
    }
  },
  availability: {
    type: String,
    enum: ['available', 'sold', 'reserved'],
    default: 'available'
  },
  views: {
    type: Number,
    default: 0
  },
  likes: {
    type: Number,
    default: 0
  },
  location: {
    type: String,
    required: [true, 'Location is required']
  },
  dealer: {
    name: String,
    contact: String,
    address: String
  }
}, {
  timestamps: true
});

// Index for search functionality
carSchema.index({
  name: 'text',
  brand: 'text',
  carModel: 'text',
  description: 'text'
});

// Index for filtering
carSchema.index({ brand: 1, type: 1, category: 1, price: 1 });

export default mongoose.model<ICar>('Car', carSchema);
