import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors, Sparkles } from "lucide-react";

const services = [
  {
    name: "Corte Social",
    description: "Corte clássico com técnica apurada e acabamento impecável.",
    price: "R$ 45",
    icon: Scissors,
  },
  {
    name: "Degradê",
    description: "Transição suave e precisa para um visual marcante e moderno.",
    price: "R$ 55",
    icon: Scissors,
  },
  {
    name: "Barba com Toalha Quente",
    description: "Ritual completo de barbearia com toalha quente e produtos premium.",
    price: "R$ 40",
    icon: Sparkles,
  },
  {
    name: "Selagem Capilar",
    description: "Tratamento que reduz o volume e proporciona brilho e alinhamento.",
    price: "R$ 80",
    icon: Sparkles,
  },
  {
    name: "Dia do Noivo",
    description: "Pacote exclusivo com corte, barba, hidratação e preparação completa.",
    price: "R$ 180",
    icon: Sparkles,
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicos" className="py-20 md:py-32">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-condensed text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Serviços & Preços
          </h2>
          <div className="divider-bronze mb-6" />
          <p className="text-muted-foreground max-w-md mx-auto">
            Cada serviço é executado com precisão artesanal e produtos de primeira linha.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border p-8 group hover:border-primary/50 transition-all duration-300 shadow-card"
            >
              <service.icon className="w-6 h-6 text-primary mb-4" />
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {service.name}
                </h3>
                <span className="font-condensed text-lg font-bold text-primary">
                  {service.price}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="w-0 group-hover:w-full h-px bg-primary mt-6 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
