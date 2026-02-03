import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", current: 5200, previous: 4800 },
  { month: "Fev", current: 6100, previous: 5600 },
  { month: "Mar", current: 7500, previous: 6900 },
  { month: "Abr", current: 6800, previous: 7200 },
  { month: "Mai", current: 8200, previous: 7900 },
  { month: "Jun", current: 9100, previous: 8600 },
  { month: "Jul", current: 9800, previous: 9300 },
  { month: "Ago", current: 10400, previous: 9900 },
  { month: "Set", current: 11200, previous: 10700 },
  { month: "Out", current: 11800, previous: 11400 },
  { month: "Nov", current: 12500, previous: 12000 },
  { month: "Dez", current: 13200, previous: 12800 },
];

export function CashFlowBarChart() {
  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-soft">
      {/* HEADER */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-card-foreground">
            Receita
          </h3>

          <p className="block sm:hidden text-xs text-muted-foreground">
            Comparativo
          </p>

          <p className="hidden sm:block text-sm text-muted-foreground">
            Comparativo mês atual x mês anterior
          </p>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded bg-primary" />
            <span className="text-muted-foreground">Atual</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded bg-chart-2" />
            <span className="text-muted-foreground">Anterior</span>
          </div>
        </div>
      </div>

      {/* CHART */}
      <div className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barGap={6}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="hsl(220, 13%, 91%)"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(220, 10%, 46%)", fontSize: 12 }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(220, 10%, 46%)", fontSize: 12 }}
              tickFormatter={(value) => `R$ ${value / 1000}k`}
            />

            <Tooltip
              formatter={(value: number) =>
                `R$ ${value.toLocaleString("pt-BR")}`
              }
              contentStyle={{
                backgroundColor: "hsl(0, 0%, 100%)",
                border: "1px solid hsl(220, 13%, 91%)",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.05)",
              }}
              labelStyle={{
                color: "hsl(220, 20%, 10%)",
                fontWeight: 600,
              }}
            />

            <Bar
              dataKey="current"
              name="Mês Atual"
              fill="hsl(220, 70%, 50%)"
              radius={[6, 6, 0, 0]}
            />

            <Bar
              dataKey="previous"
              name="Mês Anterior"
              fill="hsl(173, 58%, 39%)"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
