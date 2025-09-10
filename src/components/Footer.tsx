const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="text-muted-foreground">
            © {currentYear} Superbid Exchange — ITF-SBX
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="#o-que-e" className="hover:text-foreground transition-colors">Sobre</a>
            <span>•</span>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
            <span>•</span>
            <a href="mailto:contato@superbid.exchange" className="hover:text-foreground transition-colors">Contato</a>
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