import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "ITF é marketplace?",
      answer: "Não. A ITF-SBX é uma infraestrutura de mercado que organiza publicação, disputa e liquidação sob um único contrato e trilha de execução."
    },
    {
      question: "Compre Já permite proposta?",
      answer: "Não. Se há proposta ou contraproposta, trata-se de Mercado Balcão. Compre Já é preço fixo, direto e irrevogável."
    },
    {
      question: "Tomada de Preço = Leilão de envelope fechado?",
      answer: "Sim, na prática é o nosso certame em envelope fechado. Ofertantes não visualizam valores concorrentes."
    },
    {
      question: "Quem define Stalking Horse e liberações?",
      answer: "O contrato configurado no terminal define Stalking Horse e as regras de liberação publicadas no pós-leilão."
    },
    {
      question: "O ativo 'migra' do leilão para o balcão?",
      answer: "Não. O processo de negociação pós-evento segue a lógica de balcão, mas permanece na mesma jornada do leilão."
    },
    {
      question: "Valor de reserva x valor de venda",
      answer: "Reserva é parâmetro de aceite na configuração. Valor de venda é o resultado — pode ser inferior ao reserva com aceite manual."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-muted/5">
      <div className="container-custom">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
          FAQ — Esclarecimentos rápidos
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4 mt-12">
          {faqs.map((faq, index) => (
            <div key={index} className="card-glow rounded-xl overflow-hidden">
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/10 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="font-semibold text-foreground">{faq.question}</h3>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;