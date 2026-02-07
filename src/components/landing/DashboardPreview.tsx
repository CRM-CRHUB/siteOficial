import { DashboardPreviewContent } from "./DashboardPreviewContent";

export function DashboardPreview() {
  return (
    <div className="relative rounded-xl border border-border bg-background shadow-xl overflow-hidden">
      
      {/* Fake header (opcional, mas deixa premium) */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-muted">
        <span className="h-3 w-3 rounded-full bg-destructive/70" />
        <span className="h-3 w-3 rounded-full bg-warning/70" />
        <span className="h-3 w-3 rounded-full bg-success/70" />
      </div>

      {/* Viewport */}
      <div className="relative h-[420px] overflow-hidden">
        <div className="absolute top-0 left-0 origin-top-left scale-[0.60] pointer-events-none">
          <div className="w-[1200px] p-6">
            <DashboardPreviewContent />
          </div>
        </div>
      </div>
    </div>
  );
}
