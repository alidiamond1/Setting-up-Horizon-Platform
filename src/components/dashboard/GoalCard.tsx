import React from 'react';
import { MoreVertical } from 'lucide-react';

interface GoalCardProps {
  title: string;
  progress: number;
  category: string;
}

function GoalCard({ title, progress, category }: GoalCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
            {category}
          </span>
          <h3 className="text-lg font-semibold mt-1">{title}</h3>
        </div>
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600 dark:text-gray-300">Progress</span>
          <span className="font-medium">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default GoalCard;