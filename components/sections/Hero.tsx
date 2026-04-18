"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  return (
    <section ref={ref} style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "#F5F0E8", paddingTop: 80 }}>

      {/* Fondo decorativo */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        {/* Círculo grande top-right */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: "-20%", right: "-10%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(107,122,58,0.08) 0%, transparent 70%)" }}
        />
        {/* Círculo pequeño bottom-left */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ position: "absolute", bottom: "-10%", left: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(184,160,106,0.1) 0%, transparent 70%)" }}
        />
        {/* Grid pattern */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(61,43,31,0.06) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        {/* Línea diagonal decorativa */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 1200 800" preserveAspectRatio="none">
          <motion.line x1="0" y1="800" x2="1200" y2="0" stroke="rgba(107,122,58,0.06)" strokeWidth="1"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.5 }} />
          <motion.line x1="0" y1="600" x2="900" y2="0" stroke="rgba(184,160,106,0.05)" strokeWidth="1"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.8 }} />
        </svg>
      </div>

      <motion.div style={{ y, opacity, position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px", maxWidth: 1100, margin: "0 auto" }}>

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontSize: "clamp(2.2rem, 5.5vw, 5rem)", fontFamily: "var(--font-display)", color: "#3D2B1F", margin: "0 0 8px", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em", whiteSpace: "nowrap" }}
        >
          No se trata de comprar menos
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontSize: "clamp(2.2rem, 5.5vw, 5rem)", fontFamily: "var(--font-display)", color: "#6B7A3A", margin: "0 0 32px", fontWeight: 700, fontStyle: "italic", lineHeight: 1.05, letterSpacing: "-0.03em", whiteSpace: "nowrap" }}
        >
          Se trata de comprar mejor
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", color: "#8C7B6B", fontFamily: "var(--font-sans)", maxWidth: 560, margin: "0 auto 48px", lineHeight: 1.7, fontWeight: 400 }}
        >
         Compara los precios de tus productos favoritos entre supermercados y descubre dónde comprar para ahorrar lo máximo posible.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div style={{ opacity: indicatorOpacity, marginTop: 90 }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}
          >
            <span style={{ fontSize: "0.72rem", color: "#8C7B6B", fontFamily: "var(--font-sans)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Descubre más</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #8C7B6B, transparent)" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}