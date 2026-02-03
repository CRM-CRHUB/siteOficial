import { motion } from "framer-motion";
import { Users, Phone, BarChart3, Zap } from "lucide-react";

export function HeroIllustration() {
  return (
    <div className="relative w-[420px] h-[420px] flex items-center justify-center">

      {/* Glow estável */}
      <div className="absolute w-72 h-72 bg-primary/20 rounded-full blur-3xl" />

      {/* Conexões */}
      <svg
        className="absolute inset-0"
        viewBox="0 0 420 420"
        fill="none"
      >
        <motion.line
          x1="210" y1="210" x2="80" y2="120"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          strokeDasharray="4 8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
          opacity="0.3"
        />
        <motion.line
          x1="210" y1="210" x2="340" y2="280"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          strokeDasharray="4 8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
          opacity="0.3"
        />
        <motion.line
          x1="210" y1="210" x2="210" y2="360"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          strokeDasharray="4 8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 4 }}
          opacity="0.3"
        />
      </svg>

      {/* Core */}
      <motion.div
        animate={{ boxShadow: [
          "0 0 0 rgba(0,0,0,0)",
          "0 0 30px rgba(99,102,241,0.35)",
          "0 0 0 rgba(0,0,0,0)",
        ]}}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-48 h-48 rounded-2xl bg-background border shadow-xl flex flex-col items-center justify-center"
      >
        <Zap className="w-10 h-10 text-primary mb-2" />
        <p className="font-semibold">CRM Core</p>
        <span className="text-xs text-muted-foreground mt-1">
          Pronto para operar
        </span>
      </motion.div>

      {/* Cards */}
      <Module
        x={-130}
        y={-90}
        icon={<Users />}
        title="Leads"
        value="+128"
        delay={0.2}
      />

      <Module
        x={120}
        y={70}
        icon={<Phone />}
        title="Chamadas"
        value="37 hoje"
        delay={0.4}
      />

      <Module
        x={0}
        y={150}
        icon={<BarChart3 />}
        title="Receita"
        value="R$ 84k"
        delay={0.6}
      />
    </div>
  );
}

function Module({
  x,
  y,
  icon,
  title,
  value,
  delay,
}: {
  x: number;
  y: number;
  icon: React.ReactNode;
  title: string;
  value: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, x: 0, y: 0 }}
      animate={{ opacity: 1, scale: 1, x, y }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.08 }}
      className="absolute w-36 rounded-xl border bg-background shadow-lg px-4 py-3"
    >
      <div className="flex items-center gap-2 text-primary mb-1">
        {icon}
        <span className="text-sm font-medium">{title}</span>
      </div>
      <p className="text-lg font-bold">{value}</p>
    </motion.div>
  );
}
