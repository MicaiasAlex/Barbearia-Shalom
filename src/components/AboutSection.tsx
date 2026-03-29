import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import fachadaImg from "@/assets/fachada-barbershop.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-20 md:py-32 bg-secondary">
      <div className="container" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image with vertical sign emphasis */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={fachadaImg}
              alt="Fachada da Barbearia Shalom com letreiro vertical"
              className="w-full aspect-[4/5] object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="font-condensed text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Sobre Nós
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Uma Tradição de{" "}
              <span className="text-gradient-bronze">Excelência</span>
            </h2>
            <div className="divider-bronze !mx-0 mb-8" />
            <p className="text-secondary-foreground leading-relaxed mb-6">
              Na Barbearia Shalom, acreditamos que cada corte conta uma história. Nosso espaço foi pensado para oferecer ao homem moderno um refúgio de cuidado e estilo, onde a tradição dos barbeiros clássicos se encontra com as tendências contemporâneas.
            </p>
            <p className="text-secondary-foreground leading-relaxed mb-8">
              Profissional, com anos de experiência em técnicas refinadas. Cada detalhe foi projetado para transformar um simples corte em uma experiência memorável.
            </p>
            <div className="flex gap-8">
              {[
                { number: "15+", label: "Anos de experiência" },
                { number: "500+", label: "Clientes satisfeitos" },
                { number: "1", label: "Barbeiro especialista" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="font-display text-2xl md:text-3xl font-bold text-primary">{stat.number}</span>
                  <p className="font-condensed text-xs uppercase tracking-wider text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
