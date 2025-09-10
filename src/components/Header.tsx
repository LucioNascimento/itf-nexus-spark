import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80">
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16" aria-label="Navigation">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/8ba33165-1c2e-4aaf-8683-4a3aae9f5214.png" 
              alt="SBX Logo" 
              className="w-10 h-10 rounded-full"
            />
            <span className="text-lg font-bold">Superbid Exchange</span>
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