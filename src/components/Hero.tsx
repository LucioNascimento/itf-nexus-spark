import { Button } from "@/components/ui/button";
import evolutionDiagram from "/lovable-uploads/f3d44d61-8f2f-4250-84d0-3df856a2d851.png";

const Hero = () => {
  return (
    <section className="section-padding pt-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card-glow rounded-xl p-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-6">
                ITF-SBX • Infraestrutura Tecnológica Financeira
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                O coração que organiza <span className="text-gradient">mercados</span> — com DvP, multicanais e contas de pagamento integradas.
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                A <strong className="text-foreground">ITF-SBX</strong> não é marketplace nem fintech. É a infraestrutura que transforma mercados fragmentados em <strong className="text-foreground">mercados organizados</strong>, garantindo <strong className="text-foreground">Delivery versus Payment (DvP)</strong>, governança e liquidação segura — de ponta a ponta.
              </p>

              {/* KPIs */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="p-4 border border-dashed border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-1">DvP nativo</h3>
                  <p className="text-sm text-muted-foreground">Entrega só contra pagamento depositado</p>
                </div>
                <div className="p-4 border border-dashed border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-1">Multicanais</h3>
                  <p className="text-sm text-muted-foreground">Publicação e execução em vários canais</p>
                </div>
                <div className="p-4 border border-dashed border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-1">Regulado</h3>
                  <p className="text-sm text-muted-foreground">Contas de pagamento e trilhas auditáveis</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="#o-que-e">Entenda a ITF-SBX</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#convite">Solicitar convite</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Evolution Diagram - Now with more prominence */}
          <div className="lg:col-span-1">
            <div className="card-glow rounded-xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 pointer-events-none"></div>
              <div className="relative">
                <h3 className="text-lg font-semibold mb-4 text-center text-gradient">Evolução da Lógica de Poder</h3>
                <div className="relative group">
                  <img 
                    src={evolutionDiagram} 
                    alt="Evolução da Lógica de Poder: Web 1.0 (Informativo), Web 2.0 (Canais como Centro do Poder), Web 3.0 (ITF como Centro do Poder com Wallets)"
                    className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 filter contrast-110 brightness-110"
                  />
                  {/* Colorful overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-xs text-muted-foreground bg-gradient-to-r from-primary/20 to-accent/20 px-3 py-1.5 rounded-full border border-primary/20">
                    sbX 2.5 → Web 3.0
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;