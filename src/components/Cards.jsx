import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, MessageCircle, ThumbsUp } from 'lucide-react';
import data from '../data.json';

const Cards = ({ filterCategory }) => {
  const filteredCards = filterCategory === 'all' 
    ? data 
    : data.filter(card => card.category === filterCategory);

  const groupedCards = {
    backlog: filteredCards.filter(card => card.category === 'backlog'),
    todo: filteredCards.filter(card => card.category === 'todo'),
    progress: filteredCards.filter(card => card.category === 'progress'),
    review: filteredCards.filter(card => card.category === 'review')
  };

  const CategoryColumn = ({ title, cards, className = "" }) => (
    <div className={`flex-1 ${className}`}>
      <h3 className="text-sm font-medium text-gray-900 mb-4 hidden lg:block">{title}</h3>
      <div className="grid grid-cols-1 gap-4 lg:space-y-4 lg:block">
        {cards.map((card) => (
          <Card key={card.id} className="p-3 lg:p-4 hover:shadow-md transition-shadow">
            <CardContent className="p-0">
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2 py-1 text-xs font-medium text-white rounded ${card.tagColor}`}>
                  {card.tag}
                </span>
              </div>
              
              {card.image && (
                <div className={`w-full h-20 lg:h-24 bg-gradient-to-br ${card.imageGradient} rounded-lg mb-3`}></div>
              )}
              
              <h4 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">{card.title}</h4>
              <p className="text-xs text-gray-500 mb-3 line-clamp-2">{card.description}</p>
              
              <div className="flex items-end justify-between">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 mb-1 border border-gray-300 p-1 rounded text-center">{card.date}</span>
                  <div className="flex -space-x-2 mt-1">
                    {card.profiles.slice(0, 3).map((profile, index) => (
                      <Avatar key={profile.id} className="w-5 h-5 lg:w-6 lg:h-6 border-2 border-white">
                        <AvatarImage src={profile.avatar} alt={`Profile ${profile.id}`} />
                        <AvatarFallback className="text-xs">U{index + 1}</AvatarFallback>
                      </Avatar>
                    ))}
                    {card.profiles.length > 3 && (
                      <div className="w-5 h-5 lg:w-6 lg:h-6 bg-gray-200 border-2 border-white rounded-full flex items-center justify-center">
                        <span className="text-xs text-gray-600">+{card.profiles.length - 3}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  {card.progress.includes('Comment') ? (
                    <>
                      <MessageCircle size={12} className="mr-1" />
                      <span className="hidden sm:inline">{card.progress}</span>
                      <span className="sm:hidden">{card.progress.split(' ')[0]}</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle size={12} className="mr-1" />
                      <span className="hidden sm:inline">{card.progress}</span>
                      <span className="sm:hidden">{card.progress.split(' ')[0]}</span>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="mt-5">
      <div className="grid grid-cols-2 gap-4 lg:hidden">
        {Object.entries(groupedCards).map(([category, cards]) => (
          cards.length > 0 && (
            <div key={category} className="space-y-4">
              <h3 className="text-sm font-medium text-gray-900 capitalize">{category}</h3>
              {cards.map((card) => (
                <Card key={card.id} className="p-3 hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2 py-1 text-xs font-medium text-white rounded ${card.tagColor}`}>
                        {card.tag}
                      </span>
                    </div>
                    
                    {card.image && (
                      <div className={`w-full h-16 bg-gradient-to-br ${card.imageGradient} rounded-lg mb-3`}></div>
                    )}
                    
                    <h4 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">{card.title}</h4>
                    <p className="text-xs text-gray-500 mb-3 line-clamp-2">{card.description}</p>
                    
                    <div className="flex items-end justify-between">
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-400 mb-1 border border-gray-300 p-1 rounded text-center">{card.date}</span>
                        <div className="flex -space-x-1 mt-1">
                          {card.profiles.slice(0, 2).map((profile, index) => (
                            <Avatar key={profile.id} className="w-4 h-4 border border-white">
                              <AvatarImage src={profile.avatar} alt={`Profile ${profile.id}`} />
                              <AvatarFallback className="text-xs">U{index + 1}</AvatarFallback>
                            </Avatar>
                          ))}
                          {card.profiles.length > 2 && (
                            <div className="w-4 h-4 bg-gray-200 border border-white rounded-full flex items-center justify-center">
                              <span className="text-xs text-gray-600">+</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center text-xs text-gray-400">
                        {card.progress.includes('Comment') ? (
                          <>
                            <MessageCircle size={10} className="mr-1" />
                            <span>{card.progress.split(' ')[0]}</span>
                          </>
                        ) : (
                          <>
                            <CheckCircle size={10} className="mr-1" />
                            <span>{card.progress.split(' ')[0]}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )
        ))}
      </div>
      
      <div className="hidden lg:flex lg:space-x-6 lg:overflow-x-auto">
        <CategoryColumn 
          cards={groupedCards.backlog}
        />
        <CategoryColumn 
          cards={groupedCards.todo}
        />
        <CategoryColumn 
          cards={groupedCards.progress}
        />
        <CategoryColumn 
          cards={groupedCards.review}
        />
      </div>
    </div>
  );
};

export default Cards;