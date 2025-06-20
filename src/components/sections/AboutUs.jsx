import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      title: "15+ Años de Experiencia",
      description:
        "Más de una década perfeccionando nuestros procesos y calidad en la fabricación de uniformes profesionales.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
    },
    {
      title: "Calidad Garantizada",
      description:
        "Utilizamos materiales de primera calidad y procesos de control rigurosos para asegurar la durabilidad de cada prenda.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
        </svg>
      ),
    },
    {
      title: "Diseños Personalizados",
      description:
        "Adaptamos cada uniforme a las necesidades específicas de tu empresa, incluyendo bordados y estampados corporativos.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
    {
      title: "Entrega Rápida",
      description:
        "Tiempos de entrega optimizados sin comprometer la calidad. Cumplimos con los plazos acordados.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z" />
        </svg>
      ),
    },
    {
      title: "Precios Competitivos",
      description:
        "Ofrecemos la mejor relación calidad-precio del mercado, con descuentos especiales para pedidos al por mayor.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
        </svg>
      ),
    },
    {
      title: "Atención Personalizada",
      description:
        "Nuestro equipo de expertos te acompaña en todo el proceso, desde el diseño hasta la entrega final.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2 1l-3.72 5.58L8.5 11.5C8.22 11.19 7.82 11 7.39 11H3v2h3.61l2.72 2.72L8 17v5h2v-4.27l1.31-1.31L13 18.01V22h2v-4.5l-2.05-2.05L16.5 11H18l2 6v5h2z" />
        </svg>
      ),
    },
  ];

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
    <section className="py-20 bg-white">
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
            ¿Por Qué Elegir
            <span className="text-primary-green"> Los Morros</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Somos líderes en la fabricación de uniformes profesionales,
            comprometidos con la excelencia y la satisfacción de nuestros
            clientes.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-green hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-green/10 rounded-lg flex items-center justify-center text-primary-green group-hover:bg-primary-green group-hover:text-white transition-colors duration-300">
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-heading font-semibold text-text-main mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 font-body text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-green to-green-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold font-heading mb-2">
                15+
              </div>
              <div className="text-green-100 font-body">
                Años de Experiencia
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold font-heading mb-2">
                500+
              </div>
              <div className="text-green-100 font-body">Empresas Atendidas</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold font-heading mb-2">
                10K+
              </div>
              <div className="text-green-100 font-body">
                Uniformes Entregados
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold font-heading mb-2">
                98%
              </div>
              <div className="text-green-100 font-body">
                Satisfacción del Cliente
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-8 font-body">
            ¿Listo para equipar a tu equipo con los mejores uniformes?
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-primary-green rounded-lg hover:bg-green-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Solicitar Cotización
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
