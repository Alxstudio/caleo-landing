"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

const active = [
  {
    name: "Mercadona",
    description: "El supermercado más grande de España. Compara al instante más de 4.200 productos con el resto de cadenas.",
    products: "4.200+",
    color: "#6B7A3A",
    initial: "M",
    stat: "4.200+ productos",
    logo: "/images/mercadona-logo.png",
  },
  {
    name: "DIA",
    description: "Precios competitivos y ofertas semanales. Cada producto comparado en tiempo real con Mercadona.",
    products: "3.500+",
    color: "#B8A06A",
    initial: "D",
    stat: "3.500+ productos",
    logo: "/images/dia-logo.png",
  },
];

const coming = ["Lidl", "Carrefour", "Alcampo", "Consum", "Aldi", "El Corte Inglés"];

export default function Supermarkets() {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="supermercados" ref={ref}
      style={{ padding: "120px 24px", background: "#F5F0E8", position: "relative", overflow: "hidden" }}>

      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-10%", right: "-5%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(107,122,58,0.05) 0%, transparent 65%)" }} />
        <div style={{ position: "absolute", bottom: "-10%", left: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(184,160,106,0.05) 0%, transparent 65%)" }} />
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "var(--font-display)", color: "#3D2B1F", margin: "0 0 18px", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Hoy dos,{" "}
            <em style={{ color: "#6B7A3A" }}>mañana más.</em>
          </h2>
          <p style={{ fontSize: "1rem", color: "#8C7B6B", fontFamily: "var(--font-sans)", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
            Empezamos con los dos supermercados más presentes en España. Más cadenas en camino.
          </p>
        </motion.div>

        {/* Cards activos */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 20, marginBottom: 24 }}>
          {active.map((sm, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              style={{ position: "relative", borderRadius: 24, overflow: "hidden", border: "1.5px solid rgba(232,223,208,0.8)", background: "transparent", padding: "40px 36px 36px", cursor: "default" }}
            >
              {/* Franja de color lateral */}
              <div style={{ position: "absolute", top: 0, left: 0, width: 4, height: "100%", background: sm.color, borderRadius: "24px 0 0 24px" }} />

              {/* Glow de color */}
              <div style={{ position: "absolute", top: -60, right: -60, width: 220, height: 220, borderRadius: "50%", background: `radial-gradient(circle, ${sm.color}10 0%, transparent 70%)`, pointerEvents: "none" }} />

              {/* Logo decorativo */}
              <img
                src={sm.logo}
                alt={sm.name}
                style={{ position: "absolute", bottom: 16, right: 20, height: 64, width: "auto", opacity: 0.18, userSelect: "none", pointerEvents: "none" }}
              />

              {/* Badge activo */}
              <div style={{ display: "inline-flex", alignItems: "center", gap: 7, marginBottom: 28 }}>
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                  style={{ width: 7, height: 7, borderRadius: "50%", background: "#6B7A3A", display: "inline-block" }}
                />
                <span style={{ fontSize: "0.72rem", color: "#6B7A3A", fontFamily: "var(--font-sans)", fontWeight: 700, letterSpacing: "0.06em" }}>ACTIVO</span>
              </div>

              <h3 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontFamily: "var(--font-display)", color: "#3D2B1F", margin: "0 0 12px", fontWeight: 700, letterSpacing: "-0.02em" }}>
                {sm.name}
              </h3>

              <p style={{ fontSize: "0.9rem", color: "#8C7B6B", fontFamily: "var(--font-sans)", lineHeight: 1.7, margin: "0 0 28px", maxWidth: 320 }}>
                {sm.description}
              </p>

              {/* Stat */}
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "10px 18px", borderRadius: 12, border: `1px solid ${sm.color}22`, background: `${sm.color}08` }}>
                <span style={{ fontSize: "1.1rem", fontFamily: "var(--font-numeric)", fontWeight: 800, color: sm.color, letterSpacing: "-0.03em" }}>{sm.products}</span>
                <span style={{ fontSize: "0.78rem", color: "#8C7B6B", fontFamily: "var(--font-sans)", fontWeight: 500 }}>productos comparados</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Próximamente */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ border: "1.5px solid rgba(232,223,208,0.6)", borderRadius: 20, padding: "28px 36px", display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}
        >
          <span style={{ fontSize: "0.72rem", color: "#8C7B6B", fontFamily: "var(--font-sans)", fontWeight: 700, letterSpacing: "0.08em", whiteSpace: "nowrap", flexShrink: 0 }}>
            PRÓXIMAMENTE
          </span>
          <div style={{ width: 1, height: 20, background: "rgba(61,43,31,0.1)", flexShrink: 0 }} />
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {coming.map((name, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.06, duration: 0.3 }}
                style={{ fontSize: "0.82rem", color: "#8C7B6B", fontFamily: "var(--font-sans)", fontWeight: 500, padding: "6px 14px", borderRadius: 99, border: "1px solid rgba(140,123,107,0.2)", background: "rgba(140,123,107,0.04)" }}
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
