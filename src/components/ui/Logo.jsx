import { motion } from "framer-motion";

const Logo = ({ 
  size = "md", 
  showText = true, 
  className = "",
  animated = true 
}) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12", 
    lg: "h-16 w-16",
    xl: "h-24 w-24"
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl", 
    xl: "text-3xl"
  };

  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    initial: { x: -20, opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  const LogoComponent = () => (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} relative`}
        variants={animated ? logoVariants : {}}
        initial={animated ? "initial" : false}
        animate={animated ? "animate" : false}
        whileHover={animated ? "hover" : false}
      >
        <img 
          src="/logo.jpeg" 
          alt="Telares Los Morros"
          className="w-full h-full object-contain rounded-lg shadow-sm"
        />
      </motion.div>
      
      {showText && (
        <motion.div
          className="flex flex-col"
          variants={animated ? textVariants : {}}
          initial={animated ? "initial" : false}
          animate={animated ? "animate" : false}
        >
          <span className={`font-heading font-bold text-primary-800 ${textSizeClasses[size]} leading-tight`}>
            Telares
          </span>
          <span className={`font-heading font-semibold text-primary-600 ${textSizeClasses[size]} leading-tight -mt-1`}>
            Los Morros
          </span>
        </motion.div>
      )}
    </div>
  );

  return <LogoComponent />;
};

export default Logo;
