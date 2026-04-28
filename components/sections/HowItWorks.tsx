"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { Search, GitCompare, DollarSign } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Busca tus productos",
    description: "Escribe cualquier producto y Caleo lo encuentra en todos los supermercados disponibles al instante.",
    detail: "Más de 7.000 productos indexados",
    color: "#6B7A3A",
    bg: "rgba(107,122,58,0.06)",
  },
  {
    number: "02",
    icon: GitCompare,
    title: "Compara precios",
    description: "Visualiza al instante cuánto cuesta cada producto\nen Mercadona y DIA. Sin sorpresas, sin letra pequeña.",
    detail: "Comparación en tiempo real",
    color: "#B8A06A",
    bg: "rgba(184,160,106,0.08)",
  },
  {
    number: "03",
    icon: DollarSign,
    title: "Ahorra en cada compra",
    description: "Caleo calcula automáticamente la combinación más\nbarata para tu lista completa. Tú decides finalmente\nqué opción se ajusta a tus preferencias.",
    detail: "Hasta un 45% de ahorro",
    color: "#C17F3A",
    bg: "rgba(193,127,58,0.07)",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <motion.section id="como-funciona" ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      style={{ padding: "160px 24px", background: "#F5F0E8", position: "relative", overflow: "hidden" }}>

      {/* Fondo decorativo */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 800, height: 800, borderRadius: "50%", background: "radial-gradient(circle, rgba(107,122,58,0.04) 0%, transparent 70%)" }} />
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center", marginBottom: 80 }}
        >
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "var(--font-display)", color: "#3D2B1F", margin: "0 0 20px", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Tres pasos para ahorrar
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#8C7B6B", fontFamily: "var(--font-sans)", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
            Elige tus productos de forma sencilla y compara al instante, sin configuraciones, sin registros.
          </p>
        </motion.div>

        {/* Steps */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: 24, position: "relative" }}>

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, scale: 1.015, boxShadow: "0 24px 64px rgba(107,122,58,0.18), 0 0 0 1.5px rgba(107,122,58,0.25)", transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
                style={{ background: "transparent", borderRadius: 20, padding: "56px 48px", border: "1px solid rgba(232,223,208,0.6)", position: "relative", overflow: "hidden", cursor: "default", ...(!isMobile && i === 2 ? { gridColumn: "1 / -1", maxWidth: "50%", margin: "0 auto", width: "100%" } : {}) }}
              >
                {/* Glow verde en hover */}
                <motion.div
                  animate={{ opacity: hoveredStep === i ? 1 : 0 }}
                  transition={{ duration: 0.35 }}
                  style={{ position: "absolute", inset: 0, borderRadius: 20, pointerEvents: "none", background: "radial-gradient(ellipse at 50% -10%, rgba(107,122,58,0.2) 0%, transparent 65%)" }}
                />
                {/* Número grande de fondo */}
                <div style={{ position: "absolute", top: -10, right: 16, fontSize: "7rem", fontFamily: "var(--font-display)", fontWeight: 900, color: step.bg.replace("0.06", "0.4").replace("0.08", "0.4").replace("0.07", "0.4"), lineHeight: 1, userSelect: "none", filter: "blur(0.5px)" }}>
                  {step.number}
                </div>

                {/* Icono */}
                <Icon size={24} color={step.color} style={{ marginBottom: 24, display: "block" }} />

                <h3 style={{ fontSize: "1.2rem", fontFamily: "var(--font-display)", color: "#3D2B1F", margin: "0 0 12px", fontWeight: 700 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#8C7B6B", fontFamily: "var(--font-sans)", lineHeight: 1.7, margin: "0 0 20px", whiteSpace: isMobile ? "normal" : "pre-line" }}>
                  {step.description}
                </p>

                {/* Detail pill */}
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: step.bg, borderRadius: 99, padding: "5px 12px" }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: step.color }} />
                  <span style={{ fontSize: "0.75rem", color: step.color, fontFamily: "var(--font-sans)", fontWeight: 600 }}>{step.detail}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}