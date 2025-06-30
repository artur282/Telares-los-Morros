import { motion } from "framer-motion";
import { forwardRef, useState } from "react";
import { cn } from "../../lib/utils";

const Input = forwardRef(({ 
  className, 
  type = "text",
  label,
  error,
  animated = true,
  icon: Icon,
  ...props 
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputVariants = {
    initial: { scale: 1 },
    focus: { 
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const labelVariants = {
    initial: { y: 0, scale: 1, color: "#9CA3AF" },
    focus: { 
      y: -20, 
      scale: 0.85, 
      color: "#4CAF50",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const errorVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative w-full">
      {label && (
        <motion.label
          className={cn(
            "absolute left-3 top-3 text-sm font-medium pointer-events-none z-10",
            isFocused || props.value ? "text-primary-600" : "text-gray-500"
          )}
          variants={animated ? labelVariants : {}}
          initial={animated ? "initial" : false}
          animate={animated && (isFocused || props.value) ? "focus" : "initial"}
        >
          {label}
        </motion.label>
      )}
      
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
        )}
        
        <motion.input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            label && "pt-6 pb-2",
            Icon && "pl-10",
            error && "border-destructive focus-visible:ring-destructive",
            className
          )}
          ref={ref}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          variants={animated ? inputVariants : {}}
          initial={animated ? "initial" : false}
          whileFocus={animated ? "focus" : false}
          {...props}
        />
      </div>
      
      {error && (
        <motion.p
          className="text-sm text-destructive mt-1"
          variants={animated ? errorVariants : {}}
          initial={animated ? "initial" : false}
          animate={animated ? "animate" : false}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
