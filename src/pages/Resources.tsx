import React from 'react';
import { Search, BookOpen, Play, Award, Filter } from 'lucide-react';

interface Resource {
  id: number;
  title: string;
  description: string;
  type: 'article' | 'video' | 'course';
  category: string;
  image: string;
  duration?: string;
  author: string;
}

const mockResources: Resource[] = [
  {
    id: 1,
    title: 'Mastering Personal Development',
    description: 'Learn the fundamental principles of continuous self-improvement and growth.',
    type: 'course',
    category: 'Personal Growth',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop',
    duration: '6 weeks',
    author: 'Dr. Sarah Johnson',
  },
  {
    id: 2,
    title: 'Building Effective Communication Skills',
    description: 'Essential techniques for better interpersonal communication in professional settings.',
    type: 'video',
    category: 'Communication',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop',
    duration: '45 min',
    author: 'Mark Thompson',
  },
  {
    id: 3,
    title: 'The Art of Goal Setting',
    description: 'Learn how to set and achieve meaningful personal and professional goals.',
    type: 'article',
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
    author: 'Emily Chen',
  },
];

function ResourceCard({ resource }: { resource: Resource }) {
  const typeIcon = {
    article: <BookOpen className="h-5 w-5" />,
    video: <Play className="h-5 w-5" />,
    course: <Award className="h-5 w-5" />,
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="h-48 relative">
        <img
          src={resource.image}
          alt={resource.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-gray-900/90 text-gray-700 dark:text-gray-300">
            {typeIcon[resource.type]}
            <span className="ml-1">{resource.type}</span>
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
            {resource.category}
          </span>
          {resource.duration && (
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {resource.duration}
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {resource.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            By {resource.author}
          </span>
          <button className="btn-primary text-sm">
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
}

function Resources() {
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const categories = ['All', 'Personal Growth', 'Communication', 'Productivity', 'Leadership'];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold">Learning Resources</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search resources..."
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

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category.toLowerCase())}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category.toLowerCase()
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockResources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
}

export default Resources;