"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Clock } from "lucide-react";

const supermarkets = [
  {
    name: "Mercadona",
    description: "Más de 4.200 productos disponibles y comparados en tiempo real.",
    products: "4.200+",
    status: "active",
    color: "#00A650",
    initial: "M",
  },
  {
    name: "DIA",
    description: "Más de 3.500 productos con precios actualizados y ofertas semanales.",
    products: "3.500+",
    status: "active",
    color: "#E31837",
    initial: "D",
  },
  {
    name: "Lidl",
    description: "Próximamente disponible en Caleo.",
    products: "Próximamente",
    status: "soon",
    color: "#F4C400",
    initial: "L",
  },
  {
    name: "Carrefour",
    description: "Próximamente disponible en Caleo.",
    products: "Próximamente",
    status: "soon",
    color: "#004A9F",
    initial: "C",
  },
  {
    name: "Alcampo",
    description: "Próximamente disponible en Caleo.",
    products: "Próximamente",
    status: "soon",
    color: "#E4002B",
    initial: "A",
  },
  {
    name: "Consum",
    description: "Próximamente disponible en Caleo.",
    products: "Próximamente",
    status: "soon",
    color: "#E67E22",
    initial: "C",
  },
];

export default function Supermarkets() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="supermercados" ref={ref}
      style={{ padding: "120px 24px", background: "#F5F0E8", position: "relative", overflow: "hidden" }}>

      {/* Fondo decorativo */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-10%", right: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(107,122,58,0.06) 0%, transparent 65%)" }} />
        <div style={{ position: "absolute", bottom: "-10%", left: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(184,160,106,0.07) 0%, transparent 65%)" }} />
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "end", marginBottom: 72 }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(107,122,58,0.1)", border: "1px solid rgba(107,122,58,0.2)", borderRadius: 99, padding: "6px 16px", marginBottom: 24 }}>
              <span style={{ fontSize: "0.75rem", color: "#6B7A3A", fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.05em" }}>SUPERMERCADOS</span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "var(--font-display)", color: "#3D2B1F", margin: 0, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              Hoy dos,<br />
              <em style={{ color: "#6B7A3A" }}>mañana más.</em>
            </h2>
          </div>
          <p style={{ fontSize: "1rem", color: "#8C7B6B", fontFamily: "var(--font-sans)", lineHeight: 1.7, margin: 0 }}>
            Empezamos con Mercadona y DIA — los dos supermercados más presentes en España. Estamos trabajando para añadir más cadenas próximamente.
          </p>
        </motion.div>

        {/* Grid supermercados */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
          {supermarkets.map((sm, i) => {
            const isActive = sm.status === "active";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                whileHover={isActive ? { y: -4, transition: { duration: 0.25 } } : {}}
                style={{
                  background: "white",
                  border: `1.5px solid ${isActive ? "#E8DFD0" : "#E8DFD0"}`,
                  borderRadius: 18,
                  padding: "28px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 18,
                  opacity: isActive ? 1 : 0.55,
                  boxShadow: isActive ? "0 4px 20px rgba(61,43,31,0.06)" : "none",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Glow sutil */}
                {isActive && (
                  <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, borderRadius: "50%", background: `radial-gradient(circle, ${sm.color}12 0%, transparent 70%)`, pointerEvents: "none" }} />
                )}

                {/* Avatar inicial */}
                <div style={{
                  width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                  background: isActive ? `${sm.color}15` : "#F5F0E8",
                  border: `1.5px solid ${isActive ? `${sm.color}25` : "#E8DFD0"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ fontSize: "1.3rem", fontFamily: "var(--font-display)", fontWeight: 800, color: isActive ? sm.color : "#8C7B6B" }}>
                    {sm.initial}
                  </span>
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                    <h3 style={{ fontSize: "1rem", fontFamily: "var(--font-sans)", color: "#3D2B1F", margin: 0, fontWeight: 700 }}>{sm.name}</h3>
                    {isActive
                      ? <CheckCircle2 size={16} color="#6B7A3A" />
                      : <Clock size={14} color="#8C7B6B" />
                    }
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "#8C7B6B", fontFamily: "var(--font-sans)", margin: "0 0 12px", lineHeight: 1.5 }}>
                    {sm.description}
                  </p>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: isActive ? "rgba(107,122,58,0.08)" : "#F5F0E8", borderRadius: 99, padding: "4px 10px" }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: isActive ? "#6B7A3A" : "#8C7B6B" }} />
                    <span style={{ fontSize: "0.72rem", color: isActive ? "#6B7A3A" : "#8C7B6B", fontFamily: "var(--font-sans)", fontWeight: 600 }}>
                      {sm.products} {isActive ? "productos" : ""}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}