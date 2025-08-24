import React from 'react';
import { Send, Mic, MoreHorizontal, Play, Pause, X } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Chatpage = ({ isOpen, onClose }) => {
  const members = [
    { id: 1, name: "John", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=32&h=32&q=80" },
    { id: 2, name: "Jane", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=32&h=32&q=80" },
    { id: 3, name: "Bob", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=32&h=32&q=80" },
    { id: 4, name: "Alice", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=32&h=32&q=80" },
    { id: 5, name: "Tom", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=32&h=32&q=80" },
    { id: 6, name: "Sarah", avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=32&h=32&q=80" }
  ];

  const AudioWaveform = () => {
    const waveHeights = [4, 8, 12, 6, 10, 14, 8, 4, 6, 12, 8, 4, 10, 6, 8, 12, 4, 8, 6, 10];
    
    return (
      <div className="flex items-center space-x-0.5 flex-1 mx-2">
        {waveHeights.map((height, index) => (
          <div
            key={index}
            className={`w-0.5 rounded-full transition-all duration-200 ${
              index < 12 ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            style={{ height: `${height}px` }}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`} onClick={onClose} />
      
      <div className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-white border-l border-gray-200 z-50 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:w-80 lg:z-auto ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-900">Member (25)</span>
              <div className="flex items-center space-x-2">
                <button className="text-sm text-blue-500 hover:text-blue-600">View All</button>
                <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-600 lg:hidden">
                  <X size={16} />
                </button>
              </div>
            </div>
            
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {members.map((member) => (
                <Avatar key={member.id} className="w-8 h-8 flex-shrink-0">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Group Chat</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Avatar className="w-6 h-6 flex-shrink-0">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=24&h=24&q=80" alt="John" />
                  <AvatarFallback>J</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-500 mb-1">08:00 am</div>
                  <div className="text-xs text-gray-600">Hello! 👋</div>
                </div>
              </div>
              
              <div className="bg-blue-500 text-white px-3 py-2 rounded-lg text-xs max-w-xs ml-auto">
                <div className="mb-1">Hi Everyone 👋</div>
                <div className="text-xs opacity-75">✓ Just now</div>
              </div>
              
              <div className="flex items-start space-x-2">
                <Avatar className="w-6 h-6 flex-shrink-0">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b1a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=24&h=24&q=80" alt="Sarah" />
                  <AvatarFallback>S</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-500 mb-1">08:03 am</div>
                  <div className="text-xs text-gray-600 break-words">How are you? What did you do everyone?</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <Avatar className="w-6 h-6 flex-shrink-0">
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=24&h=24&q=80" alt="Tom" />
                  <AvatarFallback>T</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-500 mb-1">08:05 am</div>
                  <div className="text-xs text-gray-600">Good 👍</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <Avatar className="w-6 h-6 flex-shrink-0">
                  <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=24&h=24&q=80" alt="Alice" />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center bg-gray-100 rounded-lg p-2">
                    <button className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      <Pause size={12} />
                    </button>
                    <AudioWaveform />
                    <span className="text-xs text-gray-500 flex-shrink-0">1:25</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Write a message..."
                className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-0"
              />
              <button className="p-2 text-gray-400 hover:text-gray-600 flex-shrink-0">
                <Mic size={18} />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 flex-shrink-0">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatpage;