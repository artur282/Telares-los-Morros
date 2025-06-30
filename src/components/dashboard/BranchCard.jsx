import { motion } from "framer-motion";
import {
  IconMapPin,
  IconUsers,
  IconDatabase,
  IconWifi,
  IconTrendingUp,
  IconTrendingDown,
} from "@tabler/icons-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";

const BranchCard = ({ branch, index = 0 }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "online":
        return "text-green-600 bg-green-100";
      case "warning":
        return "text-yellow-600 bg-yellow-100";
      case "offline":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "online":
        return <IconWifi className="h-4 w-4" />;
      case "warning":
        return <IconTrendingDown className="h-4 w-4" />;
      case "offline":
        return <IconWifi className="h-4 w-4" />;
      default:
        return <IconWifi className="h-4 w-4" />;
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  };

  const progressVariants = {
    initial: { width: 0 },
    animate: {
      width: `${branch.storageUsed}%`,
      transition: {
        duration: 1,
        delay: 0.5 + index * 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div variants={cardVariants} initial="initial" animate="animate">
      <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 min-w-0 flex-1">
              <div className={`p-2 rounded-lg ${branch.color} flex-shrink-0`}>
                <IconMapPin className="h-4 w-4 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <CardTitle className="text-base lg:text-lg truncate">
                  {branch.name}
                </CardTitle>
                <p className="text-xs lg:text-sm text-gray-500 truncate">
                  {branch.type}
                </p>
              </div>
            </div>

            <div
              className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                branch.status
              )} flex-shrink-0`}
            >
              {getStatusIcon(branch.status)}
              <span className="capitalize hidden sm:inline">
                {branch.status}
              </span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-3 lg:space-y-4">
          {/* Métricas principales */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <IconUsers className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">Usuarios Activos</span>
              </div>
              <div className="flex items-center space-x-2">
                <motion.span
                  className="text-2xl font-bold text-gray-900"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                >
                  {branch.activeUsers}
                </motion.span>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  {branch.userTrend === "up" ? (
                    <IconTrendingUp className="h-4 w-4 text-green-500" />
                  ) : (
                    <IconTrendingDown className="h-4 w-4 text-red-500" />
                  )}
                </motion.div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <IconDatabase className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">Almacenamiento</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{branch.storageUsed}%</span>
                  <span className="text-gray-500">{branch.storageTotal}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full ${
                      branch.storageUsed > 80
                        ? "bg-red-500"
                        : branch.storageUsed > 60
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                    variants={progressVariants}
                    initial="initial"
                    animate="animate"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Información adicional */}
          <div className="pt-3 border-t border-gray-100">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Última conexión:</span>
                <p className="font-medium text-gray-900">
                  {branch.lastConnection}
                </p>
              </div>
              <div>
                <span className="text-gray-500">Latencia:</span>
                <p
                  className={`font-medium ${
                    branch.latency < 50
                      ? "text-green-600"
                      : branch.latency < 100
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {branch.latency}ms
                </p>
              </div>
            </div>
          </div>

          {/* Indicadores de estado */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex space-x-2">
              <motion.div
                className={`w-2 h-2 rounded-full ${
                  branch.services.database ? "bg-green-500" : "bg-red-500"
                }`}
                animate={{
                  scale: branch.services.database ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                title="Base de datos"
              />
              <motion.div
                className={`w-2 h-2 rounded-full ${
                  branch.services.backup ? "bg-green-500" : "bg-red-500"
                }`}
                animate={{
                  scale: branch.services.backup ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 0.5,
                }}
                title="Respaldos"
              />
              <motion.div
                className={`w-2 h-2 rounded-full ${
                  branch.services.sync ? "bg-green-500" : "bg-red-500"
                }`}
                animate={{
                  scale: branch.services.sync ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 1,
                }}
                title="Sincronización"
              />
            </div>

            <motion.button
              className="text-xs text-primary-600 hover:text-primary-700 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver detalles →
            </motion.button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BranchCard;
