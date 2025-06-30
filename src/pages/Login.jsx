import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Logo from "../components/ui/Logo";
import LoginForm from "../components/forms/LoginForm";
import LoginBackground from "../components/backgrounds/LoginBackground";
import FadeIn from "../components/animations/FadeIn";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (formData) => {
    setIsLoading(true);

    // Simular llamada a API
    try {
      console.log("Datos de login:", formData);

      // Simular delay de red
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Aquí iría la lógica real de autenticación
      alert("Login exitoso! Redirigiendo al dashboard...");

      // Navegar al dashboard después de un breve delay
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      console.error("Error en login:", error);
      alert("Error en el login. Intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginBackground>
      <div className="w-full max-w-md mx-auto space-y-8">
        {/* Logo y título principal */}
        <FadeIn delay={0}>
          <div className="text-center space-y-4">
            <Logo size="xl" showText={true} className="justify-center" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h1 className="text-3xl font-heading font-bold text-primary-800 mb-2">
                Bienvenido
              </h1>
              <p className="text-lg text-gray-600">
                Sistema de Red de Datos Cloud
              </p>
              <div className="flex items-center justify-center space-x-2 mt-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-sm text-gray-500 font-medium">
                  Villa de Cura • San Juan de los Morros • Maracay
                </span>
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </FadeIn>

        {/* Formulario de login */}
        <LoginForm onSubmit={handleLogin} isLoading={isLoading} />

        {/* Información adicional */}
        <FadeIn delay={0.6}>
          <motion.div
            className="text-center space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Sistema Activo</span>
              </span>
              <span>•</span>
              <span>Conexión Segura</span>
              <span>•</span>
              <span>24/7 Disponible</span>
            </div>

            <div className="text-xs text-gray-400 mt-4">
              <p>© 2024 Telares Los Morros. Todos los derechos reservados.</p>
              <p className="mt-1">
                Sistema de gestión empresarial bajo entorno cloud
              </p>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </LoginBackground>
  );
};

export default Login;
