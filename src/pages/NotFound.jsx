import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { IconHome, IconArrowLeft } from "@tabler/icons-react";
import Logo from "../components/ui/Logo";
import Button from "../components/ui/Button";
import FadeIn from "../components/animations/FadeIn";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-light via-white to-primary-50 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-md mx-auto">
        <FadeIn>
          <Logo size="lg" showText={true} className="justify-center" />
        </FadeIn>

        <FadeIn delay={0.2}>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h1 
              className="text-8xl font-bold text-primary-600"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              404
            </motion.h1>
            
            <h2 className="text-2xl font-heading font-bold text-gray-900">
              Página no encontrada
            </h2>
            
            <p className="text-gray-600">
              Lo sentimos, la página que buscas no existe o ha sido movida.
            </p>
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={() => navigate(-1)}
                variant="outline"
                className="flex items-center space-x-2"
              >
                <IconArrowLeft className="h-4 w-4" />
                <span>Volver atrás</span>
              </Button>
              
              <Button
                onClick={() => navigate("/dashboard")}
                className="flex items-center space-x-2"
              >
                <IconHome className="h-4 w-4" />
                <span>Ir al Dashboard</span>
              </Button>
            </div>
            
            <motion.div
              className="text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p>¿Necesitas ayuda? Contacta a soporte técnico</p>
              <p className="font-medium text-primary-600">
                soporte@telareslosmorros.com
              </p>
            </motion.div>
          </div>
        </FadeIn>

        {/* Elementos decorativos */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-primary-100 opacity-20"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-12 h-12 rounded-full bg-accent-100 opacity-20"
            animate={{
              y: [0, 15, 0],
              x: [0, -8, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
