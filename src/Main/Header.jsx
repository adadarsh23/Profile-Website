// import React, { lazy, Suspense } from 'react';
// const Loading = lazy(() => import('../components/Loading'));
// const Hyperspeed = lazy(() => import('../components/Hyperspeed'));
// const BlurText = lazy(() => import('../components/BlurText'));
// // const PrismaticBurst = lazy(() => import("../components/PrismaticBurst"));

// export default function Header({ onAnimationComplete }) {
// const handleAnimationComplete = () => {
//   console.log('Animation completed!');
//   onAnimationComplete?.();
// };

//   return (
//     <section className="relative w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center px-4 sm:px-6 md:px-12">
//       {/* Interactive Prismatic Burst */}
//       <div className="absolute inset-0 w-full h-full pointer-events-none">
//         <Suspense
//           fallback={
//             <div>
//               <Loading />
//             </div>
//           }
//         >
//           <Hyperspeed
//             effectOptions={{
//               onSpeedUp: () => {},
//               onSlowDown: () => {},
//               distortion: 'deepDistortion',
//               length: 400,
//               roadWidth: 18,
//               islandWidth: 2,
//               lanesPerRoad: 3,
//               fov: 90,
//               fovSpeedUp: 150,
//               speedUp: 2,
//               carLightsFade: 0.4,
//               totalSideLightSticks: 50,
//               lightPairsPerRoadWay: 50,
//               shoulderLinesWidthPercentage: 0.05,
//               brokenLinesWidthPercentage: 0.1,
//               brokenLinesLengthPercentage: 0.5,
//               lightStickWidth: [0.12, 0.5],
//               lightStickHeight: [1.3, 1.7],
//               movingAwaySpeed: [60, 80],
//               movingCloserSpeed: [-120, -160],
//               carLightsLength: [400 * 0.05, 400 * 0.15],
//               carLightsRadius: [0.05, 0.14],
//               carWidthPercentage: [0.3, 0.5],
//               carShiftX: [-0.2, 0.2],
//               carFloorSeparation: [0.05, 1],
//               colors: {
//                 roadColor: 0x080808,
//                 islandColor: 0x0a0a0a,
//                 background: 0x000000,
//                 shoulderLines: 0x131318,
//                 brokenLines: 0x131318,
//                 leftCars: [0xff322f, 0xa33010, 0xa81508],
//                 rightCars: [0xfdfdf0, 0xf3dea0, 0xe2bb88],
//                 sticks: 0xfdfdf0,
//               },
//             }}
//           />
//         </Suspense>
//       </div>

//       {/* Centered Animated Text */}
//       <div className="relative z-10 text-center flex flex-col items-center justify-center ">
//         <Suspense
//           fallback={
//             <div>
//               <Loading />
//             </div>
//           }
//         >
//           <BlurText
//             text="Welcome To Ad Adarsh Profile"
//             delay={100}
//             animateBy="words"
//             direction="top"
//             onAnimationComplete={handleAnimationComplete}
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center mb-6 sm:mb-8 flex flex-wrap justify-center items-center space-x-1 sm:space-x-2 text-white"
//           />
//         </Suspense>

//         <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 max-w-xl">
//           Explore my projects, beats, and music production works.
//         </p>
//       </div>
//     </section>
//   );
// }



import React, { lazy, Suspense } from 'react';
import { motion } from "framer-motion";
import { useState, useEffect } from "react"
import '../font/Striper_Complete/Fonts/WEB/css/striper.css';
import Loading from '../components/Loading';
//import BlurText from '../components/BlurText';
// const BlurText = lazy(() => import('../components/BlurText'));
const Vortex = lazy(() => import('../components/Vortex'));

// const Header = memo(function Header({ onAnimationComplete }) {
//   const handleAnimationComplete = () => {
//     console.log('Animation completed!');
//     onAnimationComplete?.();
//   };
function Header() {
  const words = [
    "Welcome To Âd Adarsh Profile",
    "Crafting Dark Atmospheres",
    "Producing Cinematic Beats",
    "Where Sound Meets Emotion",
    "Building Stories Through Music",
    "Creating Sonic Worlds",
    "Rhythms That Hit Deep",
    "Mixing Raw Energy With Art",
    "Sound Designed With Intent",
    "Echoes Born From Silence",
    "Beats Forged In Shadows",
    "Music With A Pulse Of Its Own",
    "Bass That Cuts Through The Dark",
    "Every Sound Has A Story",
    "Emotion Engineered In Waves",
    "From Stillness To Impact",
    "Creating Depth Through Noise",
    "Dark Tones. Clean Edges.",
    "When Vibes Turn Into Vision"
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    if (isTyping && !isDeleting) {
      // Typing forward
      if (displayedText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        // Wait before deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else if (isDeleting) {
      // Deleting
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        // Move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }
  }, [displayedText, currentWordIndex, isTyping, isDeleting, words]);
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center px-4 sm:px-6 md:px-12">
      <Vortex
        backgroundColor="black"
        rangeY={1000}
        particleCount={1000}
        baseHue={1000}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3, ease: "easeInOut" }
          }}
          className="text-white text-2xl md:text-6xl font-bold text-center relative min-h-[80px] md:min-h-[120px] flex items-center justify-center striper-regular "
        >
          <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            {displayedText}
          </span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="inline-block ml-1 text-white"
          >
            |
          </motion.span>

          {/* Animated underline */}
          {/* <motion.div
            animate={{
              scaleX: displayedText.length > 0 ? 1 : 0,
              opacity: displayedText.length > 0 ? 1 : 0
            }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-400 via-white to-gray-400 origin-left"
          /> */}
        </motion.h2>
        {/* <motion.h2
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut"
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          className="text-white text-2xl md:text-6xl font-bold text-center striper-regular"
        >
          Welcome To Âd Adarsh Profile
        </motion.h2> */}
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center striper-regular">
          Explore my projects, beats, and music production works.
        </p>
        {/* <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Order now
          </button>
          <button className="px-4 py-2  text-white ">Watch trailer</button>
        </div> */}
      </Vortex>
    </div>
  );
}

export default Header;
