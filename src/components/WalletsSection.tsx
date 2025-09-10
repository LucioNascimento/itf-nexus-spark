const WalletsSection = () => {
  return (
    <section id="wallets" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="card-glow rounded-xl p-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Wallets & Contas de Pagamento</h2>
            <p className="text-muted-foreground mb-6">
              A participação é vinculada à identidade e à capacidade de pagamento do comprador.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-foreground">Identidade</strong> — KYC/credenciais conforme o evento e o módulo.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-foreground">Documentação</strong> — background check e anexos exigidos pelo contrato.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-foreground">Conta de pagamento</strong> — depósito de recursos para transações vinculativas.
                </div>
              </li>
            </ul>
          </div>

          <div className="card-glow rounded-xl p-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">DvP por padrão</h2>
            <p className="text-muted-foreground mb-6">
              <strong className="text-foreground">Delivery versus Payment</strong>: a entrega/transferência do bem só ocorre contra pagamento depositado em conta vinculada/escrow. Split automático (comissões, taxas) na liquidação.
            </p>
            
            <div className="space-y-4">
              {[
                {
                  title: "Liquidação segura",
                  description: "regras parametrizadas no terminal."
                },
                {
                  title: "Trilha auditável",
                  description: "logs e reconciliação de ponta a ponta."
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
        </div>
      </div>
    </section>
  );
};

export default WalletsSection;