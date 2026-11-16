import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .hover-target')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="hidden md:flex fixed top-0 left-0 pointer-events-none z-50 items-center justify-center text-sky-500 drop-shadow-sm"
      animate={{
        x: mousePos.x - (isHovering ? 20 : 12),
        y: mousePos.y - (isHovering ? 20 : 12),
        scale: isHovering ? 1.5 : 1,
        rotate: isHovering ? 72 : 0, 
      }}
      transition={{
        type: 'spring',
        stiffness: 350,
        damping: 22,
        mass: 0.5,
      }}
    >
      {/* Ikon Bintang SVG */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-sky-400 stroke-sky-600 stroke-[1.5]"
      >
        <path d="M12 2L14.85 8.65L22 9.25L16.55 13.95L18.2 21L12 17.25L5.8 21L7.45 13.95L2 9.25L9.15 8.65L12 2Z" />
      </svg>
    </motion.div>
  );
}