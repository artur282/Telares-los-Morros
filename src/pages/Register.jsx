import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Logo from "../components/ui/Logo";
import RegisterForm from "../components/forms/RegisterForm";
import LoginBackground from "../components/backgrounds/LoginBackground";
import FadeIn from "../components/animations/FadeIn";

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (formData) => {
    setIsLoading(true);

    // Simular llamada a API
    try {
      console.log("Datos de registro:", formData);

      // Simular delay de red
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Aquí iría la lógica real de registro
      alert(
        "¡Registro exitoso! Bienvenido a Telares Los Morros. Redirigiendo al dashboard..."
      );

      // Navegar al dashboard después de un breve delay
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (error) {
      console.error("Error en registro:", error);
      alert("Error en el registro. Intenta nuevamente.");
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
            <Logo size="lg" showText={true} className="justify-center" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h1 className="text-2xl font-heading font-bold text-primary-800 mb-2">
                Únete a Nuestro Equipo
              </h1>
              <p className="text-base text-gray-600">
                Crea tu cuenta en el sistema cloud
              </p>
              <div className="flex items-center justify-center space-x-2 mt-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-sm text-gray-500 font-medium">
                  Acceso seguro y confiable
                </span>
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </FadeIn>

        {/* Formulario de registro */}
        <RegisterForm onSubmit={handleRegister} isLoading={isLoading} />

        {/* Información adicional */}
        <FadeIn delay={0.6}>
          <motion.div
            className="text-center space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">
                Beneficios del Sistema Cloud
              </h3>
              <div className="grid grid-cols-1 gap-2 text-xs text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span>Acceso desde cualquier sucursal</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Sincronización en tiempo real</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span>Respaldos automáticos</span>
                </div>
              </div>
            </div>

            <div className="text-xs text-gray-400">
              <p>© 2024 Telares Los Morros. Todos los derechos reservados.</p>
              <p className="mt-1">
                Al registrarte, aceptas nuestros términos y condiciones
              </p>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </LoginBackground>
  );
};

export default Register;
