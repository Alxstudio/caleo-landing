"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Proximamente() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#F5F0E8",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Fondo radial sutil */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(circle at 50% 50%, rgba(107,122,58,0.08) 0%, transparent 65%)",
      }} />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 40, position: "relative" }}
      >
        {/* Logo */}
        <Image
          src="/images/claropng.png"
          alt="Caleo"
          width={180}
          height={60}
          style={{ objectFit: "contain" }}
          priority
        />

        {/* Texto principal */}
        <div style={{ textAlign: "center" }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 700,
              color: "#6B7A3A",
              margin: 0,
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            Próximamente
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{
              fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
              fontFamily: "var(--font-numeric)",
              color: "#8C7B6B",
              margin: "16px 0 0",
              letterSpacing: "0.08em",
              fontWeight: 300,
            }}
          >
            4 / 5 / 2026
          </motion.p>
        </div>

        {/* Volver */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Link href="/" style={{
            fontSize: "0.85rem",
            color: "rgba(61,43,31,0.35)",
            fontFamily: "var(--font-sans)",
            textDecoration: "none",
            letterSpacing: "0.04em",
          }}
            onMouseEnter={e => (e.currentTarget.style.color = "rgba(61,43,31,0.7)")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(61,43,31,0.35)")}
          >
            ← Volver al inicio
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
