import { motion } from "framer-motion";
import Logo from "./Logo";

const Loading = ({ message = "Cargando...", fullScreen = false }) => {
  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const dotsVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  const dotVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const containerClasses = fullScreen 
    ? "fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center"
    : "flex items-center justify-center p-8";

  return (
    <div className={containerClasses}>
      <div className="text-center space-y-6">
        {/* Logo animado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Logo size="lg" showText={true} className="justify-center" />
        </motion.div>

        {/* Spinner */}
        <motion.div
          className="relative mx-auto"
          style={{ width: 60, height: 60 }}
        >
          {/* Círculo exterior */}
          <motion.div
            className="absolute inset-0 border-4 border-primary-200 rounded-full"
            variants={spinnerVariants}
            animate="animate"
          />
          
          {/* Círculo interior giratorio */}
          <motion.div
            className="absolute inset-0 border-4 border-transparent border-t-primary-600 rounded-full"
            variants={spinnerVariants}
            animate="animate"
          />
          
          {/* Punto central */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Mensaje de carga */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-lg font-medium text-gray-900">{message}</p>
          
          {/* Puntos animados */}
          <motion.div
            className="flex items-center justify-center space-x-1"
            variants={dotsVariants}
            animate="animate"
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 bg-primary-500 rounded-full"
                variants={dotVariants}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Información adicional */}
        <motion.div
          className="text-sm text-gray-500 space-y-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p>Sistema de Red Cloud</p>
          <p>Telares Los Morros</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;
