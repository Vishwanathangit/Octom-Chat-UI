import React, { useState } from 'react';
import { Flame, Plus } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Leftnav from './components/Leftnav';
import Topnav from './components/Topnav';
import Chatpage from './components/Chatpage';
import Tags from './components/Tags';
import Cards from './components/Cards';

function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLeftNavOpen, setIsLeftNavOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const teamMembers = [
    { id: 1, name: "John", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=32&h=32&q=80" },
    { id: 2, name: "Jane", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=32&h=32&q=80" },
    { id: 3, name: "Bob", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=32&h=32&q=80" },
    { id: 4, name: "Alice", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=32&h=32&q=80" },
    { id: 5, name: "Tom", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=32&h=32&q=80" },
    { id: 6, name: "Sarah", avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=32&h=32&q=80" },
    { id: 7, name: "Mike", avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=32&h=32&q=80" },
    { id: 8, name: "Emma", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=32&h=32&q=80" }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Leftnav isOpen={isLeftNavOpen} onClose={() => setIsLeftNavOpen(false)} />
      
      <div className="flex-1 flex flex-col">
        <Topnav onMenuToggle={() => setIsLeftNavOpen(!isLeftNavOpen)} />
        
        <div className="flex-1 flex mt-3">
          <div className="flex-1 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Flame className="text-orange-500" size={24} />
                <h1 className="text-xl font-semibold text-gray-900">Task</h1>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  {teamMembers.slice(0, 6).map((member) => (
                    <Avatar key={member.id} className="w-8 h-8 border-2 border-white">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-500 text-white text-xs font-medium">
                        {member.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">
                  +6
                </div>
                <button 
                  onClick={() => setIsChatOpen(true)}
                  className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors lg:hidden"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            
            <Tags onFilterChange={setActiveFilter} activeFilter={activeFilter} />
            <Cards filterCategory={activeFilter} />
          </div>
          
          <Chatpage isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </div>
      </div>
    </div>
  );
}

export default App;