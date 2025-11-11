import React, { memo } from 'react';
import '../Modules/Skeleton.css';

const ChatLoadingSkeleton = memo(() => {
  const messages = [
    {
      width: 'w-3/4',
      height: 'h-10',
      align: 'self-start',
      color: 'bg-gray-700/50',
    },
    {
      width: 'w-2/3',
      height: 'h-12',
      align: 'self-end ml-auto',
      color: 'bg-gray-600/50',
    },
    {
      width: 'w-1/2',
      height: 'h-8',
      align: 'self-start',
      color: 'bg-gray-700/50',
    },
    {
      width: 'w-5/6',
      height: 'h-10',
      align: 'self-end ml-auto',
      color: 'bg-gray-600/50',
    },
    {
      width: 'w-2/3',
      height: 'h-8',
      align: 'self-start',
      color: 'bg-gray-700/50',
    },
  ];

  return (
    <div className="w-full h-full bg-black/90 backdrop-blur-xl rounded-3xl border border-white/10 flex flex-col overflow-hidden animate-fadeIn">
      {/* Header */}
      <div className="px-5 py-4 border-b border-white/10 flex items-center gap-4 animate-pulse">
        <div className="w-8 h-8 bg-gray-700/50 rounded-md animate-pulse"></div>
        <div className="h-5 w-1/3 bg-gray-700/50 rounded-md animate-pulse"></div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-5 flex flex-col gap-5 overflow-y-auto">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`${msg.height} ${msg.width} ${msg.align} ${msg.color} rounded-2xl relative overflow-hidden shimmerray`}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
          </div>
        ))}
      </div>

      {/* Typing Indicator */}
      <div className="flex items-center gap-4 p-4 border-t border-white/10">
        <div className="flex-1 h-12 bg-gray-800/60 rounded-2xl relative overflow-hidden">
          <div className="absolute bottom-3 left-4 flex gap-2">
            <span className="w-2.5 h-2.5 bg-gray-500 rounded-full animate-bounce delay-150"></span>
            <span className="w-2.5 h-2.5 bg-gray-500 rounded-full animate-bounce delay-300"></span>
            <span className="w-2.5 h-2.5 bg-gray-500 rounded-full animate-bounce delay-450"></span>
          </div>
        </div>
        <div className="w-12 h-12 bg-gray-700/50 rounded-2xl"></div>
      </div>
    </div>
  );
});

export default ChatLoadingSkeleton;
