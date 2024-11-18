import React from 'react';
import { Search, Users, MessageSquare, UserPlus, Filter } from 'lucide-react';
import MemberCard from '../components/community/MemberCard';
import GroupCard from '../components/community/GroupCard';
import CommunityTabs from '../components/community/CommunityTabs';

const mockMembers = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Software Engineer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    skills: ['React', 'TypeScript', 'Node.js'],
    status: 'Mentor',
  },
  {
    id: 2,
    name: 'Michael Park',
    role: 'Product Designer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    skills: ['UI/UX', 'Figma', 'User Research'],
    status: 'Member',
  },
  {
    id: 3,
    name: 'Emma Wilson',
    role: 'Data Scientist',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    skills: ['Python', 'Machine Learning', 'Data Analysis'],
    status: 'Mentor',
  },
];

const mockGroups = [
  {
    id: 1,
    name: 'Web Development Guild',
    members: 128,
    description: 'A community of web developers sharing knowledge and best practices.',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    name: 'Design Think Tank',
    members: 95,
    description: 'Designers collaborating on projects and sharing insights.',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=300&fit=crop',
  },
];

function Community() {
  const [activeTab, setActiveTab] = React.useState('members');

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold">Community</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button className="btn-secondary">
            <Filter className="h-5 w-5 mr-2" />
            Filters
          </button>
        </div>
      </div>

      <CommunityTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 'members' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockMembers.map((member) => (
            <MemberCard key={member.id} {...member} />
          ))}
        </div>
      )}

      {activeTab === 'groups' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockGroups.map((group) => (
            <GroupCard key={group.id} {...group} />
          ))}
        </div>
      )}

      <div className="fixed bottom-8 right-8 space-y-4">
        <button className="btn-primary rounded-full p-4 shadow-lg flex items-center justify-center">
          <MessageSquare className="h-6 w-6" />
        </button>
        <button className="btn-primary rounded-full p-4 shadow-lg flex items-center justify-center">
          <UserPlus className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

export default Community;