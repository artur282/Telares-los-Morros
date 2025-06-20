import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useSearchParams, useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const CatalogPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Handle URL parameters for category filtering
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (
      categoryParam &&
      ["medical", "corporate", "industrial", "textiles"].includes(categoryParam)
    ) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const categories = [
    { id: "all", name: "Todos los Productos", count: 24 },
    { id: "medical", name: "Uniformes Médicos", count: 8 },
    { id: "corporate", name: "Uniformes Corporativos", count: 6 },
    { id: "industrial", name: "Uniformes Industriales", count: 5 },
    { id: "textiles", name: "Textiles Especializados", count: 5 },
  ];

  const products = [
    // Medical Uniforms
    {
      id: 1,
      name: "Scrub Médico Premium",
      category: "medical",
      price: "45.000",
      image:
        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=500&fit=crop",
      description:
        "Scrub de alta calidad con tela antimicrobiana y diseño ergonómico.",
      features: ["Antimicrobiano", "Transpirable", "Fácil lavado"],
    },
 
    {
      id: 3,
      name: "Uniforme Enfermería",
      category: "medical",
      price: "38.000",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=500&fit=crop",
      description:
        "Uniforme completo para personal de enfermería con múltiples bolsillos.",
      features: ["Cómodo", "Funcional", "Duradero"],
    },

    // Corporate Uniforms
    {
      id: 4,
      name: "Camisa Ejecutiva",
      category: "corporate",
      price: "32.000",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      description:
        "Camisa elegante para ejecutivos con corte moderno y tela premium.",
      features: ["Corte moderno", "Tela premium", "Fácil planchado"],
    },
    {
      id: 5,
      name: "Blazer Corporativo",
      category: "corporate",
      price: "85.000",
      image:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop",
      description:
        "Blazer elegante para presentaciones y reuniones importantes.",
      features: ["Elegante", "Versátil", "Ajuste perfecto"],
    },
    {
      id: 6,
      name: "Pantalón de Vestir",
      category: "corporate",
      price: "42.000",
      image:
        "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop",
      description:
        "Pantalón de vestir clásico con excelente caída y comodidad.",
      features: ["Clásico", "Cómodo", "Resistente"],
    },

    // Industrial Uniforms
    {
      id: 7,
      name: "Overall Industrial",
      category: "industrial",
      price: "55.000",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=500&fit=crop",
      description:
        "Overall resistente para trabajo industrial con múltiples bolsillos.",
      features: ["Resistente", "Seguro", "Funcional"],
    },
    {
      id: 8,
      name: "Chaleco de Seguridad",
      category: "industrial",
      price: "28.000",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=500&fit=crop",
      description:
        "Chaleco reflectivo de alta visibilidad para trabajos de construcción.",
      features: ["Alta visibilidad", "Reflectivo", "Cómodo"],
    },

    // Specialized Textiles
    {
      id: 9,
      name: "Tela Antimicrobiana",
      category: "textiles",
      price: "25.000",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=500&fit=crop",
      description:
        "Tela especializada con propiedades antimicrobianas para uso médico.",
      features: ["Antimicrobiano", "Suave", "Duradero"],
    },
    {
      id: 10,
      name: "Textil Ignífugo",
      category: "textiles",
      price: "35.000",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop",
      description:
        "Material resistente al fuego para industrias de alto riesgo.",
      features: ["Ignífugo", "Resistente", "Certificado"],
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary-green to-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Nuestro Catálogo
              </h1>
              <p className="text-xl md:text-2xl font-body max-w-3xl mx-auto leading-relaxed">
                Descubre nuestra amplia gama de uniformes y textiles
                especializados
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-12 bg-bg-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="w-full lg:w-1/3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  />
                  <svg
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? "bg-primary-green text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary-green text-white px-2 py-1 rounded-full text-xs font-medium">
                        {categories
                          .find((cat) => cat.id === product.category)
                          ?.name.split(" ")[1] || "Producto"}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-heading font-semibold text-text-main mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 font-body text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-heading font-bold text-primary-green">
                        Bs. {product.price}
                      </div>
                      <button className="bg-primary-green text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm font-medium">
                        Cotizar
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-gray-400 mb-4">
                  <svg
                    className="w-16 h-16 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47.881-6.08 2.33l-.147.083A7.994 7.994 0 0112 21a7.994 7.994 0 016.227-2.587l-.147-.083A7.962 7.962 0 0112 15z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-600 mb-2">
                  No se encontraron productos
                </h3>
                <p className="text-gray-500 font-body">
                  Intenta ajustar los filtros o términos de búsqueda
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary-green to-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                ¿No encuentras lo que buscas?
              </h2>
              <p className="text-xl font-body mb-8 max-w-2xl mx-auto">
                Contáctanos para soluciones personalizadas y cotizaciones
                especiales
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate("/contact")}
                  className="bg-white text-primary-green px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Solicitar Cotización
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-primary-green transition-colors"
                >
                  Contactar Asesor
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CatalogPage;
