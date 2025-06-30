import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  IconBell,
  IconUser,
  IconLogout,
  IconSettings,
  IconChevronDown,
  IconMenu2,
} from "@tabler/icons-react";
import Logo from "../ui/Logo";
import { cn } from "../../lib/utils";

const Header = ({ onMenuToggle, user = null }) => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const mockUser = user || {
    name: "Juan Pérez",
    email: "juan.perez@telareslosmorros.com",
    role: "Supervisor",
    branch: "Villa de Cura",
    avatar: null,
  };

  const notifications = [
    {
      id: 1,
      title: "Conexión restaurada",
      message: "La conexión con Maracay se ha restablecido",
      time: "Hace 5 min",
      type: "success",
    },
    {
      id: 2,
      title: "Respaldo completado",
      message: "Respaldo automático finalizado exitosamente",
      time: "Hace 1 hora",
      type: "info",
    },
    {
      id: 3,
      title: "Mantenimiento programado",
      message: "Mantenimiento del servidor el domingo a las 2:00 AM",
      time: "Hace 2 horas",
      type: "warning",
    },
  ];

  const dropdownVariants = {
    initial: { opacity: 0, y: -10, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  };

  const getNotificationIcon = (type) => {
    const baseClasses = "w-2 h-2 rounded-full";
    switch (type) {
      case "success":
        return <div className={`${baseClasses} bg-green-500`} />;
      case "warning":
        return <div className={`${baseClasses} bg-yellow-500`} />;
      case "error":
        return <div className={`${baseClasses} bg-red-500`} />;
      default:
        return <div className={`${baseClasses} bg-blue-500`} />;
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo and menu toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onMenuToggle}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors"
            >
              <IconMenu2 className="h-6 w-6" />
            </button>

            <Logo size="sm" showText={true} animated={false} />

            <div className="hidden sm:block">
              <nav className="flex space-x-1">
                <span className="text-sm text-gray-500">Sistema Cloud</span>
                <span className="text-sm text-gray-300">•</span>
                <span className="text-sm font-medium text-primary-600">
                  Dashboard
                </span>
              </nav>
            </div>
          </div>

          {/* Right side - Notifications and user menu */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <div className="relative">
              <motion.button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-full transition-colors relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconBell className="h-6 w-6" />
                {notifications.length > 0 && (
                  <motion.span
                    className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    {notifications.length}
                  </motion.span>
                )}
              </motion.button>

              <AnimatePresence>
                {showNotifications && (
                  <motion.div
                    className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                    variants={dropdownVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <div className="px-4 py-2 border-b border-gray-100">
                      <h3 className="text-sm font-semibold text-gray-900">
                        Notificaciones
                      </h3>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {notifications.map((notification) => (
                        <motion.div
                          key={notification.id}
                          className="px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer"
                          whileHover={{ x: 5 }}
                        >
                          <div className="flex items-start space-x-3">
                            {getNotificationIcon(notification.type)}
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {notification.title}
                              </p>
                              <p className="text-sm text-gray-500 mt-1">
                                {notification.message}
                              </p>
                              <p className="text-xs text-gray-400 mt-1">
                                {notification.time}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="px-4 py-2 border-t border-gray-100">
                      <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                        Ver todas las notificaciones
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* User menu */}
            <div className="relative">
              <motion.button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-white">
                      {mockUser.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="hidden sm:block text-left">
                    <p className="text-sm font-medium text-gray-900">
                      {mockUser.name}
                    </p>
                    <p className="text-xs text-gray-500">{mockUser.role}</p>
                  </div>
                </div>
                <IconChevronDown className="h-4 w-4 text-gray-400" />
              </motion.button>

              <AnimatePresence>
                {showUserMenu && (
                  <motion.div
                    className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                    variants={dropdownVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">
                        {mockUser.name}
                      </p>
                      <p className="text-sm text-gray-500">{mockUser.email}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {mockUser.role} • {mockUser.branch}
                      </p>
                    </div>

                    <div className="py-1">
                      <motion.button
                        className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <IconUser className="h-4 w-4" />
                        <span>Mi Perfil</span>
                      </motion.button>

                      <motion.button
                        className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <IconSettings className="h-4 w-4" />
                        <span>Configuración</span>
                      </motion.button>
                    </div>

                    <div className="border-t border-gray-100 py-1">
                      <motion.button
                        onClick={() => {
                          setShowUserMenu(false);
                          navigate("/login");
                        }}
                        className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <IconLogout className="h-4 w-4" />
                        <span>Cerrar Sesión</span>
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
