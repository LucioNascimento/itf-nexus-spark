import { Shield, ExternalLink, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 bg-muted/5">
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-between gap-6 mb-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src="/lovable-uploads/8ba33165-1c2e-4aaf-8683-4a3aae9f5214.png" 
                alt="SBX Logo" 
                className="w-8 h-8 rounded-full ring-1 ring-border opacity-80"
              />
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-4 h-4" />
              <span>© {currentYear} Superbid Exchange — ITF-SBX</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="#o-que-e" className="hover:text-foreground transition-colors flex items-center gap-1">
              <ExternalLink className="w-3 h-3" />
              Sobre
            </a>
            <span>•</span>
            <a href="#faq" className="hover:text-foreground transition-colors flex items-center gap-1">
              <ExternalLink className="w-3 h-3" />
              FAQ
            </a>
            <span>•</span>
            <a href="mailto:contato@superbid.exchange" className="hover:text-foreground transition-colors flex items-center gap-1">
              <Mail className="w-3 h-3" />
              Contato
            </a>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Aviso:</strong> esta página descreve uma <strong className="text-foreground">infraestrutura de mercado</strong> com DvP e contas de pagamento. A disponibilidade de módulos, canais e funcionalidades depende de credenciamento e requisitos regulatórios aplicáveis.
        </p>
      </div>
    </footer>
  );
};

export default Footer;