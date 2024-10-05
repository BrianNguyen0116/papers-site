"use client"

import { motion } from 'framer-motion';

const Fade = ({ delay = 0, children, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay,
          duration: 1,
          ease: "easeInOut",
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Fade;