// import React, { memo } from 'react';

// const Loading = memo(() => {
//   return (
//     <div className="flex justify-center items-center h-screen w-screen bg-black text-white">
//       <div
//         aria-label="Loading..."
//         role="status"
//         className="flex flex-col items-center space-y-8"
//       >
//         {/* Neon Black & White Layered Spinner */}
//         <div className="relative w-10 h-10">
//           <div className="absolute inset-0 border-4 border-white border-t-transparent rounded-full animate-spin shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
//           <div className="absolute inset-0 border-4 border-gray-400 border-b-transparent rounded-full animate-spin-slow shadow-[0_0_20px_rgba(255,255,255,0.6)]"></div>
//           <div className="absolute inset-0 border-2 border-white border-l-transparent rounded-full animate-spin-fast shadow-[0_0_25px_rgba(255,255,255,0.4)]"></div>
//         </div>

//         {/* Animated Loading Text with neon fading dots */}
//         <div className="flex space-x-2 text-xl font-semibold tracking-wider text-white">
//           <span className="animate-pulse-neon">Loading</span>
//           <span className="animate-bounce-neon delay-0">.</span>
//           <span className="animate-bounce-neon delay-200">.</span>
//           <span className="animate-bounce-neon delay-400">.</span>
//         </div>
//       </div>

//       {/* Tailwind Custom Animations */}
//       <style jsx="true">{`
//         @keyframes spin-slow {
//           0% {
//             transform: rotate(360deg);
//           }
//           100% {
//             transform: rotate(0deg);
//           }
//         }
//         @keyframes spin-fast {
//           0% {
//             transform: rotate(0deg);
//           }
//           100% {
//             transform: rotate(360deg);
//           }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 3s linear infinite;
//         }
//         .animate-spin-fast {
//           animation: spin-fast 1.5s linear infinite;
//         }

//         @keyframes pulse-neon {
//           0%,
//           100% {
//             text-shadow:
//               0 0 5px #fff,
//               0 0 10px #fff,
//               0 0 20px #fff;
//             opacity: 0.8;
//           }
//           50% {
//             text-shadow:
//               0 0 10px #fff,
//               0 0 20px #fff,
//               0 0 30px #fff;
//             opacity: 1;
//           }
//         }
//         .animate-pulse-neon {
//           animation: pulse-neon 1.5s infinite;
//         }

//         @keyframes bounce-neon {
//           0%,
//           80%,
//           100% {
//             transform: scale(0);
//             opacity: 0.2;
//             text-shadow: 0 0 5px #fff;
//           }
//           40% {
//             transform: scale(1);
//             opacity: 1;
//             text-shadow:
//               0 0 10px #fff,
//               0 0 20px #fff;
//           }
//         }
//         .animate-bounce-neon {
//           animation: bounce-neon 1s infinite;
//         }
//         .delay-0 {
//           animation-delay: 0s;
//         }
//         .delay-200 {
//           animation-delay: 0.2s;
//         }
//         .delay-400 {
//           animation-delay: 0.4s;
//         }
//       `}</style>
//     </div>
//   );
// });

// export default Loading;

import React, { memo } from 'react';

const Loading = memo(() => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-black text-white">
      <div
        aria-label="Loading..."
        role="status"
        className="flex flex-col items-center space-y-10"
      >
        {/* Music Equalizer Animation */}
        <div className="flex items-end space-x-2">
          <span className="eq-bar bar1"></span>
          <span className="eq-bar bar2"></span>
          <span className="eq-bar bar3"></span>
          <span className="eq-bar bar4"></span>
          <span className="eq-bar bar5"></span>
          <span className="eq-bar bar6"></span>
          <span className="eq-bar bar7"></span>
        </div>

        {/* Loading text */}
        <div className="flex space-x-2 text-xl font-semibold tracking-wider text-white">
          <span className="animate-pulse-neon">Loading</span>
          <span className="animate-bounce-neon delay-0">.</span>
          <span className="animate-bounce-neon delay-200">.</span>
          <span className="animate-bounce-neon delay-400">.</span>
        </div>
      </div>

      <style jsx="true">{`
        /* Equalizer bars */
        .eq-bar {
          display: inline-block;
          width: 6px;
          background: white;
          border-radius: 3px;
          animation: eqAnim 1.5s infinite cubic-bezier(0.2, 0.7, 0.8, 1.1);
          transform-origin: bottom;
        }

        .bar1 {
          height: 15px;
          animation-delay: 0s;
        }
        .bar2 {
          height: 25px;
          animation-delay: 0.15s;
        }
        .bar3 {
          height: 30px;
          animation-delay: 0.3s;
        }
        .bar4 {
          height: 35px;
          animation-delay: 0.45s;
        }
        .bar5 {
          height: 30px;
          animation-delay: 0.6s;
        }
        .bar6 {
          height: 25px;
          animation-delay: 0.75s;
        }
        .bar7 {
          height: 15px;
          animation-delay: 0.9s;
        }

        @keyframes eqAnim {
          0%,
          100% {
            transform: scaleY(0.2);
            opacity: 0.3;
            box-shadow: 0 0 2px rgba(255, 255, 255, 0.5);
          }
          25% {
            transform: scaleY(0.7);
            opacity: 0.8;
          }
          50% {
            transform: scaleY(1);
            opacity: 1;
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
          }
        }

        /* Neon loading text animations stay same */
        @keyframes pulse-neon {
          0%,
          100% {
            text-shadow:
              0 0 5px #fff,
              0 0 10px #fff,
              0 0 20px #fff;
            opacity: 0.8;
          }
          50% {
            text-shadow:
              0 0 10px #fff,
              0 0 20px #fff,
              0 0 30px #fff;
            opacity: 1;
          }
        }
        .animate-pulse-neon {
          animation: pulse-neon 1.5s infinite;
        }

        @keyframes bounce-neon {
          0%,
          80%,
          100% {
            transform: scale(0);
            opacity: 0.2;
            text-shadow: 0 0 5px #fff;
          }
          40% {
            transform: scale(1);
            opacity: 1;
            text-shadow:
              0 0 10px #fff,
              0 0 20px #fff;
          }
        }
        .animate-bounce-neon {
          animation: bounce-neon 1s infinite;
        }

        .delay-0 {
          animation-delay: 0s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
});

export default Loading;
