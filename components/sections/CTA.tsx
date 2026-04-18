"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref}
      style={{ padding: "120px 24px", background: "#3D2B1F", position: "relative", overflow: "hidden" }}>

      {/* Fondo decorativo */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {/* Gradiente radial central */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 900, height: 900, borderRadius: "50%", background: "radial-gradient(circle, rgba(107,122,58,0.18) 0%, transparent 65%)" }} />
        {/* Círculo top-right */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: "-20%", right: "-10%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(184,160,106,0.1) 0%, transparent 70%)" }}
        />
        {/* Grid dots */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        {/* Líneas decorativas */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 1200 600" preserveAspectRatio="none">
          <motion.line x1="0" y1="600" x2="1200" y2="0" stroke="rgba(107,122,58,0.1)" strokeWidth="1"
            initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 1.5, delay: 0.3 }} />
          <motion.line x1="200" y1="600" x2="1200" y2="100" stroke="rgba(184,160,106,0.07)" strokeWidth="1"
            initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 1.5, delay: 0.5 }} />
        </svg>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", textAlign: "center" }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(107,122,58,0.2)", border: "1px solid rgba(107,122,58,0.3)", borderRadius: 99, padding: "6px 16px", marginBottom: 32 }}
        >
          <motion.span
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ width: 6, height: 6, borderRadius: "50%", background: "#8A9B4A", display: "inline-block" }}
          />
          <span style={{ fontSize: "0.75rem", color: "#8A9B4A", fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.05em" }}>
            GRATIS PARA SIEMPRE
          </span>
        </motion.div>

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", fontFamily: "var(--font-display)", color: "white", margin: "0 0 12px", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05 }}
        >
          Empieza a ahorrar
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", fontFamily: "var(--font-display)", color: "#8A9B4A", margin: "0 0 32px", fontWeight: 700, fontStyle: "italic", letterSpacing: "-0.03em", lineHeight: 1.05 }}
        >
          desde hoy mismo.
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-sans)", maxWidth: 480, margin: "0 auto 52px", lineHeight: 1.7 }}
        >
          Sin tarjeta de crédito. Sin suscripciones. Solo una herramienta que te ayuda a gastar menos en el supermercado.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, flexWrap: "wrap" }}
        >
          <motion.div whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link href="/register" style={{ textDecoration: "none" }}>
              <div style={{ padding: "18px 44px", background: "linear-gradient(135deg, #6B7A3A, #8A9B4A)", borderRadius: 14, display: "flex", alignItems: "center", gap: 10, boxShadow: "0 12px 40px rgba(107,122,58,0.4)" }}>
                <span style={{ fontSize: "1rem", color: "white", fontFamily: "var(--font-sans)", fontWeight: 700 }}>Crear cuenta gratis</span>
                <span style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)" }}>→</span>
              </div>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03, y: -3 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link href="/login" style={{ textDecoration: "none" }}>
              <div style={{ padding: "18px 36px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 14, backdropFilter: "blur(10px)" }}>
                <span style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-sans)", fontWeight: 600 }}>Ya tengo cuenta</span>
              </div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32, marginTop: 56, flexWrap: "wrap" }}
        >
          {[
            "Sin tarjeta de crédito",
            "100% gratuito",
            "Datos reales",
          ].map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#6B7A3A" }} />
              <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-sans)", fontWeight: 500 }}>{t}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}