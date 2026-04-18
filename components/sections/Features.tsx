"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { GitCompare, List, Tag, MessageSquare, TrendingDown, Zap } from "lucide-react";

const features = [
  {
    icon: GitCompare,
    title: "Comparador inteligente",
    description: "Compara el precio de cada producto entre supermercados y elige siempre la opción más barata para tu cesta.",
    tag: "Core",
    color: "#6B7A3A",
    bg: "rgba(107,122,58,0.06)",
  },
  {
    icon: Zap,
    title: "Modo Super Ahorro",
    description: "Activa el modo ahorro y Caleo filtra automáticamente solo los productos comparables, maximizando tu ahorro.",
    tag: "Exclusivo",
    color: "#B8A06A",
    bg: "rgba(184,160,106,0.08)",
  },
  {
    icon: List,
    title: "Listas de la compra",
    description: "Crea listas personalizadas y recibe alertas cuando algún producto esté en oferta.",
    tag: "Organización",
    color: "#C17F3A",
    bg: "rgba(193,127,58,0.07)",
  },
  {
    icon: Tag,
    title: "Ofertas en tiempo real",
    description: "Descubre las mejores ofertas de la semana en Mercadona y DIA. Filtra por categoría o supermercado.",
    tag: "Ofertas",
    color: "#6B7A3A",
    bg: "rgba(107,122,58,0.06)",
  },
  {
    icon: TrendingDown,
    title: "Historial de precios",
    description: "Visualiza la evolución del precio de cualquier producto y detecta cuándo es el mejor momento para comprar.",
    tag: "Análisis",
    color: "#B8A06A",
    bg: "rgba(184,160,106,0.08)",
  },
  {
    icon: MessageSquare,
    title: "Chat IA",
    description: "Pregúntale a nuestro asistente qué comprar, dónde ahorrar más o que te genere una lista completa.",
    tag: "Próximamente",
    color: "#8C7B6B",
    bg: "rgba(140,123,107,0.06)",
  },
];

const DURATION = 4000;

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isInView) return;
    startProgress();
    return () => clearTimers();
  }, [isInView, active, paused]);

  const clearTimers = () => {
    if (intervalRef.current) clearTimeout(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
  };

  const startProgress = () => {
    if (paused) return;
    clearTimers();
    setProgress(0);
    const step = 100 / (DURATION / 50);
    progressRef.current = setInterval(() => {
      setProgress(p => {
        if (p >= 100) return 100;
        return p + step;
      });
    }, 50);
    intervalRef.current = setTimeout(() => {
      setActive(prev => (prev + 1) % features.length);
    }, DURATION);
  };

  const goTo = (i: number) => {
    clearTimers();
    setActive(i);
    setProgress(0);
  };

  const current = features[active];
  const Icon = current.icon;

  return (
    <section id="caracteristicas" ref={ref}
      style={{ padding: "120px 24px", background: "#EDE8DF", position: "relative", overflow: "hidden" }}>

      {/* Fondo */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-20%", right: "-10%", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(107,122,58,0.06) 0%, transparent 60%)" }} />
        <div style={{ position: "absolute", bottom: "-20%", left: "-10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(184,160,106,0.05) 0%, transparent 60%)" }} />
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(107,122,58,0.1)", border: "1px solid rgba(107,122,58,0.2)", borderRadius: 99, padding: "6px 16px", marginBottom: 24 }}>
            <span style={{ fontSize: "0.75rem", color: "#6B7A3A", fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.05em" }}>CARACTERÍSTICAS</span>
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "var(--font-display)", color: "#3D2B1F", margin: "0 0 16px", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Todo lo que necesitas<br />
            <em style={{ color: "#6B7A3A" }}>para comprar mejor</em>
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#8C7B6B", fontFamily: "var(--font-sans)", maxWidth: 440, margin: "0 auto", lineHeight: 1.7 }}>
            Herramientas pensadas para que tomes decisiones más inteligentes en cada compra.
          </p>
        </motion.div>

        {/* Story viewer */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          onMouseEnter={() => { setPaused(true); clearTimers(); }}
          onMouseLeave={() => { setPaused(false); }}
          style={{ background: "white", border: "1.5px solid #E8DFD0", borderRadius: 28, overflow: "hidden", boxShadow: "0 12px 48px rgba(61,43,31,0.08)", maxWidth: 780, margin: "0 auto" }}
        >
          {/* Barras de progreso estilo story */}
          <div style={{ display: "flex", gap: 4, padding: "16px 20px 0" }}>
            {features.map((_, i) => (
              <div key={i} onClick={() => goTo(i)}
                style={{ flex: 1, height: 3, background: "#E8DFD0", borderRadius: 99, overflow: "hidden", cursor: "pointer" }}>
                <motion.div
                  style={{
                    height: "100%",
                    background: "#6B7A3A",
                    borderRadius: 99,
                    width: i < active ? "100%" : i === active ? `${progress}%` : "0%",
                    transition: i === active ? "none" : "width 0.2s",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Contenido */}
          <div style={{ padding: "32px 40px 40px", minHeight: 320, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <AnimatePresence mode="wait">
              <motion.div key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{ flex: 1 }}
              >
                {/* Tag + icono */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
                  <span style={{ fontSize: "0.72rem", color: current.color, fontFamily: "var(--font-sans)", fontWeight: 700, background: `${current.color}12`, border: `1px solid ${current.color}20`, borderRadius: 99, padding: "5px 12px", letterSpacing: "0.05em" }}>
                    {current.tag}
                  </span>
                  <div style={{ width: 52, height: 52, borderRadius: 16, background: current.bg, border: `1.5px solid ${current.color}20`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={24} color={current.color} />
                  </div>
                </div>

                {/* Título */}
                <h3 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontFamily: "var(--font-display)", color: "#3D2B1F", margin: "0 0 16px", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
                  {current.title}
                </h3>

                {/* Descripción */}
                <p style={{ fontSize: "1rem", color: "#8C7B6B", fontFamily: "var(--font-sans)", lineHeight: 1.75, margin: 0, maxWidth: 520 }}>
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navegación bottom */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 36 }}>
              {/* Dots */}
              <div style={{ display: "flex", gap: 8 }}>
                {features.map((_, i) => (
                  <button key={i} onClick={() => goTo(i)}
                    style={{ width: i === active ? 20 : 7, height: 7, borderRadius: 99, background: i === active ? "#6B7A3A" : "#E8DFD0", border: "none", cursor: "pointer", padding: 0, transition: "all 0.3s ease" }}
                  />
                ))}
              </div>

              {/* Flechas */}
              <div style={{ display: "flex", gap: 8 }}>
                <button onClick={() => goTo((active - 1 + features.length) % features.length)}
                  style={{ width: 40, height: 40, borderRadius: 12, background: "#F5F0E8", border: "1.5px solid #E8DFD0", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", color: "#8C7B6B" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#E8DFD0")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#F5F0E8")}
                >←</button>
                <button onClick={() => goTo((active + 1) % features.length)}
                  style={{ width: 40, height: 40, borderRadius: 12, background: "#6B7A3A", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", color: "white" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#556030")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#6B7A3A")}
                >→</button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Preview de features abajo */}
        <div style={{ display: "flex", gap: 10, marginTop: 20, justifyContent: "center", flexWrap: "wrap" }}>
          {features.map((f, i) => {
            const FIcon = f.icon;
            return (
              <motion.button key={i} onClick={() => goTo(i)}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.07 }}
                style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 99, border: `1.5px solid ${i === active ? f.color : "#E8DFD0"}`, background: i === active ? `${f.color}10` : "white", cursor: "pointer", transition: "all 0.2s" }}
              >
                <FIcon size={13} color={i === active ? f.color : "#8C7B6B"} />
                <span style={{ fontSize: "0.78rem", fontFamily: "var(--font-sans)", fontWeight: i === active ? 700 : 400, color: i === active ? f.color : "#8C7B6B", whiteSpace: "nowrap" }}>
                  {f.title}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}