interface HeroSlide {
    bgImage: string;
    title: string;
    description: string;
    ctaText: string;
  }
  
  const HeroSlides: HeroSlide[] = [
    {
      bgImage: "/src/images/hero/hero-slide-1.jpg",
      title: "MECINTRAC",
      description: "Somos una empresa dedicada al desarrollo y fabricación de repuestos, mecanismos y equipos en materiales metálicos.",
      ctaText: "Contáctanos"
    },
    {
      bgImage: "/src/images/hero/hero-slide-2.jpg",
      title: "Innovación en Ingeniería",
      description: "Ofrecemos soluciones de alta calidad para la industria metalmecánica.",
      ctaText: "Nuestros Servicios"
    },
    {
      bgImage: "/src/images/hero/hero-slide-3.jpg",
      title: "Experiencia y Calidad",
      description: "Más de 20 años brindando excelencia en fabricación y diseño de piezas metálicas.",
      ctaText: "Conoce Más"
    }
  ];
  
  export default HeroSlides;