import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Plus, Target, Trophy, TrendingUp } from 'lucide-react';
import GoalCard from '../components/dashboard/GoalCard';
import ProgressChart from '../components/dashboard/ProgressChart';
import StatsCard from '../components/dashboard/StatsCard';

const mockData = {
  progress: [
    { date: 'Mon', progress: 65 },
    { date: 'Tue', progress: 70 },
    { date: 'Wed', progress: 68 },
    { date: 'Thu', progress: 72 },
    { date: 'Fri', progress: 75 },
    { date: 'Sat', progress: 78 },
    { date: 'Sun', progress: 82 },
  ],
  goals: [
    { id: 1, title: 'Learn React Advanced Patterns', progress: 75, category: 'Learning' },
    { id: 2, title: 'Build 5 Portfolio Projects', progress: 40, category: 'Career' },
    { id: 3, title: 'Read 12 Books This Year', progress: 60, category: 'Personal' },
  ],
};

function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button className="btn-primary">
          <Plus className="h-5 w-5 mr-2" />
          Add New Goal
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Active Goals"
          value="7"
          icon={<Target className="h-6 w-6 text-purple-600" />}
          trend="+2 this month"
        />
        <StatsCard
          title="Completed Goals"
          value="12"
          icon={<Trophy className="h-6 w-6 text-purple-600" />}
          trend="+3 this month"
        />
        <StatsCard
          title="Current Streak"
          value="5 days"
          icon={<TrendingUp className="h-6 w-6 text-purple-600" />}
          trend="Best: 14 days"
        />
      </div>

      {/* Progress Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Weekly Progress</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData.progress}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="progress"
                stroke="#8b5cf6"
                strokeWidth={2}
                dot={{ fill: '#8b5cf6' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Goals Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Current Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockData.goals.map((goal) => (
            <GoalCard key={goal.id} {...goal} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;