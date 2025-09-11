import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80">
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16" aria-label="Navigation">
          <div className="flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <img 
                src="/lovable-uploads/8ba33165-1c2e-4aaf-8683-4a3aae9f5214.png" 
                alt="SBX Logo" 
                className="relative w-12 h-12 rounded-full ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300 hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Superbid Exchange
              </span>
              <span className="text-xs text-muted-foreground font-medium tracking-wide">
                ITF-SBX
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-1">
            <Button variant="pill" size="sm" asChild>
              <a href="#o-que-e">ITF-SBX</a>
            </Button>
            <Button variant="pill" size="sm" asChild>
              <a href="#mercados">Tipos de Mercado</a>
            </Button>
            <Button variant="pill" size="sm" asChild>
              <a href="#multicanais">Multicanais</a>
            </Button>
            <Button variant="pill" size="sm" asChild>
              <a href="#wallets">Wallets & DvP</a>
            </Button>
            <Button variant="pill" size="sm" asChild>
              <a href="#cortex">Cortex-SBX</a>
            </Button>
          </div>

          <Button variant="outline" asChild>
            <a href="#convite">Solicitar convite</a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;