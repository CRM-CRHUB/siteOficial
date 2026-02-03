import { motion } from "framer-motion";
import {
  Briefcase,
  HeartPulse,
  Laptop,
  Store,
  TrendingUp,
  Layers,
} from "lucide-react";

export function FlexibilityIllustration() {
  return (
    <div className="relative w-[420px] h-[420px] flex items-center justify-center">

      {/* Glow central */}
      <motion.div
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-72 h-72 bg-primary/20 rounded-full blur-3xl"
      />

      {/* Linhas de conexão */}
      <svg className="absolute inset-0" viewBox="0 0 420 420" fill="none">
        {[
          { x: 210, y: 60 },
          { x: 80, y: 210 },
          { x: 340, y: 210 },
          { x: 130, y: 330 },
          { x: 290, y: 330 },
        ].map((point, i) => (
          <motion.line
            key={i}
            x1="210"
            y1="210"
            x2={point.x}
            y2={point.y}
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            strokeDasharray="4 8"
            opacity="0.25"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </svg>

      {/* Core */}
      <motion.div
        animate={{
          boxShadow: [
            "0 0 0 rgba(0,0,0,0)",
            "0 0 40px rgba(99,102,241,0.35)",
            "0 0 0 rgba(0,0,0,0)",
          ],
          scale: [1, 1.03, 1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-48 h-48 rounded-2xl bg-background border shadow-xl flex flex-col items-center justify-center text-center"
      >
        <Layers className="w-10 h-10 text-primary mb-2" />
        <p className="font-semibold text-base">CRHub</p>
        <span className="text-xs text-muted-foreground mt-1">
          Flexível para qualquer negócio
        </span>
      </motion.div>

      {/* Módulos */}
      <PulseModule x={0} y={-150} delay={0} icon={<Briefcase />} label="Escritórios" />
      <PulseModule x={-150} y={0} delay={0.4} icon={<HeartPulse />} label="Saúde" />
      <PulseModule x={150} y={0} delay={0.8} icon={<Laptop />} label="Tecnologia" />
      <PulseModule x={-90} y={150} delay={1.2} icon={<Store />} label="Varejo" />
      <PulseModule x={90} y={150} delay={1.6} icon={<TrendingUp />} label="Vendas" />
    </div>
  );
}

function PulseModule({
  x,
  y,
  icon,
  label,
  delay,
}: {
  x: number;
  y: number;
  icon: React.ReactNode;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, x: 0, y: 0 }}
      animate={{
        opacity: 1,
        scale: [1, 1.06, 1],
        x,
        y,
        boxShadow: [
          "0 0 0 rgba(0,0,0,0)",
          "0 0 20px rgba(99,102,241,0.25)",
          "0 0 0 rgba(0,0,0,0)",
        ],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      whileHover={{ scale: 1.1 }}
      className="absolute w-36 rounded-xl border bg-background shadow-lg px-4 py-3 text-center"
    >
      <div className="flex items-center justify-center gap-2 text-primary mb-1">
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </div>
      <p className="text-xs text-muted-foreground">
        Fluxos personalizados
      </p>
    </motion.div>
  );
}
