const MultichannelSection = () => {
  return (
    <section id="multicanais" className="section-padding bg-muted/5">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="card-glow rounded-xl p-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Publicação & Execução Multicanais</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              O terminal do vendedor configura o contrato uma vez, e a ITF-SBX publica em <strong className="text-foreground">vários canais</strong> (canais próprios, parceiros, franquias por módulo), mantendo <strong className="text-foreground">uma única trilha de execução e liquidação</strong>.
            </p>
            
            <div className="space-y-4">
              {[
                {
                  title: "Uma configuração",
                  description: "múltiplas praças/mercados/canais."
                },
                {
                  title: "Mesma regra, mesmo contrato",
                  description: "sem divergência operacional."
                },
                {
                  title: "KPIs consolidados",
                  description: "alcance, disputa, conversão e liquidação."
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Para quem é</h2>
            <p className="text-muted-foreground mb-6">
              Tribunais, governos e mercados privados que precisam de <strong className="text-foreground">escala, conformidade e liquidez</strong> sem refazer sua infraestrutura.
            </p>
            
            <div className="flex flex-wrap gap-2">
              {[
                "Bancos & IPs",
                "Tribunais", 
                "Órgãos públicos",
                "Corporates",
                "Curadores de ativos ambientais"
              ].map((audience) => (
                <span key={audience} className="badge-pill">
                  {audience}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultichannelSection;