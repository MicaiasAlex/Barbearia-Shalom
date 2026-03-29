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
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7902.700998046483!2d-34.851576!3d-7.9626829!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab3d1d81d100c1%3A0x4e7bb86f8df3db34!2sBarbearia%20Shalom!5e0!3m2!1spt-BR!2sbr!4v1774811953312!5m2!1spt-BR!2sbr"
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
                <p className="text-muted-foreground">Av. das Garças, 415 — Rio Doce, Olinda - PE</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Horário de Funcionamento</h3>
                <p className="text-muted-foreground">Seg — Sex: 8h às 18:30h</p>
                <p className="text-muted-foreground">(obs:Paramos para almoço às 12:30h)</p>
                <p className="text-muted-foreground">Sáb: 08h às 18:30h</p>
                <p className="text-muted-foreground">Dom: 08h às 12h</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Telefone / WhatsApp</h3>
                <a
                  href="https://wa.me/qr/W26JEZL46HKAD1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-bronze-light transition-colors"
                >
                  (81) 99557-0489
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
              href="https://chat.whatsapp.com/GnXN23pz6Bp1t66oX8tx5B?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-bronze text-primary-foreground px-8 py-4 font-condensed text-sm uppercase tracking-[0.2em] hover:opacity-90 transition-opacity shadow-bronze text-center mt-4"
            >
              Entre no nosso grupo do WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
