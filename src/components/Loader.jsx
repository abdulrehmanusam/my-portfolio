// import React, { useEffect, useState } from 'react';
// import './Loader.css';
// import { motion, AnimatePresence } from 'framer-motion';

// const Loader = () => {
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoaded(true), 3000); // 3 sec loader
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <AnimatePresence>
//       {!loaded && (
//         <motion.div
//           className="loader-container"
//           initial={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.div
//             className="loader-circle"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 1, ease: 'easeOut' }}
//           />

//           <motion.h1
//             className="loader-text"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.2, duration: 1 }}
//           >
//             Welcome, Abdul Rehman
//           </motion.h1>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Loader;
