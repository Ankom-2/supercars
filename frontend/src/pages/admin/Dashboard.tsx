import React from 'react';
import { Link } from 'react-router-dom';
import { Car, FileText, Users, TrendingUp, Eye, Heart, MessageSquare } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Total Cars', value: '156', icon: Car, color: 'bg-blue-500' },
    { label: 'Blog Posts', value: '42', icon: FileText, color: 'bg-green-500' },
    { label: 'Users', value: '1,234', icon: Users, color: 'bg-purple-500' },
    { label: 'Page Views', value: '12,345', icon: Eye, color: 'bg-yellow-500' }
  ];

  const recentActivity = [
    { action: 'New car added', item: 'BMW M5 Competition', time: '2 hours ago' },
    { action: 'Blog post published', item: 'Future of Electric Cars', time: '4 hours ago' },
    { action: 'User registered', item: 'john.doe@email.com', time: '6 hours ago' },
    { action: 'Car viewed', item: 'Lamborghini Huracán', time: '8 hours ago' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Admin Dashboard</h1>
          <p className="text-xl text-gray-600">Manage your SuperCars platform</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link 
                  to="/admin/cars"
                  className="flex items-center p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                >
                  <Car className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="font-medium text-blue-900">Manage Cars</span>
                </Link>
                <Link 
                  to="/admin/blog"
                  className="flex items-center p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                >
                  <FileText className="h-5 w-5 text-green-600 mr-3" />
                  <span className="font-medium text-green-900">Manage Blog</span>
                </Link>
                <Link 
                  to="/admin/users"
                  className="flex items-center p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
                >
                  <Users className="h-5 w-5 text-purple-600 mr-3" />
                  <span className="font-medium text-purple-900">Manage Users</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-600">{activity.item}</p>
                    </div>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Monthly Views</h3>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-12 w-12 text-gray-400" />
              <span className="ml-2 text-gray-500">Chart will be implemented here</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Cars</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-900">Lamborghini Huracán</span>
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-red-500" />
                  <span className="text-sm text-gray-600">245</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-900">BMW M5 Competition</span>
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-red-500" />
                  <span className="text-sm text-gray-600">198</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-900">Mercedes-AMG GT</span>
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-red-500" />
                  <span className="text-sm text-gray-600">156</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
