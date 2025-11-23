// import React, { Suspense, lazy, useEffect, useState } from 'react';
// // import styles from '../Modules/bubble.module.css';
// import { motion } from 'framer-motion';
// import { aboutCards } from '../Data/AboutItems';
// const Loading = lazy(() => import('@/components/Loading'));
// // Lazy load all card components in a single chunk for better performance
// const { Card, CardContent, CardHeader, CardTitle, CardDescription } = {
//   Card: lazy(() =>
//     import('@/components/ui/card').then((m) => ({ default: m.Card }))
//   ),
//   CardContent: lazy(() =>
//     import('@/components/ui/card').then((m) => ({ default: m.CardContent }))
//   ),
//   CardHeader: lazy(() =>
//     import('@/components/ui/card').then((m) => ({ default: m.CardHeader }))
//   ),
//   CardTitle: lazy(() =>
//     import('@/components/ui/card').then((m) => ({ default: m.CardTitle }))
//   ),
//   CardDescription: lazy(() =>
//     import('@/components/ui/card').then((m) => ({ default: m.CardDescription }))
//   ),
// };

// const Button = lazy(() =>
//   import('@/components/ui/button').then((m) => ({ default: m.Button }))
// );

// export default function About() {
//   const [styles, setStyles] = useState(null);

//   useEffect(() => {
//     import('../Modules/bubble.module.css').then((s) => setStyles(s.default));
//   }, []);

//   const BubbleText = () => {
//     if (!styles) return null;
//     return (
//       <motion.h2
//         className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white p-4 sm:p-6 mb-8 md:mb-12 z-10 drop-shadow-lg"
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: 'easeOut' }}
//       >
//         {'About Us'.split('').map((char, idx) => (
//           <span className={styles.hoverText} key={idx}>
//             {char}
//           </span>
//         ))}
//       </motion.h2>
//     );
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: 'spring', stiffness: 100 },
//     },
//   };

//   return (
//     <div
//       className="relative bg-black text-white min-h-screen flex flex-col items-center justify-center
//                 px-4 sm:px-6 md:px-12 py-12
//                 mt-10 mx-4 sm:mx-6 md:mx-12 lg:mx-16
//                 overflow-hidden"
//     >
//       <BubbleText />

//       <motion.div
//         className="w-full max-w-7xl mx-auto flex flex-col items-center"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* <motion.div
//         className="my-6 md:my-12 w-full max-w-4xl"
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
//       >
//         <img
//           src="https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=2070&auto=format&fit=crop"
//           alt="Creative music production setup"
//           className="rounded-lg shadow-2xl w-full h-64 sm:h-80 md:h-96 object-cover"
//         />
//       </motion.div> */}
//         <motion.p
//           className="max-w-3xl text-center text-base sm:text-lg md:text-xl mb-16 leading-relaxed"
//           variants={itemVariants}
//         >
//           Welcome to our platform. We focus on creating immersive music and
//           beats using the latest production tools. Our mission is to deliver
//           high-quality, engaging, and unique sound experiences while leveraging
//           modern software and creative techniques.
//         </motion.p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
//           {aboutCards.map((card, idx) => (
//             <Suspense
//               key={idx}
//               fallback={
//                 <div>
//                   <Loading />
//                 </div>
//               }
//             >
//               <motion.div
//                 variants={itemVariants}
//                 whileHover={{ y: -8, scale: 1.03 }}
//                 transition={{ type: 'spring', stiffness: 300 }}
//                 className="h-full"
//               >
//                 <Card className="bg-black-900 border border-gray-700 h-full">
//                   <CardHeader>
//                     <CardTitle className="text-white text-xl">
//                       {card.title}
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <CardDescription className="text-gray-300">
//                       {card.description}
//                     </CardDescription>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Suspense>
//           ))}
//         </div>

//         <motion.div className="mt-16" variants={itemVariants}>
//           <Suspense
//             fallback={
//               <div>
//                 <Loading />
//               </div>
//             }
//           >
//             <a href="/contact">
//               <Button
//                 variant="outline"
//                 className="text-white bg-black border-white hover:bg-gray-800 hover:text-white transition-colors duration-300"
//               >
//                 Contact Us
//               </Button>
//             </a>
//           </Suspense>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }





// =========================
// ABOUT PAGE (PRODUCTION READY)
// =========================

import React, { Suspense, lazy, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { aboutCards } from "../Data/AboutItems";

// Lazy components (single-grouped chunks)
const Loading = lazy(() => import("@/components/Loading"));

const { Card, CardContent, CardHeader, CardTitle, CardDescription } = {
  Card: lazy(() =>
    import("@/components/ui/card").then((m) => ({ default: m.Card }))
  ),
  CardContent: lazy(() =>
    import("@/components/ui/card").then((m) => ({ default: m.CardContent }))
  ),
  CardHeader: lazy(() =>
    import("@/components/ui/card").then((m) => ({ default: m.CardHeader }))
  ),
  CardTitle: lazy(() =>
    import("@/components/ui/card").then((m) => ({ default: m.CardTitle }))
  ),
  CardDescription: lazy(() =>
    import("@/components/ui/card").then((m) => ({ default: m.CardDescription }))
  ),
};

const Button = lazy(() =>
  import("@/components/ui/button").then((m) => ({ default: m.Button }))
);

export default function About() {
  const [styles, setStyles] = useState(null);

  // Load CSS Module without blocking SSR / hydration
  useEffect(() => {
    import("../Modules/bubble.module.css").then((s) => {
      setStyles(s.default);
    });
  }, []);

  // =========================
  // BubbleText Component
  // =========================

  const BubbleText = () => {
    if (!styles) return null;

    return (
      <motion.h2
        className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white p-4 sm:p-6 mb-8 md:mb-12 z-10 drop-shadow-lg"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {"About Us".split("").map((char, idx) => (
          <span className={styles.hoverText} key={idx}>
            {char}
          </span>
        ))}
      </motion.h2>
    );
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div
      className="
      relative bg-black text-white min-h-screen flex flex-col items-center justify-center
      px-4 sm:px-6 md:px-12 py-12
      mt-10 mx-4 sm:mx-6 md:mx-12 lg:mx-16
      overflow-hidden
    "
    >
      <BubbleText />

      <motion.div
        className="w-full max-w-7xl mx-auto flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* COMMAND-OUT: ABOUT BANNER IMAGE */}
        {/* 
        <motion.div
          className="my-6 md:my-12 w-full max-w-4xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <img
            src="your-image-url"
            alt="Music setup"
            className="rounded-lg shadow-2xl w-full h-64 sm:h-80 md:h-96 object-cover"
          />
        </motion.div>
        */}

        <motion.p
          className="max-w-3xl text-center text-base sm:text-lg md:text-xl mb-16 leading-relaxed"
          variants={itemVariants}
        >
          Welcome to our platform. We focus on creating immersive music and
          beats using modern production tools. We aim to deliver high-quality,
          engaging, and unique sound experiences using creative workflows and
          advanced software.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {aboutCards.map((card, idx) => (
            <Suspense
              key={idx}
              fallback={
                <div>
                  <Loading />
                </div>
              }
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full"
              >
                <Card className="bg-black-900 border border-gray-700 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      {card.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </Suspense>
          ))}
        </div>

        <motion.div className="mt-16" variants={itemVariants}>
          <Suspense fallback={<Loading />}>
            <a href="/contact">
              <Button
                variant="outline"
                className="text-white bg-black border-white hover:bg-gray-800 transition-colors duration-300"
              >
                Contact Us
              </Button>
            </a>
          </Suspense>
        </motion.div>
      </motion.div>
    </div>
  );
}

