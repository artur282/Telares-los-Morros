import { motion } from "framer-motion";

const FadeIn = ({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  direction = "up",
  distance = 30,
  className = "",
  ...props 
}) => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance }
  };

  const variants = {
    initial: {
      opacity: 0,
      ...directions[direction]
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="initial"
      animate="animate"
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
