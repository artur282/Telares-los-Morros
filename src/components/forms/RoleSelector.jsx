import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronDown, IconUser, IconUserCheck, IconCrown, IconSettings } from "@tabler/icons-react";
import { cn } from "../../lib/utils";

const RoleSelector = ({ 
  value, 
  onChange, 
  error, 
  label = "Cargo/Rol",
  placeholder = "Selecciona tu cargo" 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const roles = [
    {
      id: "operario",
      name: "Operario",
      description: "Personal de producción",
      icon: IconUser,
      color: "bg-blue-500"
    },
    {
      id: "supervisor",
      name: "Supervisor",
      description: "Supervisión de área",
      icon: IconUserCheck,
      color: "bg-green-500"
    },
    {
      id: "coordinador",
      name: "Coordinador",
      description: "Coordinación de procesos",
      icon: IconSettings,
      color: "bg-orange-500"
    },
    {
      id: "gerente",
      name: "Gerente",
      description: "Gestión y administración",
      icon: IconCrown,
      color: "bg-purple-500"
    }
  ];

  const selectedRole = roles.find(role => role.id === value);

  const dropdownVariants = {
    initial: { opacity: 0, y: -10, scale: 0.95 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeIn"
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, x: -10 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const handleSelect = (roleId) => {
    onChange(roleId);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      
      <div className="relative">
        <motion.button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-full flex items-center justify-between px-3 py-3 text-left bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors",
            error ? "border-destructive" : "border-gray-300",
            isOpen && "ring-2 ring-primary border-primary"
          )}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <div className="flex items-center space-x-3">
            {selectedRole ? (
              <div className="flex items-center space-x-3">
                <div className={`p-1.5 rounded-full ${selectedRole.color}`}>
                  <selectedRole.icon className="h-4 w-4 text-white" />
                </div>
                <div>
                  <span className="block text-sm font-medium text-gray-900">
                    {selectedRole.name}
                  </span>
                  <span className="block text-xs text-gray-500">
                    {selectedRole.description}
                  </span>
                </div>
              </div>
            ) : (
              <>
                <IconUser className="h-5 w-5 text-gray-400" />
                <span className="text-gray-500">{placeholder}</span>
              </>
            )}
          </div>
          
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <IconChevronDown className="h-5 w-5 text-gray-400" />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg"
              variants={dropdownVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="py-1">
                {roles.map((role, index) => (
                  <motion.button
                    key={role.id}
                    type="button"
                    onClick={() => handleSelect(role.id)}
                    className={cn(
                      "w-full flex items-center space-x-3 px-3 py-3 text-left hover:bg-gray-50 transition-colors",
                      value === role.id && "bg-primary-50 text-primary-700"
                    )}
                    variants={itemVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className={`p-1.5 rounded-full ${role.color}`}>
                      <role.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-gray-900">
                        {role.name}
                      </span>
                      <span className="block text-xs text-gray-500">
                        {role.description}
                      </span>
                    </div>
                    {value === role.id && (
                      <motion.div
                        className="ml-auto"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full" />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {error && (
        <motion.p
          className="text-sm text-destructive mt-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default RoleSelector;
