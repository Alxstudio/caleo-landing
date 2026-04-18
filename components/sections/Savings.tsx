"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

function Counter({ from, to, suffix = "", prefix = "" }: { from: number; to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView || !ref.current) return;
    const controls = animate(from, to, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(value) {
        if (ref.current) ref.current.textContent = prefix + Math.round(value).toLocaleString("es-ES") + suffix;
      },
    });
    return controls.stop;
  }, [isInView]);

  return <span ref={ref}>{prefix}{from}{suffix}</span>;
}


const stats = [
  { value: 45,   suffix: "%", label: "de ahorro máximo por compra",    accent: "#6B7A3A" },
  { value: 187,  suffix: "€", label: "ahorro medio anual por usuario", accent: "#B8A06A" },
  { value: 7000, suffix: "+", label: "productos comparados",           accent: "#C17F3A" },
];

export default function Savings() {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="ahorro" ref={ref}
      style={{ padding: "120px 24px 120px", background: "#F5F0E8", position: "relative", overflow: "hidden" }}>

      {/* Fondo decorativo */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%,-50%)", width: 1000, height: 700, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(107,122,58,0.05) 0%, transparent 65%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(61,43,31,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 1, background: "linear-gradient(to right, transparent, rgba(184,160,106,0.4), transparent)", transformOrigin: "left" }}
        />
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "var(--font-display)", color: "#3D2B1F", margin: "0 0 18px", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.08 }}>
            El dinero que dejas{" "}
            <em style={{ color: "#6B7A3A", fontStyle: "italic" }}>de perder</em>
          </h2>
          <p style={{ fontSize: "1rem", color: "#8C7B6B", fontFamily: "var(--font-sans)", maxWidth: 480, margin: "0 auto", lineHeight: 1.75, fontWeight: 400 }}>
            Datos reales de productos disponibles en Caleo. No estimaciones, no promesas.
          </p>
        </motion.div>

        {/* Stats — texto plano sin contenedores */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 40 : 0 }}>
          {stats.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ textAlign: "center", padding: "0 24px" }}
            >
              <div style={{ fontSize: "clamp(2.6rem, 5vw, 3.8rem)", fontFamily: "var(--font-numeric)", fontWeight: 800, color: s.accent, lineHeight: 1, marginBottom: 10, letterSpacing: "-0.04em", fontVariantNumeric: "tabular-nums" }}>
                <Counter from={0} to={s.value} suffix={s.suffix} />
              </div>
              <p style={{ fontSize: "0.85rem", color: "#8C7B6B", fontFamily: "var(--font-sans)", margin: 0, lineHeight: 1.5, fontWeight: 400 }}>{s.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
