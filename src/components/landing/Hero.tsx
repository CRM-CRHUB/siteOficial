import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Phone, SmartphoneIcon, User2Icon, Users, Zap } from "lucide-react";
import { HeroIllustration } from "../hero/HeroIllustration";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              CRM inteligente para sua equipe
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-6">
              Gerencie suas vendas com{" "}
              <span className="text-primary">simplicidade</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Centralize clientes, oportunidades e tarefas em uma única plataforma.
              Aumente a produtividade da sua equipe e feche mais negócios.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gradient-primary border-0 text-base">
                Conhecer o Sistema
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                <SmartphoneIcon />
                Entrar em Contato
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <HeroIllustration />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
