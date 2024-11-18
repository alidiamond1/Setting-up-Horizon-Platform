import React from 'react';
import { Users, Layout } from 'lucide-react';

interface CommunityTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

function CommunityTabs({ activeTab, onTabChange }: CommunityTabsProps) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <nav className="flex space-x-8">
        <button
          onClick={() => onTabChange('members')}
          className={`flex items-center px-1 py-4 text-sm font-medium border-b-2 ${
            activeTab === 'members'
              ? 'border-purple-500 text-purple-600 dark:text-purple-400'
              : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
          }`}
        >
          <Users className="h-5 w-5 mr-2" />
          Members
        </button>
        <button
          onClick={() => onTabChange('groups')}
          className={`flex items-center px-1 py-4 text-sm font-medium border-b-2 ${
            activeTab === 'groups'
              ? 'border-purple-500 text-purple-600 dark:text-purple-400'
              : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
          }`}
        >
          <Layout className="h-5 w-5 mr-2" />
          Groups
        </button>
      </nav>
    </div>
  );
}

export default CommunityTabs;