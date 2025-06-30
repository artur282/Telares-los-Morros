import { motion } from "framer-motion";
import {
  IconUser,
  IconDatabase,
  IconShield,
  IconWifi,
  IconAlertTriangle,
  IconCheck,
  IconClock,
} from "@tabler/icons-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";

const ActivityFeed = () => {
  const activities = [
    {
      id: 1,
      type: "user_login",
      title: "Usuario conectado",
      description: "María González se conectó desde Villa de Cura",
      time: "Hace 2 min",
      icon: IconUser,
      color: "bg-green-500",
      branch: "Villa de Cura",
    },
    {
      id: 2,
      type: "backup_completed",
      title: "Respaldo completado",
      description: "Respaldo automático de base de datos finalizado",
      time: "Hace 15 min",
      icon: IconShield,
      color: "bg-blue-500",
      branch: "Todas las sucursales",
    },
    {
      id: 3,
      type: "connection_restored",
      title: "Conexión restaurada",
      description: "La conexión con Maracay se ha restablecido",
      time: "Hace 32 min",
      icon: IconWifi,
      color: "bg-green-500",
      branch: "Maracay",
    },
    {
      id: 4,
      type: "sync_completed",
      title: "Sincronización completada",
      description: "Datos sincronizados entre todas las sucursales",
      time: "Hace 1 hora",
      icon: IconDatabase,
      color: "bg-purple-500",
      branch: "Todas las sucursales",
    },
    {
      id: 5,
      type: "warning",
      title: "Advertencia de almacenamiento",
      description: "El almacenamiento en San Juan alcanzó el 85%",
      time: "Hace 2 horas",
      icon: IconAlertTriangle,
      color: "bg-yellow-500",
      branch: "San Juan de los Morros",
    },
    {
      id: 6,
      type: "maintenance",
      title: "Mantenimiento programado",
      description: "Mantenimiento del servidor completado exitosamente",
      time: "Hace 3 horas",
      icon: IconCheck,
      color: "bg-green-500",
      branch: "Cloud Server",
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
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const getBranchColor = (branch) => {
    switch (branch) {
      case "Villa de Cura":
        return "text-primary-600 bg-primary-50";
      case "San Juan de los Morros":
        return "text-blue-600 bg-blue-50";
      case "Maracay":
        return "text-orange-600 bg-orange-50";
      case "Cloud Server":
        return "text-purple-600 bg-purple-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <Card className="h-64 flex flex-col">
      <CardHeader className="pb-2 flex-shrink-0">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2 text-lg">
            <IconClock className="h-5 w-5 text-primary-600" />
            <span>Actividad Reciente</span>
          </CardTitle>
          <motion.button
            className="text-sm text-primary-600 hover:text-primary-700 font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver todo →
          </motion.button>
        </div>
      </CardHeader>

      <CardContent className="flex-1 overflow-hidden p-2">
        <div className="h-full overflow-y-auto pr-1 space-y-1">
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="space-y-3"
          >
            {activities.map((activity, index) => {
              const Icon = activity.icon;

              return (
                <motion.div
                  key={activity.id}
                  variants={itemVariants}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
                  whileHover={{ x: 5 }}
                >
                  {/* Icono */}
                  <div
                    className={`flex-shrink-0 p-2 rounded-full ${activity.color}`}
                  >
                    <Icon className="h-4 w-4 text-white" />
                  </div>

                  {/* Contenido */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary-700 transition-colors">
                        {activity.title}
                      </h4>
                      <span className="text-xs text-gray-500 flex-shrink-0">
                        {activity.time}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {activity.description}
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getBranchColor(
                          activity.branch
                        )}`}
                      >
                        {activity.branch}
                      </span>

                      {/* Indicador de tiempo relativo */}
                      <div className="flex items-center space-x-1">
                        <motion.div
                          className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityFeed;
