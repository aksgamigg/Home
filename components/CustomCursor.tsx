import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a') || target.closest('button') || target.closest('.interactive');
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateHoverState);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHoverState);
    };
  }, []);

  return (
    <>
      {/* Small Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999]"
        animate={{ x: position.x - 4, y: position.y - 4 }}
        transition={{ type: "tween", ease: "backOut", duration: 0 }}
      />
      {/* Large Outline */}
      <motion.div
        className="fixed top-0 left-0 border border-accent rounded-full pointer-events-none z-[9998]"
        animate={{
          x: position.x - (isHovering ? 30 : 20),
          y: position.y - (isHovering ? 30 : 20),
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          backgroundColor: isHovering ? 'rgba(78, 205, 196, 0.1)' : 'transparent',
          borderColor: isHovering ? 'transparent' : '#4ecdc4'
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      />
    </>
  );
};

export default CustomCursor;