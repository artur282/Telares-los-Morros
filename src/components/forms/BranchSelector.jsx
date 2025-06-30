import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronDown, IconMapPin } from "@tabler/icons-react";
import { cn } from "../../lib/utils";

const BranchSelector = ({ 
  value, 
  onChange, 
  error, 
  label = "Sucursal",
  placeholder = "Selecciona tu sucursal" 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const branches = [
    {
      id: "villa-de-cura",
      name: "Villa de Cura",
      description: "Sede Principal",
      color: "bg-primary-500"
    },
    {
      id: "san-juan",
      name: "San Juan de los Morros",
      description: "Sucursal",
      color: "bg-accent-blue"
    },
    {
      id: "maracay",
      name: "Maracay",
      description: "Sucursal",
      color: "bg-accent"
    }
  ];

  const selectedBranch = branches.find(branch => branch.id === value);

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

  const handleSelect = (branchId) => {
    onChange(branchId);
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
            <IconMapPin className="h-5 w-5 text-gray-400" />
            {selectedBranch ? (
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${selectedBranch.color}`} />
                <div>
                  <span className="block text-sm font-medium text-gray-900">
                    {selectedBranch.name}
                  </span>
                  <span className="block text-xs text-gray-500">
                    {selectedBranch.description}
                  </span>
                </div>
              </div>
            ) : (
              <span className="text-gray-500">{placeholder}</span>
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
                {branches.map((branch, index) => (
                  <motion.button
                    key={branch.id}
                    type="button"
                    onClick={() => handleSelect(branch.id)}
                    className={cn(
                      "w-full flex items-center space-x-3 px-3 py-3 text-left hover:bg-gray-50 transition-colors",
                      value === branch.id && "bg-primary-50 text-primary-700"
                    )}
                    variants={itemVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className={`w-3 h-3 rounded-full ${branch.color}`} />
                    <div>
                      <span className="block text-sm font-medium text-gray-900">
                        {branch.name}
                      </span>
                      <span className="block text-xs text-gray-500">
                        {branch.description}
                      </span>
                    </div>
                    {value === branch.id && (
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

export default BranchSelector;
