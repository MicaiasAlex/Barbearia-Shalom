import { Scissors } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 bg-secondary">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Scissors className="w-4 h-4 text-primary" />
          <span className="font-display text-sm font-bold tracking-wider text-foreground">
            BARBEARIA SHALOM
          </span>
        </div>
        <p className="text-muted-foreground text-xs font-condensed tracking-wider">
          © {new Date().getFullYear()} Barbearia Shalom. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
