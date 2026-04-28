"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

const features = [
  { title: "Comparador inteligente", description: "Compara el precio de cada producto entre supermercados y elige siempre la opción más barata para tu cesta.", color: "#6B7A3A" },
  { title: "Modo Super Ahorro", description: "Activa el modo ahorro y Caleo filtra automáticamente solo los productos comparables, maximizando tu ahorro.", color: "#B8A06A" },
  { title: "Listas de la compra", description: "Crea listas personalizadas y recibe alertas cuando alguno de tus productos disponibles esté en oferta.", color: "#C17F3A" },
  { title: "Ofertas en tiempo real", description: "Descubre las mejores ofertas de la semana\nen Mercadona y DIA y filtra por categoría o supermercado.", color: "#6B7A3A" },
  { title: "Historial de precios", description: "Visualiza la evolución del precio de cualquier producto y detecta cuándo es el mejor momento para comprar.", color: "#B8A06A" },
  { title: "Asistente de Caleo", description: "Pregúntale a nuestro asistente qué comprar, dónde ahorrar más o que te genere una lista completa a tu gusto de forma personalizada.", color: "#8C7B6B" },
];

const DURATION = 4000;

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  // Increments on each unpause so the bar animation restarts in sync with the timer
  const [resumeKey, setResumeKey] = useState(0);

  useEffect(() => {
    if (!isInView || paused) return;
    let cancelled = false;
    const t = setTimeout(() => {
      if (!cancelled) setActive(prev => (prev + 1) % features.length);
    }, DURATION);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [isInView, active, paused, resumeKey]);

  const goTo = (i: number) => setActive(i);
  const handleUnpause = () => {
    setPaused(false);
    setResumeKey(k => k + 1);
  };

  const current = features[active];

  return (
    <motion.section id="caracteristicas" ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      style={{ padding: "160px 24px", background: "#F5F0E8", position: "relative", overflow: "hidden" }}>

      {/* Fondo */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-20%", right: "-10%", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(107,122,58,0.05) 0%, transparent 60%)" }} />
        <div style={{ position: "absolute", bottom: "-20%", left: "-10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(184,160,106,0.04) 0%, transparent 60%)" }} />
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center", marginBottom: 72 }}
        >
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
          initial={{ opacity: 0, y: 48, scale: 0.96 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={handleUnpause}
          style={{ background: "transparent", border: "1.5px solid rgba(232,223,208,0.7)", borderRadius: 28, overflow: "hidden", boxShadow: "0 12px 48px rgba(61,43,31,0.06)", maxWidth: 780, margin: "0 auto" }}
        >
          {/* Barras de progreso estilo story */}
          <div style={{ display: "flex", gap: 4, padding: "16px 20px 0" }}>
            {features.map((_, i) => (
              <div key={i} onClick={() => goTo(i)}
                style={{ flex: 1, height: 3, background: "#E8DFD0", borderRadius: 99, overflow: "hidden", cursor: "pointer" }}>
                {i === active ? (
                  <motion.div
                    key={`${active}-${resumeKey}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: DURATION / 1000, ease: "linear" }}
                    style={{ height: "100%", background: "#6B7A3A", borderRadius: 99 }}
                  />
                ) : (
                  <div style={{ height: "100%", background: "#6B7A3A", borderRadius: 99, width: i < active ? "100%" : "0%", transition: "width 0.2s" }} />
                )}
              </div>
            ))}
          </div>

          {/* Contenido */}
          <div style={{ padding: isMobile ? "24px 20px 28px" : "32px 40px 40px", minHeight: 320, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <AnimatePresence mode="wait">
              <motion.div key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{ flex: 1 }}
              >
                {/* Título */}
                <h3 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontFamily: "var(--font-display)", color: "#3D2B1F", margin: "0 0 16px", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
                  {current.title}
                </h3>

                {/* Descripción */}
                <p style={{ fontSize: "1rem", color: "#8C7B6B", fontFamily: "var(--font-sans)", lineHeight: 1.75, margin: 0, maxWidth: 520, whiteSpace: isMobile ? "normal" : "pre-line" }}>
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
      </div>
    </motion.section>
  );
}