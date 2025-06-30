import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  IconDashboard,
  IconPackage,
  IconBuilding,
  IconChartBar,
  IconSettings,
  IconX,
} from "@tabler/icons-react";
import { cn } from "../../lib/utils";

const Sidebar = ({ isOpen, onClose, activeItem = "dashboard" }) => {
  const navigate = useNavigate();
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: IconDashboard,
      href: "/dashboard",
      description: "Panel principal",
    },
    {
      id: "inventory",
      label: "Inventario",
      icon: IconPackage,
      href: "/inventory",
      description: "Gestión de productos",
    },
    {
      id: "branches",
      label: "Sucursales",
      icon: IconBuilding,
      href: "/branches",
      description: "Red de sucursales",
    },
    {
      id: "reports",
      label: "Reportes",
      icon: IconChartBar,
      href: "/reports",
      description: "Análisis y métricas",
    },
    {
      id: "settings",
      label: "Configuración",
      icon: IconSettings,
      href: "/settings",
      description: "Ajustes del sistema",
    },
  ];

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <>
      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-gray-200 shadow-lg",
          "lg:relative lg:translate-x-0 lg:shadow-none"
        )}
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 lg:hidden">
            <span className="text-lg font-semibold text-gray-900">Menú</span>
            <button
              onClick={onClose}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors"
            >
              <IconX className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            <motion.div
              variants={containerVariants}
              initial="initial"
              animate="animate"
              className="space-y-2"
            >
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeItem === item.id;

                return (
                  <motion.button
                    key={item.id}
                    onClick={() => navigate(item.href)}
                    className={cn(
                      "w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                      isActive
                        ? "bg-primary-50 text-primary-700 border-r-2 border-primary-500"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    )}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      x: isActive ? 0 : 5,
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon
                      className={cn(
                        "h-5 w-5",
                        isActive ? "text-primary-600" : "text-gray-400"
                      )}
                    />
                    <div className="flex-1">
                      <span className="block">{item.label}</span>
                      <span
                        className={cn(
                          "text-xs",
                          isActive ? "text-primary-500" : "text-gray-400"
                        )}
                      >
                        {item.description}
                      </span>
                    </div>

                    {isActive && (
                      <motion.div
                        className="w-2 h-2 bg-primary-500 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </motion.div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <motion.div
              className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">
                  Sistema Activo
                </span>
              </div>
              <div className="text-xs text-gray-500 space-y-1">
                <div className="flex justify-between">
                  <span>Conexiones:</span>
                  <span className="font-medium text-green-600">3/3</span>
                </div>
                <div className="flex justify-between">
                  <span>Uptime:</span>
                  <span className="font-medium text-blue-600">99.9%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
