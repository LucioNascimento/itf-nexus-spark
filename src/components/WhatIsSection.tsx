const WhatIsSection = () => {
  return (
    <section id="o-que-e" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="card-glow rounded-xl p-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">O que é a ITF-SBX</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A <strong className="text-foreground">Infraestrutura Tecnológica Financeira</strong> que organiza mercados antes dispersos, conectando <strong className="text-foreground">dados, contratos e execução</strong>. Nossa lógica é de <em>infraestrutura de mercado</em>: regras claras, contas de pagamento, DvP e trilhas auditáveis — em vez de anúncios soltos ou operações manuais.
            </p>
            
            <div className="space-y-4">
              {[
                {
                  title: "Mercados organizados",
                  description: "leilões, balcão, tomada de preço e compre já na mesma espinha dorsal."
                },
                {
                  title: "DvP por padrão",
                  description: "entrega e transferência do bem ocorrem somente contra pagamento depositado."
                },
                {
                  title: "Multicanais",
                  description: "publicação, disputa e liquidação em diversos canais simultâneos."
                },
                {
                  title: "Compliance",
                  description: "KYC, documentos por contrato, logs e auditoria end-to-end."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">{item.title}</strong> — {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-glow rounded-xl p-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Módulos de atuação</h2>
            <p className="text-muted-foreground mb-6">
              A ITF-SBX opera por módulos, cada um com regras e canais específicos.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {["Judicial", "Administrativo", "Rural", "Corporativo"].map((module) => (
                <span key={module} className="badge-pill">
                  {module}
                </span>
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