"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, GitCompare, PiggyBank } from "lucide-react";

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
    description: "Ve de un vistazo cuánto cuesta cada producto en Mercadona y DIA. Sin sorpresas, sin letra pequeña.",
    detail: "Comparación en tiempo real",
    color: "#B8A06A",
    bg: "rgba(184,160,106,0.08)",
  },
  {
    number: "03",
    icon: PiggyBank,
    title: "Ahorra en cada compra",
    description: "Caleo calcula automáticamente la combinación más barata para tu lista completa. Tú decides.",
    detail: "Hasta un 45% de ahorro",
    color: "#C17F3A",
    bg: "rgba(193,127,58,0.07)",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="como-funciona" ref={ref}
      style={{ padding: "120px 24px", background: "#F5F0E8", position: "relative", overflow: "hidden" }}>

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
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(107,122,58,0.08)", border: "1px solid rgba(107,122,58,0.15)", borderRadius: 99, padding: "6px 16px", marginBottom: 24 }}>
            <span style={{ fontSize: "0.75rem", color: "#6B7A3A", fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.05em" }}>CÓMO FUNCIONA</span>
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "var(--font-display)", color: "#3D2B1F", margin: "0 0 20px", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Tres pasos para ahorrar
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#8C7B6B", fontFamily: "var(--font-sans)", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
            Sin registros complicados, sin configuraciones. En menos de un minuto ya estás comparando.
          </p>
        </motion.div>

        {/* Steps */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, position: "relative" }}>

          {/* Línea conectora desktop */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "absolute", top: 52, left: "calc(16.6% + 24px)", right: "calc(16.6% + 24px)", height: 1, background: "linear-gradient(to right, #6B7A3A, #B8A06A, #C17F3A)", transformOrigin: "left", opacity: 0.3 }}
            className="hidden lg:block"
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                style={{ background: "white", borderRadius: 20, padding: "36px 32px", border: "1px solid #E8DFD0", boxShadow: "0 4px 24px rgba(61,43,31,0.06)", position: "relative", overflow: "hidden", cursor: "default" }}
              >
                {/* Número grande de fondo */}
                <div style={{ position: "absolute", top: -10, right: 16, fontSize: "7rem", fontFamily: "var(--font-display)", fontWeight: 900, color: step.bg.replace("0.06", "0.4").replace("0.08", "0.4").replace("0.07", "0.4"), lineHeight: 1, userSelect: "none", filter: "blur(0.5px)" }}>
                  {step.number}
                </div>

                {/* Número visible */}
                <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: 8, background: step.bg, marginBottom: 20 }}>
                  <span style={{ fontSize: "0.75rem", color: step.color, fontFamily: "var(--font-sans)", fontWeight: 800 }}>{step.number}</span>
                </div>

                {/* Icono */}
                <div style={{ width: 52, height: 52, borderRadius: 14, background: step.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                  <Icon size={24} color={step.color} />
                </div>

                <h3 style={{ fontSize: "1.2rem", fontFamily: "var(--font-display)", color: "#3D2B1F", margin: "0 0 12px", fontWeight: 700 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#8C7B6B", fontFamily: "var(--font-sans)", lineHeight: 1.7, margin: "0 0 20px" }}>
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
    </section>
  );
}