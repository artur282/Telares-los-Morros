import { motion } from "framer-motion";
import DashboardLayout from "../components/layout/DashboardLayout";
import BranchCard from "../components/dashboard/BranchCard";
import CloudNetworkDiagram from "../components/dashboard/CloudNetworkDiagram";
import MetricsPanel from "../components/dashboard/MetricsPanel";
import ActivityFeed from "../components/dashboard/ActivityFeed";
import FadeIn from "../components/animations/FadeIn";

const Dashboard = () => {
  // Datos mock de las sucursales
  const branches = [
    {
      id: "villa-de-cura",
      name: "Villa de Cura",
      type: "Sede Principal",
      status: "online",
      activeUsers: 18,
      userTrend: "up",
      storageUsed: 68,
      storageTotal: "500 GB",
      lastConnection: "Activo",
      latency: 12,
      color: "bg-primary-500",
      services: {
        database: true,
        backup: true,
        sync: true,
      },
    },
    {
      id: "san-juan",
      name: "San Juan de los Morros",
      type: "Sucursal",
      status: "online",
      activeUsers: 15,
      userTrend: "up",
      storageUsed: 85,
      storageTotal: "300 GB",
      lastConnection: "Activo",
      latency: 28,
      color: "bg-accent-blue",
      services: {
        database: true,
        backup: true,
        sync: true,
      },
    },
    {
      id: "maracay",
      name: "Maracay",
      type: "Sucursal",
      status: "warning",
      activeUsers: 14,
      userTrend: "down",
      storageUsed: 45,
      storageTotal: "250 GB",
      lastConnection: "Hace 5 min",
      latency: 156,
      color: "bg-accent",
      services: {
        database: true,
        backup: false,
        sync: true,
      },
    },
  ];

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <DashboardLayout activeMenuItem="dashboard">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header del Dashboard */}
        <FadeIn>
          <div className="space-y-3">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Dashboard - Red Cloud
            </h1>
            <p className="text-gray-600">
              Monitoreo en tiempo real del sistema de Telares Los Morros
            </p>

            {/* Indicadores de estado rápido */}
            <div className="flex flex-wrap items-center gap-4 lg:gap-6 mt-4">
              <div className="flex items-center space-x-2">
                <motion.div
                  className="w-3 h-3 bg-green-500 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span className="text-sm font-medium text-gray-700">
                  Sistema Operativo
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">
                  3 Sucursales Conectadas
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-600">
                  47 Usuarios Activos
                </span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Cards de Sucursales */}
        <motion.section
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="w-full"
        >
          <motion.h2
            className="text-xl font-semibold text-gray-900 mb-4"
            variants={itemVariants}
          >
            Estado de Sucursales
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
            {branches.map((branch, index) => (
              <BranchCard key={branch.id} branch={branch} index={index} />
            ))}
          </div>
        </motion.section>

        {/* Diagrama de Red y Actividad */}
        <motion.section
          className="w-full"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6">
            <motion.div variants={itemVariants} className="w-full">
              <CloudNetworkDiagram />
            </motion.div>

            <motion.div variants={itemVariants} className="w-full">
              <ActivityFeed />
            </motion.div>
          </div>
        </motion.section>

        {/* Panel de Métricas */}
        <motion.section
          variants={itemVariants}
          initial="initial"
          animate="animate"
          className="w-full"
        >
          <MetricsPanel />
        </motion.section>

        {/* Footer del Dashboard */}
        <FadeIn delay={1}>
          <div className="bg-white rounded-lg border border-gray-200 p-4 lg:p-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 text-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Próximo Mantenimiento
                </h3>
                <p className="text-gray-600">Domingo 15 de Enero, 2:00 AM</p>
                <p className="text-sm text-gray-500 mt-1">
                  Duración estimada: 2 horas
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Soporte Técnico
                </h3>
                <p className="text-gray-600">24/7 Disponible</p>
                <p className="text-sm text-gray-500 mt-1">
                  soporte@telareslosmorros.com
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Última Actualización
                </h3>
                <p className="text-gray-600">Sistema v2.1.4</p>
                <p className="text-sm text-gray-500 mt-1">
                  Actualizado hace 3 días
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
