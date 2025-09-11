import { Target, BarChart3, Building, Users, Briefcase, Scale, TreePine, GitBranch, Settings, Radio } from "lucide-react";

const MultichannelSection = () => {
  return (
    <section id="multicanais" className="section-padding bg-muted/5">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="card-glow rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 border border-secondary/30">
                <Radio className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Publicação & Execução Multicanais</h2>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              O terminal do vendedor configura o contrato uma vez, e a ITF-SBX publica em <strong className="text-foreground">vários canais</strong> (canais próprios, parceiros, franquias por módulo), mantendo <strong className="text-foreground">uma única trilha de execução e liquidação</strong>.
            </p>
            
            <div className="space-y-4">
              {[
                {
                  title: "Uma configuração",
                  description: "múltiplas praças/mercados/canais.",
                  icon: Settings
                },
                {
                  title: "Mesma regra, mesmo contrato",
                  description: "sem divergência operacional.",
                  icon: GitBranch
                },
                {
                  title: "KPIs consolidados",
                  description: "alcance, disputa, conversão e liquidação.",
                  icon: BarChart3
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg border border-border/50 hover:border-secondary/30 transition-all duration-300 hover:bg-secondary/5">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20">
                    <item.icon className="w-5 h-5 text-secondary" />
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
              <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Para quem é</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Tribunais, governos e mercados privados que precisam de <strong className="text-foreground">escala, conformidade e liquidez</strong> sem refazer sua infraestrutura.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: "Bancos & IPs", icon: Building },
                { name: "Tribunais", icon: Scale },
                { name: "Órgãos públicos", icon: Users },
                { name: "Corporates", icon: Briefcase },
                { name: "Curadores de ativos ambientais", icon: TreePine }
              ].map((audience) => (
                <div key={audience.name} className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-accent/30 transition-all duration-300 hover:bg-accent/5">
                  <audience.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">{audience.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultichannelSection;