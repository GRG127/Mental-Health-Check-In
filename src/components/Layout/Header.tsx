import React from 'react';
import { Brain } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-soft">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Brain className="w-8 h-8 text-primary-500" />
          <h1 className="text-2xl font-bold text-gray-800">Mental Health Check-In</h1>
        </div>
        <p className="mt-2 text-gray-600">Take a moment to reflect on how you're feeling today.</p>
      </div>
    </header>
  );
};