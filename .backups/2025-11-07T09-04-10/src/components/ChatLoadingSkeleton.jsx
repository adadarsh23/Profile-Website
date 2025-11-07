import React, { memo } from 'react';

const ChatLoadingSkeleton = memo(() => (
  <div className="w-full h-full bg-black/90 backdrop-blur-xl rounded-xl border border-white/10 flex flex-col animate-pulse">
    {/* Header */}
    <div className="px-4 py-3 border-b border-white/10 flex items-center gap-2">
      <div className="w-6 h-6 bg-gray-700/50 rounded-md"></div>
      <div className="h-5 w-1/3 bg-gray-700/50 rounded-md"></div>
    </div>

    {/* Messages */}
    <div className="flex-1 p-4 space-y-4">
      <div className="h-10 w-3/4 bg-gray-700/50 rounded-lg self-start"></div>
      <div className="h-12 w-2/3 bg-gray-600/50 rounded-lg self-end ml-auto"></div>
      <div className="h-8 w-1/2 bg-gray-700/50 rounded-lg self-start"></div>
    </div>

    {/* Input */}
    <div className="flex items-center gap-2 p-3 border-t border-white/10">
      <div className="flex-1 h-10 bg-gray-800/60 rounded-lg"></div>
      <div className="w-10 h-10 bg-gray-700/50 rounded-lg"></div>
    </div>
  </div>
));

export default ChatLoadingSkeleton;
