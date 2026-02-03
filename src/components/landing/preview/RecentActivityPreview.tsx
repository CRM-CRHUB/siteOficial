import {
  ArrowRightLeft,
  MessageSquare,
  PhoneCall,
  CalendarClock,
  CalendarDays,
} from "lucide-react";

const activities = [
  {
    id: 1,
    title: "Card movido",
    description: "De Lead para Cliente",
    time: "2 min atrás",
    icon: ArrowRightLeft,
    type: "move",
  },
  {
    id: 2,
    title: "Interação criada",
    description: "Contato com João Silva",
    time: "10 min atrás",
    icon: MessageSquare,
    type: "interaction",
  },
  {
    id: 3,
    title: "Ligar para cliente",
    description: "Maria Oliveira • 15:00",
    time: "Hoje",
    icon: PhoneCall,
    type: "call",
  },
  {
    id: 4,
    title: "Reunião agendada",
    description: "Pedro Costa • 09:30",
    time: "Amanhã",
    icon: CalendarClock,
    type: "meeting",
  },
  {
    id: 5,
    title: "Evento",
    description: "Demo do produto • 25/02",
    time: "Em 3 dias",
    icon: CalendarDays,
    type: "event",
  },
];

const typeStyles = {
  move: "bg-primary/10 text-primary",
  interaction: "bg-chart-3/10 text-chart-3",
  call: "bg-success/10 text-success",
  meeting: "bg-chart-2/10 text-chart-2",
  event: "bg-warning/10 text-warning",
};

export function RecentActivity() {
  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-soft">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-card-foreground">
            Atividades Recentes
          </h3>
          <p className="text-sm text-muted-foreground">
            Criado na última semana
          </p>
        </div>

        <button className="text-sm font-medium text-primary hover:text-primary/80">
          Ver todos
        </button>
      </div>

      {/* Lista */}
      <div className="space-y-3">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.id}
              className="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-muted/50"
            >
              {/* Ícone */}
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-md ${typeStyles[activity.type]}`}
              >
                <Icon className="h-5 w-5" />
              </div>

              {/* Conteúdo */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-card-foreground">
                  {activity.title}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {activity.description}
                </p>
              </div>

              {/* Tempo */}
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {activity.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
