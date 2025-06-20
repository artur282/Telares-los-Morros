import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import { HeroSection, HeroContent } from "../components/ui/hero-section";
import ProductCategories from "../components/sections/ProductCategories";
import CompanyInfo from "../components/sections/CompanyInfo";
import AboutUs from "../components/sections/AboutUs";
import Footer from "../components/layout/Footer";

const LandingPage = () => {
  const navigate = useNavigate();

  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop",
      alt: "Uniformes médicos",
      title: "Uniformes Médicos",
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      alt: "Uniformes corporativos",
      title: "Corporativos",
    },
    {
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop",
      alt: "Uniformes industriales",
      title: "Industriales",
    },
    {
      src: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=300&fit=crop",
      alt: "Textiles de calidad",
      title: "Textiles",
    },
  ];

  const handleCTAClick = () => {
    navigate("/catalog");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection>
          <HeroContent
            title="Telares los Morros"
            subtitle="Calidad y Estilo en Cada Prenda"
            description="Empresa textil especializada en la fabricación de uniformes profesionales y venta de materia prima al por mayor. Con más de 15 años de experiencia y presencia en 3 ubicaciones estratégicas, ofrecemos las mejores soluciones en vestuario profesional para tu empresa o institución."
            ctaText="Ver Catálogo"
            ctaAction={handleCTAClick}
            images={heroImages}
          />
        </HeroSection>

        <ProductCategories />

        <CompanyInfo />

        <AboutUs />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
