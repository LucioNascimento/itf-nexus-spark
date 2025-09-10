const MarketTypesSection = () => {
  const marketTypes = [
    {
      title: "Leilão",
      description: "Disputa competitiva. Pode ter extra time. Define o vencedor ou o direito de negociar após o evento, conforme regras do contrato.",
      features: [
        "Propostas abertas (públicas)",
        "Tomada de Preço (propostas fechadas)"
      ]
    },
    {
      title: "Pós-Leilão",
      description: "Etapa configurada no início do evento. Permite disputas adicionais e liberações de valor publicadas na tela do pós-leilão.",
      features: [
        "Stalking Horse com direito de preferência",
        "Encerramento já definido na publicação"
      ]
    },
    {
      title: "Balcão",
      description: "Negociação formal com aceite de condições e, quando exigido, depósito de garantia antes da proposta.",
      features: [
        "Proposta pode ser = ou < valor publicado",
        "Vendedor pode aceitar/recusar/contrapropor"
      ]
    },
    {
      title: "Tomada de Preço",
      description: "Certame em envelope fechado. Ofertantes não veem valores concorrentes; recebem apenas se estão no topo.",
      features: [
        "Cronômetro e data de encerramento",
        "Valor de referência ≠ valor mínimo"
      ]
    },
    {
      title: "Compre Já",
      description: "Preço fixo, transação direta e irrevogável. Sem proposta, sem negociação.",
      features: [
        "Pode haver prazo de pagamento",
        "Futuro: modo holandês (drop in price)"
      ]
    },
    {
      title: "Regras centrais",
      description: "O valor de reserva é parâmetro de aceite mínimo na configuração. O valor de venda é resultado — pode ficar abaixo do reserva com aceite manual.",
      features: []
    }
  ];

  return (
    <section id="mercados" className="section-padding">
      <div className="container-custom">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
          Tipos de Mercado <span className="text-muted-foreground">(na mesma infraestrutura)</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {marketTypes.map((type, index) => (
            <div key={index} className="card-glow rounded-xl p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3 text-foreground">{type.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{type.description}</p>
              
              {type.features.length > 0 && (
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketTypesSection;