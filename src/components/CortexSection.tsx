const CortexSection = () => {
  return (
    <section id="cortex" className="section-padding bg-muted/5">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="card-glow rounded-xl p-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Cortex-SBX <span className="text-muted-foreground text-xl">(IA como camada cognitiva)</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              O <strong className="text-foreground">Cortex-SBX</strong> transforma regras de negócio e contratos em <strong className="text-foreground">protocolos executáveis</strong>: cobrança, liberação, preferências (Stalking Horse), validações e alertas — tudo orquestrado e auditável.
            </p>
            
            <div className="space-y-4">
              {[
                {
                  title: "Camada semântica",
                  description: "interpreta regras, decide e instrui a execução."
                },
                {
                  title: "Operação programável",
                  description: "menos controles manuais, mais confiabilidade."
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Arquitetura em camadas</h2>
            <p className="text-muted-foreground mb-6">
              Execução (automação), Orquestração Semântica (LLM central) e Adaptação/Aprendizado (memória e logs). A ITF ajusta-se ao contexto do contrato.
            </p>
            
            <div className="flex flex-wrap gap-2">
              {[
                "Regras → Protocolo",
                "Logs → Auditoria", 
                "Dados → Decisão"
              ].map((process) => (
                <span key={process} className="badge-pill">
                  {process}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CortexSection;