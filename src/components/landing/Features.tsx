import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart3,
  CheckSquare,
  Zap,
  User,
  CheckCircle2,
  LayoutDashboard,
  Sparkles,
} from "lucide-react";
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
      {/* ===== SOBRE / DASHBOARD ===== */}
      <section id="sobre" className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">

          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-center">
            <div className="max-w-md">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Conheça o{" "}
                <span className="text-primary">CRM</span>{" "}
                <span className="inline-flex items-center gap-2">
                  <span className="w-16 h-8 rounded-lg gradient-primary flex items-center justify-center">
                    <span className="text-primary-foreground text-sm font-bold">
                      CRhub
                    </span>
                  </span>
                </span>
              </h2>

              <p className="text-muted-foreground mb-5">
                Uma plataforma completa para organizar vendas, clientes e processos em um único lugar.
              </p>

              <ul className="space-y-3">
                <li className="flex gap-3">
                  <Sparkles className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Interface limpa e intuitiva.
                  </span>
                </li>

                <li className="flex gap-3">
                  <LayoutDashboard className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Controle total do negócio.
                  </span>
                </li>

                <li className="flex gap-3">
                  <BarChart3 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Dados claros para decisões rápidas.
                  </span>
                </li>
              </ul>
            </div>

            <DashboardPreview />
          </div>

          {/* FEATURES GRID */}
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-background hover:border-primary/40 hover:shadow-lg transition"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>

                  <h3 className="font-semibold mb-2">{feature.title}</h3>

                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PLANO ===== */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Plano{" "}
              <span className="inline-flex w-16 h-8 rounded-lg gradient-primary items-center justify-center">
                <span className="text-primary-foreground text-sm font-bold">
                  ELITE
                </span>
              </span>
            </h2>

            <p className="text-muted-foreground mb-4">
              Um único plano, sem limitações escondidas.
            </p>

            <ul className="space-y-3">
              {[
                "Até 4 usuários inclusos",
                "Usuários extras por R$ 10/mês",
                "Negócios ilimitados",
                "Campos personalizados",
                "E muito mais...",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="hover:shadow-xl transition">
              <CardContent className="p-6">
                <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Mais escolhido
                </span>

                <h3 className="text-3xl font-bold mt-4">R$ 89,90</h3>

                <p className="text-sm text-muted-foreground mb-5">por mês</p>

                <button className="w-full h-11 border-2 border-primary rounded-lg hover:bg-primary/5 transition">
                  Adquirir Mensal
                </button>
              </CardContent>
            </Card>

            <Card className="border-primary shadow-xl">
              <CardContent className="p-6">
                <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Mais econômico
                </span>

                <h3 className="text-3xl font-bold mt-4">R$ 899,00</h3>

                <p className="text-sm text-muted-foreground mb-5">por ano</p>

                <button className="w-full h-11 border-2 border-primary rounded-lg hover:bg-primary/5 transition">
                  Adquirir Anual
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== PARA QUEM É ===== */}
      {/* <section className="py-12 md:py-16 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              O <span className="text-primary">CRhub</span> é para minha empresa?
            </h2>

            <p className="text-muted-foreground mb-5">
              O CRhub se adapta à realidade do seu negócio — não é engessado.
            </p>

            <ul className="space-y-3">
              {[
                "Prestadores de serviço",
                "Clínicas e profissionais da saúde",
                "Agências e startups",
                "Times comerciais",
                "Negócios em crescimento",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex justify-center">
            <FlexibilityIllustration />
          </div>

        </div>
      </section> */}
    </>
  );
};

export default Features;
