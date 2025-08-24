import React from 'react';
import { LayoutGrid, Printer, Book, Settings, Send, FolderOpen, X } from 'lucide-react';

const Leftnav = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: LayoutGrid, active: true },
    { icon: Printer, active: false },
    { icon: Book, active: true },
    { icon: Settings, active: false },
    { icon: Send, active: false },
    { icon: FolderOpen, active: false }
  ];

  return (
    <>
      <div className={`
        fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300
        ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `} onClick={onClose} />
      
      <div className={`
        fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 lg:relative lg:translate-x-0 lg:w-16 lg:z-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 lg:justify-center lg:py-6">
            <div className="flex items-center space-x-3 lg:flex-col lg:space-x-0 lg:space-y-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                </div>
              </div>
              <div className="text-xs font-semibold text-gray-800 lg:text-center">OCTOM.</div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 lg:hidden"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="flex-1 px-4 lg:px-0">
            <div className="space-y-2 lg:space-y-4 lg:flex lg:flex-col lg:items-center">
              {menuItems.map((item, index) => (
                <div key={index} className="relative">
                  <button
                    className={`w-full lg:w-10 h-10 rounded-xl flex items-center justify-center lg:justify-center px-4 lg:px-0 space-x-3 lg:space-x-0 transition-all duration-200 ${
                      item.active 
                        ? 'bg-blue-500 text-white shadow-lg' 
                        : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon size={20} />
                    <span className="lg:hidden text-sm font-medium">
                      {item.icon === LayoutGrid && 'Dashboard'}
                      {item.icon === Printer && 'Print'}
                      {item.icon === Book && 'Documents'}
                      {item.icon === Settings && 'Settings'}
                      {item.icon === Send && 'Messages'}
                      {item.icon === FolderOpen && 'Files'}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leftnav;