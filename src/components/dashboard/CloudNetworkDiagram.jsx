import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconCloud, IconServer, IconWifi } from "@tabler/icons-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";

const CloudNetworkDiagram = () => {
  const [activeNode, setActiveNode] = useState(null);
  const [connectionPulse, setConnectionPulse] = useState(0);

  // Simular pulso de conexiones en tiempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setConnectionPulse((prev) => (prev + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const nodes = [
    {
      id: "cloud",
      type: "cloud",
      label: "Cloud Server",
      x: 50,
      y: 15,
      status: "online",
      icon: IconCloud,
      color: "bg-blue-500",
    },
    {
      id: "villa-de-cura",
      type: "branch",
      label: "Villa de Cura",
      subtitle: "Sede Principal",
      x: 15,
      y: 75,
      status: "online",
      icon: IconServer,
      color: "bg-primary-500",
    },
    {
      id: "san-juan",
      type: "branch",
      label: "San Juan",
      subtitle: "Sucursal",
      x: 50,
      y: 85,
      status: "online",
      icon: IconServer,
      color: "bg-accent-blue",
    },
    {
      id: "maracay",
      type: "branch",
      label: "Maracay",
      subtitle: "Sucursal",
      x: 85,
      y: 75,
      status: "warning",
      icon: IconServer,
      color: "bg-accent",
    },
  ];

  const connections = [
    { from: "cloud", to: "villa-de-cura", status: "strong" },
    { from: "cloud", to: "san-juan", status: "strong" },
    { from: "cloud", to: "maracay", status: "weak" },
    { from: "villa-de-cura", to: "san-juan", status: "medium" },
    { from: "san-juan", to: "maracay", status: "medium" },
  ];

  const getConnectionPath = (from, to) => {
    const fromNode = nodes.find((n) => n.id === from);
    const toNode = nodes.find((n) => n.id === to);

    if (!fromNode || !toNode) return "";

    return `M ${fromNode.x} ${fromNode.y} L ${toNode.x} ${toNode.y}`;
  };

  const getConnectionColor = (status) => {
    switch (status) {
      case "strong":
        return "#10B981"; // green
      case "medium":
        return "#F59E0B"; // yellow
      case "weak":
        return "#EF4444"; // red
      default:
        return "#6B7280"; // gray
    }
  };

  const nodeVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const connectionVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    initial: { scale: 0, opacity: 1 },
    animate: {
      scale: 2,
      opacity: 0,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeOut",
      },
    },
  };

  return (
    <Card className="h-64 flex flex-col overflow-hidden">
      <CardHeader className="flex-shrink-0 pb-2">
        <CardTitle className="flex items-center space-x-2 text-lg">
          <IconWifi className="h-5 w-5 text-primary-600" />
          <span>Red Cloud en Tiempo Real</span>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 p-2">
        <div
          className="relative w-full h-full bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-100 overflow-hidden"
          style={{ minHeight: "180px", maxHeight: "200px" }}
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Definiciones para efectos */}
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <linearGradient
                id="connectionGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Conexiones */}
            <g>
              {connections.map((connection, index) => (
                <g key={`${connection.from}-${connection.to}`}>
                  <motion.path
                    d={getConnectionPath(connection.from, connection.to)}
                    stroke={getConnectionColor(connection.status)}
                    strokeWidth="0.5"
                    fill="none"
                    strokeDasharray="2,1"
                    variants={connectionVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: index * 0.2 }}
                  />

                  {/* Pulso de datos */}
                  {connectionPulse === index % 3 && (
                    <motion.circle
                      r="0.5"
                      fill="#3B82F6"
                      filter="url(#glow)"
                      initial={{
                        offsetDistance: "0%",
                        opacity: 0,
                      }}
                      animate={{
                        offsetDistance: "100%",
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        ease: "linear",
                      }}
                      style={{
                        offsetPath: `path('${getConnectionPath(
                          connection.from,
                          connection.to
                        )}')`,
                      }}
                    />
                  )}
                </g>
              ))}
            </g>

            {/* Nodos */}
            <g>
              {nodes.map((node, index) => {
                const Icon = node.icon;

                return (
                  <g key={node.id}>
                    {/* Pulso de fondo para nodos activos */}
                    {node.status === "online" && (
                      <motion.circle
                        cx={node.x}
                        cy={node.y}
                        r="3"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="0.2"
                        variants={pulseVariants}
                        initial="initial"
                        animate="animate"
                        transition={{ delay: index * 0.5 }}
                      />
                    )}

                    {/* Nodo principal */}
                    <motion.g
                      variants={nodeVariants}
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                      transition={{ delay: index * 0.1 }}
                      style={{ cursor: "pointer" }}
                      onClick={() => setActiveNode(node)}
                    >
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={node.type === "cloud" ? "5" : "4"}
                        fill="white"
                        stroke={
                          node.status === "online"
                            ? "#10B981"
                            : node.status === "warning"
                            ? "#F59E0B"
                            : "#EF4444"
                        }
                        strokeWidth="0.8"
                        filter="url(#glow)"
                      />

                      {/* Icono del nodo */}
                      <foreignObject
                        x={node.x - 2}
                        y={node.y - 2}
                        width="4"
                        height="4"
                      >
                        <div className="flex items-center justify-center w-full h-full">
                          <Icon className="w-3 h-3 text-gray-600" />
                        </div>
                      </foreignObject>
                    </motion.g>

                    {/* Fondo para etiqueta */}
                    <rect
                      x={node.x - node.label.length * 1.8}
                      y={node.y + 6}
                      width={node.label.length * 3.6}
                      height="6"
                      fill="white"
                      fillOpacity="0.9"
                      rx="1"
                      stroke="#e5e7eb"
                      strokeWidth="0.2"
                    />

                    {/* Etiqueta del nodo */}
                    <text
                      x={node.x}
                      y={node.y + 10}
                      textAnchor="middle"
                      className="text-xs fill-gray-700 font-semibold"
                      style={{ fontSize: "3.5px" }}
                    >
                      {node.label}
                    </text>

                    {node.subtitle && (
                      <>
                        <rect
                          x={node.x - node.subtitle.length * 1.5}
                          y={node.y + 12.5}
                          width={node.subtitle.length * 3}
                          height="4"
                          fill="white"
                          fillOpacity="0.8"
                          rx="0.5"
                        />
                        <text
                          x={node.x}
                          y={node.y + 15.5}
                          textAnchor="middle"
                          className="text-xs fill-gray-500"
                          style={{ fontSize: "2.8px" }}
                        >
                          {node.subtitle}
                        </text>
                      </>
                    )}
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Información del nodo activo */}
          <AnimatePresence>
            {activeNode && (
              <motion.div
                className="absolute top-2 right-2 bg-white rounded-lg shadow-lg border border-gray-200 p-2 min-w-40 max-w-48 z-10"
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">
                    {activeNode.label}
                  </h4>
                  <button
                    onClick={() => setActiveNode(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Estado:</span>
                    <span
                      className={`font-medium capitalize ${
                        activeNode.status === "online"
                          ? "text-green-600"
                          : activeNode.status === "warning"
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                    >
                      {activeNode.status}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Tipo:</span>
                    <span className="font-medium text-gray-900 capitalize">
                      {activeNode.type}
                    </span>
                  </div>

                  {activeNode.subtitle && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Descripción:</span>
                      <span className="font-medium text-gray-900">
                        {activeNode.subtitle}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Leyenda */}
          <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-sm rounded-lg p-2 text-xs shadow-sm z-10">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-0.5 bg-green-500"></div>
                <span>Conexión fuerte</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-0.5 bg-yellow-500"></div>
                <span>Conexión media</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-0.5 bg-red-500"></div>
                <span>Conexión débil</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CloudNetworkDiagram;
