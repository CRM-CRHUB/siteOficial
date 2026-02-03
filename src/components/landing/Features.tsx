import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, CheckSquare, Zap, User, CheckCircle2, LayoutDashboard, Sparkles } from "lucide-react";
import { DashboardPreview } from "./DashboardPreview";
import { FlexibilityIllustration } from "../feature/FlexibilityIllustration";

const features = [
  {
    icon: BarChart3,
    title: "Pipeline Personalizável",
    description:
      "Visualize e gerencie todas as oportunidades do funil, do primeiro contato ao fechamento.",
  },
  {
    icon: CheckSquare,
    title: "Gestão de Tarefas",
    description:
      "Organize atividades, prazos e responsáveis para manter sua equipe produtiva.",
  },
  {
    icon: Zap,
    title: "Automação de Processos",
    description:
      "Automatize tarefas repetitivas e ganhe eficiência nos fluxos do dia a dia.",
  },
  {
    icon: User,
    title: "Visão 360° do Cliente",
    description:
      "Centralize histórico, contatos, negociações e interações em um único lugar.",
  },
];

const Features = () => {
  return (
    <>

      <section
        id="sobre"
        className="py-16 md:py-24 bg-secondary/30"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-10 items-center">
            <div className="max-w-md">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Conheça o{" "}
                <span className="text-primary">CRM</span>{" "}
                <span className="inline-flex items-center gap-2 align-middle">
                  <span className="w-16 h-8 rounded-lg gradient-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">CRhub</span>
                  </span>
                  {/* <span className="font-bold">Crhub</span> */}
                </span>
              </h2>

              <p className="text-muted-foreground text-base mb-4">
                Uma plataforma completa para organizar vendas, clientes e processos em um
                único lugar.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    Interface limpa e intuitiva para facilitar a rotina das equipes.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <LayoutDashboard className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    Controle completo de oportunidades, tarefas, clientes e métricas.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <BarChart3 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    Informações integradas para decisões mais rápidas e estratégicas.
                  </span>
                </li>
              </ul>
            </div>
            <DashboardPreview />
          </div>

          <div className="mt-16 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group bg-background border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Conteúdo */}
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-5">
                O <span className="text-primary">Crhub</span> é para minha empresa?
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Sim. O CRHub foi desenvolvido para se adaptar à realidade de diferentes tipos
                de negócios. Ele não é um CRM engessado, mas uma plataforma flexível que se molda
                à forma como sua empresa trabalha.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Escritórios, advogados e prestadores de serviço
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Dentistas, nutricionistas, clínicas e profissionais da saúde
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Empresas de tecnologia, startups e agências
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Varejo, times comerciais e operações de vendas
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Negócios em crescimento que precisam de organização e visão
                  </span>
                </li>
              </ul>
            </div>

            {/* Visual */}


            <div className="hidden lg:flex justify-center">
              <FlexibilityIllustration />
            </div>

          </div>

        </div>
      </section>

    </>
  );
};

export default Features;
