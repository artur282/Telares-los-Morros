import { motion } from "framer-motion";
import {
  IconDatabase,
  IconClock,
  IconShield,
  IconTrendingUp,
  IconWifi,
  IconMinus,
} from "@tabler/icons-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";

const MetricsPanel = () => {
  const metrics = [
    {
      id: "storage",
      title: "Almacenamiento Total",
      value: "2.4 TB",
      used: "1.8 TB",
      percentage: 75,
      icon: IconDatabase,
      color: "bg-blue-500",
      trend: "+12%",
      trendDirection: "up",
    },
    {
      id: "bandwidth",
      title: "Ancho de Banda",
      value: "850 Mbps",
      used: "340 Mbps",
      percentage: 40,
      icon: IconWifi,
      color: "bg-green-500",
      trend: "+5%",
      trendDirection: "up",
    },
    {
      id: "uptime",
      title: "Tiempo de Actividad",
      value: "99.9%",
      used: "29d 23h",
      percentage: 99.9,
      icon: IconClock,
      color: "bg-purple-500",
      trend: "0%",
      trendDirection: "stable",
    },
    {
      id: "backups",
      title: "Respaldos Recientes",
      value: "24",
      used: "Último: 2h",
      percentage: 100,
      icon: IconShield,
      color: "bg-orange-500",
      trend: "+2",
      trendDirection: "up",
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

  const progressVariants = {
    initial: { width: 0 },
    animate: {
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  const getTrendColor = (direction) => {
    switch (direction) {
      case "up":
        return "text-green-600";
      case "down":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getTrendIcon = (direction) => {
    switch (direction) {
      case "up":
        return <IconTrendingUp className="h-3 w-3" />;
      case "down":
        return <IconTrendingUp className="h-3 w-3 rotate-180" />;
      default:
        return <IconMinus className="h-3 w-3" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">
          Métricas del Sistema
        </h2>
        <motion.button
          className="text-sm text-primary-600 hover:text-primary-700 font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Ver reporte completo →
        </motion.button>
      </div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <motion.div key={metric.id} variants={itemVariants}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${metric.color}`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-base">
                        {metric.title}
                      </CardTitle>
                    </div>

                    <div
                      className={`flex items-center space-x-1 text-sm font-medium ${getTrendColor(
                        metric.trendDirection
                      )}`}
                    >
                      {getTrendIcon(metric.trendDirection)}
                      <span>{metric.trend}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Valor principal */}
                  <div className="space-y-1">
                    <motion.div
                      className="text-2xl font-bold text-gray-900"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                    >
                      {metric.value}
                    </motion.div>
                    <div className="text-sm text-gray-500">{metric.used}</div>
                  </div>

                  {/* Barra de progreso */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Uso actual</span>
                      <span className="font-medium">{metric.percentage}%</span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-2 rounded-full ${
                          metric.percentage > 80
                            ? "bg-red-500"
                            : metric.percentage > 60
                            ? "bg-yellow-500"
                            : "bg-green-500"
                        }`}
                        variants={progressVariants}
                        initial="initial"
                        animate={{ width: `${metric.percentage}%` }}
                        transition={{
                          delay: 0.5,
                          duration: 1.5,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>

                  {/* Información adicional */}
                  <div className="pt-2 border-t border-gray-100">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Última actualización</span>
                      <span>Hace 2 min</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Resumen rápido */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Card className="bg-gradient-to-r from-primary-50 to-accent-50">
          <CardContent className="p-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-primary-700">3</div>
                <div className="text-xs text-gray-600">Sucursales Activas</div>
              </div>
              <div>
                <div className="text-lg font-bold text-green-700">47</div>
                <div className="text-xs text-gray-600">Usuarios Conectados</div>
              </div>
              <div>
                <div className="text-lg font-bold text-blue-700">12ms</div>
                <div className="text-xs text-gray-600">Latencia Promedio</div>
              </div>
              <div>
                <div className="text-lg font-bold text-purple-700">99.9%</div>
                <div className="text-xs text-gray-600">Disponibilidad</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default MetricsPanel;
