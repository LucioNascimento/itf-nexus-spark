import { Button } from "@/components/ui/button";
import itfDiagram from "@/assets/itf-diagram.jpg";

const Hero = () => {
  return (
    <section className="section-padding pt-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
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

          {/* Diagram */}
          <div className="lg:col-span-2">
            <div className="card-glow rounded-xl p-6">
              <img 
                src={itfDiagram} 
                alt="Diagrama de alto nível da ITF-SBX mostrando as camadas de configuração, execução e liquidação"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;