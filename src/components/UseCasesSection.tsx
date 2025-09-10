const UseCasesSection = () => {
  const useCases = [
    {
      title: "Venda judicial organizada",
      description: "Múltiplas praças, pós-leilão configurado e DvP garantindo segurança jurídica e financeira."
    },
    {
      title: "Mercado de balcão corporativo", 
      description: "Negociação formal com aceite e garantias. Split automático de comissões na liquidação."
    },
    {
      title: "Ativos ambientais",
      description: "Curadores licenciados operam seus canais, com liquidação vinculativa e trilhas auditáveis."
    }
  ];

  return (
    <section id="usos" className="section-padding">
      <div className="container-custom">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Casos de uso</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="card-glow rounded-xl p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3 text-foreground">{useCase.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;