import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/** Thanh tiến trình cuộn trang mảnh ở mép trên màn hình. */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[70] bg-gradient-to-r from-[#139091] via-emerald-400 to-amber-400"
    />
  );
};

export default ScrollProgress;

