import React from 'react';
import { Users } from 'lucide-react';

interface GroupCardProps {
  name: string;
  members: number;
  description: string;
  category: string;
  image: string;
}

function GroupCard({ name, members, description, category, image }: GroupCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
      <div className="h-32 w-full relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-white/90 dark:bg-gray-900/90 text-gray-700 dark:text-gray-300">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-semibold mb-2">{name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Users className="h-4 w-4 mr-1" />
            {members} members
          </div>
          <button className="btn-primary text-sm">
            Join Group
          </button>
        </div>
      </div>
    </div>
  );
}

export default GroupCard;