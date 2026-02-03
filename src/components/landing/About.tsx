import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Centralize a gestão do  <span className="text-primary">seu negócio</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6">
              Uma plataforma completa para organizar vendas, clientes e processos
              em um único lugar.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Nosso sistema foi pensado para facilitar o dia a dia da sua equipe.
              Com uma interface limpa e objetiva, você acompanha oportunidades,
              tarefas, clientes e métricas sem complicação.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Tudo funciona de forma integrada, ajudando você a tomar decisões
              mais rápidas e vender mais.
            </p>
          </div>

          {/* Right Image */}
          <Card className="bg-background border-border shadow-lg">
            <CardContent className="p-2">
              <img
                src="/images/dashboard.png"
                alt="Captura de tela do sistema"
                className="rounded-lg w-full h-auto"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
