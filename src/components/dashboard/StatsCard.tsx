import React, { ReactNode } from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  trend: string;
}

function StatsCard({ title, value, icon, trend }: StatsCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-300">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-lg">
          {icon}
        </div>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{trend}</p>
    </div>
  );
}

export default StatsCard;