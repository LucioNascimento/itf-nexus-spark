import { Gavel, Timer, Handshake, Eye, ShoppingCart, Settings, TrendingUp, Users, Lock, Zap, Target, Clock } from "lucide-react";

const MarketTypesSection = () => {
  const marketTypes = [
    {
      title: "Leilão",
      description: "Disputa competitiva. Pode ter extra time. Define o vencedor ou o direito de negociar após o evento, conforme regras do contrato.",
      icon: Gavel,
      color: "primary",
      features: [
        "Propostas abertas (públicas)",
        "Tomada de Preço (propostas fechadas)"
      ]
    },
    {
      title: "Pós-Leilão",
      description: "Etapa configurada no início do evento. Permite disputas adicionais e liberações de valor publicadas na tela do pós-leilão.",
      icon: Timer,
      color: "secondary",
      features: [
        "Stalking Horse com direito de preferência",
        "Encerramento já definido na publicação"
      ]
    },
    {
      title: "Balcão",
      description: "Negociação formal com aceite de condições e, quando exigido, depósito de garantia antes da proposta.",
      icon: Handshake,
      color: "accent",
      features: [
        "Proposta pode ser = ou < valor publicado",
        "Vendedor pode aceitar/recusar/contrapropor"
      ]
    },
    {
      title: "Tomada de Preço",
      description: "Certame em envelope fechado. Ofertantes não veem valores concorrentes; recebem apenas se estão no topo.",
      icon: Eye,
      color: "primary",
      features: [
        "Cronômetro e data de encerramento",
        "Valor de referência ≠ valor mínimo"
      ]
    },
    {
      title: "Compre Já",
      description: "Preço fixo, transação direta e irrevogável. Sem proposta, sem negociação.",
      icon: ShoppingCart,
      color: "secondary",
      features: [
        "Pode haver prazo de pagamento",
        "Futuro: modo holandês (drop in price)"
      ]
    },
    {
      title: "Regras centrais",
      description: "O valor de reserva é parâmetro de aceite mínimo na configuração. O valor de venda é resultado — pode ficar abaixo do reserva com aceite manual.",
      icon: Settings,
      color: "accent",
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
            <div key={index} className={`card-glow rounded-xl p-6 hover:scale-105 transition-all duration-300 border border-${type.color}/20 hover:border-${type.color}/40`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br from-${type.color}/20 to-${type.color}/10 border border-${type.color}/30`}>
                  <type.icon className={`w-6 h-6 text-${type.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{type.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">{type.description}</p>
              
              {type.features.length > 0 && (
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-3">
                      <Zap className={`w-3 h-3 text-${type.color} mt-1 flex-shrink-0`} />
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