import React from 'react'

function CommingSoon() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">Coming Soon</h1>
        <p className="text-lg text-gray-400 mb-8">
          We are working hard to launch this feature. Stay tuned!
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition-all duration-200 ease-in-out">
          Notify Me
        </button>
      </div>
    </div>
  );
}

export default CommingSoon
