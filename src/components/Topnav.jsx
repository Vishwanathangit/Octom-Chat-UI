import React from 'react';
import { Search, Bell, ChevronDown, Menu } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Topnav = ({ onMenuToggle }) => {
  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-6 mt-2">
      <div className="flex items-center space-x-4 lg:hidden">
        <button 
          onClick={onMenuToggle}
          className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <Menu size={20} />
        </button>
      </div>
      
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-xs lg:w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-2 lg:space-x-4">
        <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">
            1
          </span>
        </button>
        
        <div className="flex items-center space-x-2 cursor-pointer">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=32&h=32&q=80" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <ChevronDown size={16} className="text-gray-400 hidden sm:block" />
        </div>
      </div>
    </div>
  );
};

export default Topnav;