import { Shield, Network, Zap, FileCheck, Building2, Gavel, Sprout, Briefcase } from "lucide-react";

const WhatIsSection = () => {
  return (
    <section id="o-que-e" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="card-glow rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
                <Network className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">O que é a ITF-SBX</h2>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A <strong className="text-foreground">Infraestrutura Tecnológica Financeira</strong> que organiza mercados antes dispersos, conectando <strong className="text-foreground">dados, contratos e execução</strong>. Nossa lógica é de <em>infraestrutura de mercado</em>: regras claras, contas de pagamento, DvP e trilhas auditáveis — em vez de anúncios soltos ou operações manuais.
            </p>
            
            <div className="space-y-4">
              {[
                {
                  title: "Mercados organizados",
                  description: "leilões, balcão, tomada de preço e compre já na mesma espinha dorsal.",
                  icon: Gavel
                },
                {
                  title: "DvP por padrão",
                  description: "entrega e transferência do bem ocorrem somente contra pagamento depositado.",
                  icon: Shield
                },
                {
                  title: "Multicanais",
                  description: "publicação, disputa e liquidação em diversos canais simultâneos.",
                  icon: Zap
                },
                {
                  title: "Compliance",
                  description: "KYC, documentos por contrato, logs e auditoria end-to-end.",
                  icon: FileCheck
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 hover:bg-primary/5">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <strong className="text-foreground">{item.title}</strong> — {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-glow rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 border border-secondary/30">
                <Building2 className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Módulos de atuação</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              A ITF-SBX opera por módulos, cada um com regras e canais específicos.
            </p>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { name: "Judicial", icon: Gavel },
                { name: "Administrativo", icon: Building2 },
                { name: "Rural", icon: Sprout },
                { name: "Corporativo", icon: Briefcase }
              ].map((module) => (
                <div key={module.name} className="flex items-center gap-2 p-3 rounded-lg border border-border/50 hover:border-accent/30 transition-all duration-300 hover:bg-accent/5">
                  <module.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">{module.name}</span>
                </div>
              ))}
            </div>
            
            <p className="text-muted-foreground">
              Cada módulo pode operar mercados <strong className="text-foreground">públicos</strong> ou <strong className="text-foreground">privados</strong>, conforme a configuração do evento e o CNAE/credenciais exigidos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;