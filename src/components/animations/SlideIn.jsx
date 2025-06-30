import { motion } from "framer-motion";

const SlideIn = ({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  direction = "left",
  distance = 100,
  className = "",
  stagger = false,
  staggerDelay = 0.1,
  ...props 
}) => {
  const directions = {
    left: { x: -distance },
    right: { x: distance },
    up: { y: -distance },
    down: { y: distance }
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

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay
      }
    }
  };

  const childVariants = {
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
        ease: "easeOut"
      }
    }
  };

  if (stagger) {
    return (
      <motion.div
        className={className}
        variants={containerVariants}
        initial="initial"
        animate="animate"
        {...props}
      >
        {Array.isArray(children) 
          ? children.map((child, index) => (
              <motion.div key={index} variants={childVariants}>
                {child}
              </motion.div>
            ))
          : <motion.div variants={childVariants}>{children}</motion.div>
        }
      </motion.div>
    );
  }

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

export default SlideIn;
