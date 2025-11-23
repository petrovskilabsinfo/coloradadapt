import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <div className="relative group">
      <button
        onClick={onToggle}
        className={`relative w-16 h-8 rounded-full transition-all duration-500 transform hover:scale-110 ${
          isDark 
            ? 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/30' 
            : 'bg-gradient-to-r from-orange-400 to-yellow-400 shadow-lg shadow-orange-500/30'
        }`}
      >
        <div
          className={`absolute top-1 w-6 h-6 rounded-full transition-all duration-500 transform flex items-center justify-center ${
            isDark 
              ? 'left-1 bg-slate-800 shadow-lg' 
              : 'left-9 bg-white shadow-lg'
          }`}
        >
          {isDark ? (
            <Moon className="w-3 h-3 text-purple-400" />
          ) : (
            <Sun className="w-3 h-3 text-orange-500" />
          )}
        </div>
        
        {/* Glow effect */}
        <div className={`absolute inset-0 rounded-full blur-md opacity-50 ${
          isDark 
            ? 'bg-gradient-to-r from-purple-600 to-blue-600' 
            : 'bg-gradient-to-r from-orange-400 to-yellow-400'
        }`}></div>
      </button>
      
      {/* Tooltip */}
      <div className={`absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-md text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
        isDark 
          ? 'bg-slate-800 text-white border border-purple-500/30' 
          : 'bg-white text-gray-900 border border-purple-300/40 shadow-lg'
      }`}>
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </div>
    </div>
  );
};