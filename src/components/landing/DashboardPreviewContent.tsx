import { CashFlowBarChart } from "./preview/CashFlowBarChart";
import { MetricCardPreview } from "./preview/MetricCardPreview";

import { FolderKanban, User2, Calendar, EditIcon } from "lucide-react";
import { RecentActivity } from "./preview/RecentActivityPreview";

export function DashboardPreviewContent() {
  return (
    <div className="space-y-6">
      
      {/* Header */}
     

      {/* Metrics */}
      <div className="grid grid-cols-4 gap-4">
        <MetricCardPreview
          title="Clientes Ativos"
          value="10"
          change="+10 novos esta semana"
          changeType="positive"
          icon={User2}
        />
        <MetricCardPreview
          title="Cards em Aberto"
          value="150"
          change="+180 novos esta semana"
          changeType="positive"
          icon={FolderKanban}
        />
        <MetricCardPreview
          title="Agendamentos"
          value="12"
          change="3 concluídos este mês"
          changeType="neutral"
          icon={Calendar}
        />
        <MetricCardPreview
          title="Tarefas"
          value="10"
          change="10 concluídas esta semana"
          changeType="negative"
          icon={EditIcon}
        />
      </div>

      {/* Charts + Activity */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <CashFlowBarChart />
        </div>
        <RecentActivity />
      </div>

    </div>
  );
}
