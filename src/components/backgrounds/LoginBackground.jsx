import { motion } from "framer-motion";

const LoginBackground = ({ children }) => {
  // Patrones textiles sutiles
  const patterns = [
    { id: 1, x: "10%", y: "20%", delay: 0 },
    { id: 2, x: "80%", y: "15%", delay: 0.5 },
    { id: 3, x: "15%", y: "70%", delay: 1 },
    { id: 4, x: "85%", y: "75%", delay: 1.5 },
    { id: 5, x: "50%", y: "10%", delay: 2 },
    { id: 6, x: "25%", y: "45%", delay: 2.5 }
  ];

  const patternVariants = {
    initial: { 
      opacity: 0, 
      scale: 0.8,
      rotate: 0 
    },
    animate: { 
      opacity: 0.1, 
      scale: 1,
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-neutral-light via-white to-primary-50">
      {/* Patrones textiles de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        {patterns.map((pattern) => (
          <motion.div
            key={pattern.id}
            className="absolute"
            style={{ left: pattern.x, top: pattern.y }}
            variants={patternVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: pattern.delay }}
          >
            {/* Patrón de hilo textil */}
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              className="text-primary-300"
            >
              <defs>
                <pattern
                  id={`textile-${pattern.id}`}
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M0 10 L10 0 L20 10 L10 20 Z"
                    fill="currentColor"
                    opacity="0.3"
                  />
                  <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.5" />
                </pattern>
              </defs>
              <rect
                width="60"
                height="60"
                fill={`url(#textile-${pattern.id})`}
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Elementos flotantes decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary-100 opacity-20"
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-accent-100 opacity-20"
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 1.5 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full bg-accent-blue opacity-10"
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 2.5 }}
        />
      </div>

      {/* Gradiente sutil superpuesto */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/30 pointer-events-none" />

      {/* Contenido principal */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        {children}
      </div>

      {/* Elementos decorativos en las esquinas */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 opacity-5"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary-600">
          <path
            d="M50 10 L90 50 L50 90 L10 50 Z"
            fill="currentColor"
            opacity="0.3"
          />
          <circle cx="50" cy="50" r="20" fill="currentColor" opacity="0.2" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-0 right-0 w-40 h-40 opacity-5"
        initial={{ rotate: 360 }}
        animate={{ rotate: 0 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-accent-600">
          <path
            d="M20 20 L80 20 L80 80 L20 80 Z"
            fill="currentColor"
            opacity="0.3"
          />
          <path
            d="M30 30 L70 30 L70 70 L30 70 Z"
            fill="currentColor"
            opacity="0.2"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default LoginBackground;
