import { motion } from "framer-motion";
import heroImg from "@/assets/hero-barbershop.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Interior da Barbearia Shalom"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      <div className="relative container text-center px-4 py-32 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="w-12 h-px bg-primary" />
            <span className="font-condensed text-xs uppercase tracking-[0.3em] text-primary">
              Barbearia
            </span>
            <span className="w-12 h-px bg-primary" />
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-foreground">
            Tradição no Corte,{" "}
            <span className="text-gradient-bronze">Excelência no Estilo.</span>
          </h1>

          <p className="font-body text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Muito mais que um corte, uma experiência de cuidado e bem-estar para o homem moderno.
          </p>

          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-bronze text-primary-foreground px-8 py-4 font-condensed text-sm uppercase tracking-[0.2em] hover:opacity-90 transition-opacity shadow-bronze"
          >
            Agende seu Horário Agora
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-px h-12 bg-primary/50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
