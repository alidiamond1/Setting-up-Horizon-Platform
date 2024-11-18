import React from 'react';
import { ArrowRight, Target, Users, BookOpen, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
            alt="People collaborating"
            className="w-full h-full object-cover opacity-10 dark:opacity-5"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Elevate Your Personal Growth Journey
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Connect, Learn, and Grow with a Community of Like-minded Individuals
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:opacity-90 transition-opacity"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <Target className="h-12 w-12 text-purple-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Goal Tracking</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Set meaningful goals and track your progress with interactive tools and visualizations.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <Users className="h-12 w-12 text-pink-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Community Network</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Connect with mentors and peers who share your interests and aspirations.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <BookOpen className="h-12 w-12 text-purple-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Learning Resources</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Access curated content and workshops to accelerate your personal development.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white max-w-5xl mx-auto">
        <Sparkles className="h-16 w-16 mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Journey?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of individuals who are already achieving their goals and growing together.
        </p>
        <Link
          to="/dashboard"
          className="inline-flex items-center px-8 py-3 text-lg font-medium bg-white text-purple-600 rounded-full hover:bg-opacity-90 transition-opacity"
        >
          Start Your Journey
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </section>
    </div>
  );
}

export default Home;