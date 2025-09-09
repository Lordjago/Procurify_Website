import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Animated 404 text */}
        <div className="relative mb-8">
          <h1 className="text-9xl font-bold text-gray-800 opacity-10">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800">Page Not Found</h2>
          </div>
        </div>
        
        {/* Error message */}
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Oops! The page you're looking for seems to have wandered off into the digital void.
        </p>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-md"
          >
            Go Back
          </button>
          <button 
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 bg-white text-indigo-600 border border-indigo-200 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
          >
            Return Home
          </button>
        </div>
        
        {/* Decorative elements */}
        <div className="mt-15 text-gray-400">
          <svg 
            className="w-24 h-24 mx-auto animate-bounce" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
