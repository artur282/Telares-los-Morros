import { useState } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { cn } from "../../lib/utils";

const DashboardLayout = ({ children, activeMenuItem = "dashboard" }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const layoutVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-50"
      variants={layoutVariants}
      initial="initial"
      animate="animate"
    >
      {/* Header */}
      <Header onMenuToggle={toggleSidebar} />

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <div className="hidden lg:block lg:w-64 lg:flex-shrink-0">
          <Sidebar
            isOpen={true}
            onClose={closeSidebar}
            activeItem={activeMenuItem}
          />
        </div>

        {/* Mobile Sidebar */}
        <div className="lg:hidden">
          <Sidebar
            isOpen={sidebarOpen}
            onClose={closeSidebar}
            activeItem={activeMenuItem}
          />
        </div>

        {/* Main Content */}
        <motion.main
          className={cn(
            "flex-1 overflow-auto min-w-0",
            "lg:ml-0" // No margin on large screens since sidebar is in normal flow
          )}
          variants={contentVariants}
          initial="initial"
          animate="animate"
        >
          <div className="p-4 lg:p-6 max-w-full">{children}</div>
        </motion.main>
      </div>
    </motion.div>
  );
};

export default DashboardLayout;
