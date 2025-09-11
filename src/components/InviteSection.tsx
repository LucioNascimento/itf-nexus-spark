import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { UserPlus, FileText, Send, Users } from "lucide-react";

const InviteSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Convite solicitado com sucesso!",
        description: "Obrigado! Responderemos por e-mail em breve.",
      });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="convite" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="card-glow rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
                <UserPlus className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Convites & Parcerias</h2>
            </div>
            <p className="text-muted-foreground mb-8">
              Estamos habilitando novos canais e módulos. Se você opera ativos com exigência de compliance e liquidação segura, fale com a gente.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Seu nome"
                  required
                  className="bg-background/50"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="voce@empresa.com"
                  required
                  className="bg-background/50"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="interest">Interesse</Label>
                <Select name="interest" required>
                  <SelectTrigger className="bg-background/50">
                    <SelectValue placeholder="Selecione seu interesse" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tribunais">Tribunais / Governo</SelectItem>
                    <SelectItem value="corporativo">Mercado Corporativo</SelectItem>
                    <SelectItem value="ambientais">Curadoria de Ativos Ambientais</SelectItem>
                    <SelectItem value="bancos">Bancos / Instituições de Pagamento</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Conte brevemente seu caso"
                  rows={4}
                  className="bg-background/50"
                />
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg"
                  disabled={isSubmitting}
                  className="gap-2"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Enviando..." : "Solicitar convite"}
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="mailto:parcerias@superbid.exchange">Falar com o time</a>
                </Button>
              </div>
            </form>
          </div>

          <div className="card-glow rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30">
                <FileText className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Materiais & Compliance</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Documentação de integração, políticas e requisitos de módulo estão disponíveis para parceiros aprovados.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Playbook do Terminal",
                "Regras por Módulo", 
                "Especificação DvP",
                "Cortex-SBX — Protocolos"
              ].map((doc) => (
                <span key={doc} className="badge-pill">
                  {doc}
                </span>
              ))}
            </div>
            
            <p className="text-muted-foreground">
              Solicite acesso após aprovação do convite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InviteSection;