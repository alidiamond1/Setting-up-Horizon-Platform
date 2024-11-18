import React from 'react';
import { MessageSquare } from 'lucide-react';

interface MemberCardProps {
  name: string;
  role: string;
  avatar: string;
  skills: string[];
  status: string;
}

function MemberCard({ name, role, avatar, skills, status }: MemberCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{role}</p>
            <span className="inline-block mt-1 text-xs font-medium px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400">
              {status}
            </span>
          </div>
        </div>
        <button className="btn-secondary p-2">
          <MessageSquare className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Skills
        </h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MemberCard;