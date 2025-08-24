import React from 'react';
import { Plus, MoreHorizontal } from 'lucide-react';

const Tags = ({ onFilterChange, activeFilter }) => {
  const tags = [
    { name: 'Backlog', key: 'backlog' },
    { name: 'To Do', key: 'todo' },
    { name: 'In Progress', key: 'progress' },
    { name: 'Review', key: 'review' }
  ];

  return (
    <div className="grid grid-cols-2 gap-3 mb-6 lg:flex lg:space-x-18 lg:grid-cols-none">
      {tags.map((tag) => (
        <div key={tag.key} className="bg-white rounded-lg shadow-md p-3 lg:p-4 flex items-center justify-between lg:justify-start lg:space-x-2 lg:min-w-40">
          <button
            onClick={() => onFilterChange(tag.key)}
            className={`text-sm lg:text-lg font-semibold transition-colors truncate ${
              activeFilter === tag.key 
                ? 'text-gray-900' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tag.name}
          </button>
          <div className="flex items-center space-x-1 lg:space-x-2">
            <button className="text-gray-400 hover:text-gray-600 lg:block hidden">
              <MoreHorizontal size={16} />
            </button>
            <button className="w-5 h-5 lg:w-6 lg:h-6 bg-gray-100 rounded-md flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-200 transition-colors">
              <Plus size={12} className="lg:w-3.5 lg:h-3.5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tags;