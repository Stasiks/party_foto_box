export default function Background() {
  return (
    <>
      {/* Слой 1: Радиальный градиент для визуальной глубины */}
      <div 
        className="fixed inset-0 z-[-2] pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-50 via-zinc-100/80 to-zinc-200/50" 
      />
      
      {/* Слой 2: SVG-шум (Grain) */}
      <div 
        className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.3] mix-blend-color-burn"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </>
  );
}