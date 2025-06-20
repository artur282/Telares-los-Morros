import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Carlos Moreno",
      position: "Fundador y Director General",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description:
        "Con más de 20 años de experiencia en la industria textil, Carlos fundó Los Morros con la visión de ofrecer uniformes de la más alta calidad.",
    },

    {
      name: "Roberto Silva",
      position: "Gerente de Producción",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description:
        "Experto en procesos de manufactura textil, Roberto asegura que cada prenda cumpla con nuestros estándares de calidad.",
    },
  ];

  const milestones = [
    {
      year: "2008",
      title: "Fundación de la empresa",
      description:
        "Iniciamos como un pequeño taller familiar especializado en uniformes médicos.",
    },
    {
      year: "2012",
      title: "Expansión a uniformes corporativos",
      description:
        "Ampliamos nuestra línea de productos para incluir vestuario empresarial.",
    },
    {
      year: "2016",
      title: "Certificación de calidad",
      description:
        "Obtuvimos certificaciones internacionales de calidad y procesos.",
    },
    {
      year: "2020",
      title: "Modernización tecnológica",
      description:
        "Implementamos tecnología de punta en nuestros procesos de producción.",
    },
    {
      year: "2023",
      title: "Líderes del mercado",
      description:
        "Nos consolidamos como líderes en uniformes profesionales en Venezuela.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary-green to-green-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Nuestra Historia
              </h1>
              <p className="text-xl md:text-2xl font-body max-w-3xl mx-auto leading-relaxed">
                Más de 15 años creando uniformes de calidad excepcional,
                construyendo relaciones duraderas con nuestros clientes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-bg-light rounded-2xl p-8"
              >
                <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-heading font-bold text-text-main mb-4">
                  Nuestra Misión
                </h2>
                <p className="text-gray-600 font-body leading-relaxed">
                  Proporcionar uniformes y textiles de la más alta calidad que
                  combinen funcionalidad, comodidad y estilo profesional,
                  superando las expectativas de nuestros clientes y
                  contribuyendo al éxito de sus organizaciones.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-bg-light rounded-2xl p-8"
              >
                <div className="w-16 h-16 bg-accent-yellow rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-heading font-bold text-text-main mb-4">
                  Nuestra Visión
                </h2>
                <p className="text-gray-600 font-body leading-relaxed">
                  Ser la empresa líder en América Latina en la fabricación y
                  distribución de uniformes profesionales, reconocida por
                  nuestra innovación, calidad excepcional y compromiso con la
                  sostenibilidad.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-bg-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-main mb-4">
                Nuestro Recorrido
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-body">
                Un viaje de crecimiento, innovación y compromiso con la
                excelencia.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-green"></div>

              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <div className="text-2xl font-heading font-bold text-primary-green mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-heading font-semibold text-text-main mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 font-body">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-green rounded-full border-4 border-white"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-main mb-4">
                Nuestro Equipo
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-body">
                Profesionales apasionados que hacen posible la excelencia en
                cada prenda.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-text-main mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-green font-medium mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-600 font-body leading-relaxed">
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-br from-primary-green to-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-8">
                Nuestros Valores
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { title: "Calidad", icon: "⭐" },
                  { title: "Innovación", icon: "💡" },
                  { title: "Compromiso", icon: "🤝" },
                  { title: "Excelencia", icon: "🏆" },
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-heading font-semibold">
                      {value.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
