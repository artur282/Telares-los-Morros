import { motion } from "framer-motion";
import { IconCheck, IconX } from "@tabler/icons-react";

const PasswordStrength = ({ password }) => {
  const requirements = [
    {
      id: "length",
      label: "Al menos 8 caracteres",
      test: (pwd) => pwd.length >= 8
    },
    {
      id: "uppercase",
      label: "Una letra mayúscula",
      test: (pwd) => /[A-Z]/.test(pwd)
    },
    {
      id: "lowercase",
      label: "Una letra minúscula",
      test: (pwd) => /[a-z]/.test(pwd)
    },
    {
      id: "number",
      label: "Un número",
      test: (pwd) => /\d/.test(pwd)
    },
    {
      id: "special",
      label: "Un carácter especial",
      test: (pwd) => /[!@#$%^&*(),.?":{}|<>]/.test(pwd)
    }
  ];

  const getStrengthLevel = () => {
    const passedRequirements = requirements.filter(req => req.test(password)).length;
    
    if (passedRequirements === 0) return { level: 0, label: "", color: "" };
    if (passedRequirements <= 2) return { level: 1, label: "Débil", color: "bg-red-500" };
    if (passedRequirements <= 3) return { level: 2, label: "Regular", color: "bg-yellow-500" };
    if (passedRequirements <= 4) return { level: 3, label: "Buena", color: "bg-blue-500" };
    return { level: 4, label: "Excelente", color: "bg-green-500" };
  };

  const strength = getStrengthLevel();

  const barVariants = {
    initial: { width: 0 },
    animate: { 
      width: `${(strength.level / 4) * 100}%`,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const requirementVariants = {
    initial: { opacity: 0, x: -10 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  if (!password) return null;

  return (
    <motion.div
      className="mt-3 space-y-3"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Barra de fortaleza */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">
            Fortaleza de la contraseña
          </span>
          {strength.label && (
            <motion.span
              className={`text-sm font-medium ${
                strength.level === 1 ? "text-red-600" :
                strength.level === 2 ? "text-yellow-600" :
                strength.level === 3 ? "text-blue-600" :
                "text-green-600"
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              {strength.label}
            </motion.span>
          )}
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <motion.div
            className={`h-full rounded-full ${strength.color}`}
            variants={barVariants}
            initial="initial"
            animate="animate"
          />
        </div>
      </div>

      {/* Lista de requisitos */}
      <div className="space-y-2">
        <span className="text-sm font-medium text-gray-700">
          Requisitos:
        </span>
        <div className="space-y-1">
          {requirements.map((requirement, index) => {
            const isValid = requirement.test(password);
            
            return (
              <motion.div
                key={requirement.id}
                className="flex items-center space-x-2"
                variants={requirementVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: index * 0.05 }}
              >
                <motion.div
                  className={`flex items-center justify-center w-4 h-4 rounded-full ${
                    isValid ? "bg-green-500" : "bg-gray-300"
                  }`}
                  animate={{
                    scale: isValid ? [1, 1.2, 1] : 1,
                    backgroundColor: isValid ? "#10B981" : "#D1D5DB"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {isValid ? (
                    <IconCheck className="w-3 h-3 text-white" />
                  ) : (
                    <IconX className="w-3 h-3 text-gray-500" />
                  )}
                </motion.div>
                <span
                  className={`text-sm ${
                    isValid ? "text-green-700" : "text-gray-600"
                  }`}
                >
                  {requirement.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default PasswordStrength;
