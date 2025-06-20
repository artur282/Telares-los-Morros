import React from "react";
import { motion } from "framer-motion";

const CompanyInfo = () => {
  const locations = [
    {
      name: "Villa de Cura",
      state: "Aragua",
      type: "Sede Principal",
      description: "Nuestra casa matriz donde comenzó todo, equipada con la más moderna tecnología de producción.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
    },
    {
      name: "San Juan de los Morros",
      state: "Guárico",
      type: "Sucursal",
      description: "Estratégicamente ubicada para atender la región central del país con excelencia.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
    },
    {
      name: "Maracay",
      state: "Aragua",
      type: "Sucursal",
      description: "Punto de distribución clave que nos permite llegar a más clientes en toda la región.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
    },
  ];

  const services = [
    {
      title: "Fabricación de Uniformes",
      description: "Diseñamos y confeccionamos uniformes profesionales para empresas e instituciones de todos los sectores.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
    },
    {
      title: "Materia Prima al Por Mayor",
      description: "Proveemos textiles de alta calidad a otras empresas de la industria para la confección de uniformes.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ),
    },
  ];

  const innovation = {
    title: "Modernización Tecnológica",
    description: "Hemos implementado tecnología cloud para optimizar nuestras operaciones, mejorar la gestión de inventarios y garantizar la continuidad del negocio.",
    benefits: [
      "Gestión eficiente de inventarios",
      "Respaldo seguro de información",
      "Optimización de procesos",
      "Mejora en tiempos de respuesta"
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
      </svg>
    ),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-main mb-4">
            Conoce
            <span className="text-primary-green"> Telares los Morros</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto font-body">
            Una empresa textil con presencia regional y visión de futuro. Nos especializamos en la fabricación de uniformes profesionales y la venta de materia prima al por mayor, siempre comprometidos con la calidad y la innovación.
          </p>
        </motion.div>

        {/* Locations Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-main text-center mb-12">
            Nuestras Ubicaciones
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {locations.map((location, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-green hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-green/10 rounded-full flex items-center justify-center text-primary-green group-hover:bg-primary-green group-hover:text-white transition-colors duration-300 mx-auto mb-4">
                    {location.icon}
                  </div>
                  <h4 className="text-xl font-heading font-semibold text-text-main mb-1">
                    {location.name}
                  </h4>
                  <p className="text-primary-green font-medium mb-2">
                    {location.state} • {location.type}
                  </p>
                  <p className="text-gray-600 font-body text-sm leading-relaxed">
                    {location.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-main text-center mb-12">
            Nuestros Servicios
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group p-8 bg-white rounded-xl border border-gray-200 hover:border-primary-green hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-green/10 rounded-lg flex items-center justify-center text-primary-green group-hover:bg-primary-green group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-heading font-semibold text-text-main mb-3">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 font-body leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Innovation Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-green to-green-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-white mr-4">
                  {innovation.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold">
                  {innovation.title}
                </h3>
              </div>
              <p className="text-green-100 font-body text-lg leading-relaxed mb-6">
                {innovation.description}
              </p>
            </div>
            <div>
              <h4 className="text-xl font-heading font-semibold mb-4">
                Beneficios de la Modernización:
              </h4>
              <ul className="space-y-3">
                {innovation.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-green-100">
                    <svg className="w-5 h-5 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyInfo;
