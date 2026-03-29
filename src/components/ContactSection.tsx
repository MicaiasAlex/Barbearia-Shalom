import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone, Instagram } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contato" className="py-20 md:py-32">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-condensed text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Encontre-nos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Localização & Contato
          </h2>
          <div className="divider-bronze" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-[4/3] bg-card border border-border overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976!2d-46.6388!3d-23.5507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAyLjUiUyA0NsKwMzgnMTkuNyJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Barbearia Shalom"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center gap-8"
          >
            <div className="flex gap-4 items-start">
              <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Endereço</h3>
                <p className="text-muted-foreground">Rua Exemplo, 123 — Centro, São Paulo - SP</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Horário de Funcionamento</h3>
                <p className="text-muted-foreground">Seg — Sex: 9h às 20h</p>
                <p className="text-muted-foreground">Sáb: 9h às 18h</p>
                <p className="text-muted-foreground">Dom: Fechado</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Telefone / WhatsApp</h3>
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-bronze-light transition-colors"
                >
                  (00) 00000-0000
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Instagram className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Redes Sociais</h3>
                <a
                  href="https://instagram.com/barbeariashalom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-bronze-light transition-colors"
                >
                  @barbeariashalom
                </a>
              </div>
            </div>

            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-bronze text-primary-foreground px-8 py-4 font-condensed text-sm uppercase tracking-[0.2em] hover:opacity-90 transition-opacity shadow-bronze text-center mt-4"
            >
              Agende pelo WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
