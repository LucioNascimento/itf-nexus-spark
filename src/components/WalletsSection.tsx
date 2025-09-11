import { Wallet, Shield, FileCheck, CreditCard, CheckCircle, Lock, Users, Banknote } from "lucide-react";

const WalletsSection = () => {
  return (
    <section id="wallets" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="card-glow rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
                <Wallet className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Wallets & Contas de Pagamento</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              A participação é vinculada à identidade e à capacidade de pagamento do comprador.
            </p>
            
            <div className="space-y-4">
              {[
                {
                  title: "Identidade",
                  description: "KYC/credenciais conforme o evento e o módulo.",
                  icon: Users
                },
                {
                  title: "Documentação",
                  description: "background check e anexos exigidos pelo contrato.",
                  icon: FileCheck
                },
                {
                  title: "Conta de pagamento",
                  description: "depósito de recursos para transações vinculativas.",
                  icon: CreditCard
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 hover:bg-primary/5">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
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
              <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">DvP por padrão</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              <strong className="text-foreground">Delivery versus Payment</strong>: a entrega/transferência do bem só ocorre contra pagamento depositado em conta vinculada/escrow. Split automático (comissões, taxas) na liquidação.
            </p>
            
            <div className="space-y-4">
              {[
                {
                  title: "Liquidação segura",
                  description: "regras parametrizadas no terminal.",
                  icon: CheckCircle
                },
                {
                  title: "Trilha auditável",
                  description: "logs e reconciliação de ponta a ponta.",
                  icon: Lock
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg border border-border/50 hover:border-accent/30 transition-all duration-300 hover:bg-accent/5">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
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