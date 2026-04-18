"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function LetterLink({ href, label, small }: { href: string; label: string; small?: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ textDecoration: "none", padding: small ? "6px 8px" : "9px 18px", display: "flex", gap: 0, overflow: "hidden" }}
    >
      {label.split("").map((char, i) => (
        <motion.span
          key={i}
          animate={{ y: hovered ? -2 : 0, color: hovered ? "#6B7A3A" : "#3D2B1F" }}
          transition={{ duration: 0.2, delay: i * 0.02, ease: "easeOut" }}
          style={{ fontSize: small ? "0.72rem" : "0.85rem", fontFamily: "system-ui", fontWeight: 600, display: "inline-block", whiteSpace: "pre" }}
        >
          {char}
        </motion.span>
      ))}
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const links = [
    { label: "Comparador", href: "#como-funciona" },
    { label: "Servicios", href: "#caracteristicas" },
    { label: "Ahorro", href: "#ahorro" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: isMobile ? "10px 8px" : "16px 48px",
        background: scrolled ? "rgba(245,240,232,0.92)" : "rgba(245,240,232,0.6)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(232,223,208,0.8)" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(61,43,31,0.08)" : "none",
        transition: "all 0.4s ease",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}
    >
      {/* Links izquierda */}
      <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 0 : 4, flex: 1 }}>
        {links.map(l => (
          <a key={l.label} href={l.href}
            onMouseEnter={() => setActiveLink(l.label)}
            onMouseLeave={() => setActiveLink("")}
            style={{
              position: "relative",
              fontSize: isMobile ? "0.72rem" : "0.85rem",
              color: activeLink === l.label ? "#6B7A3A" : "#3D2B1F",
              fontFamily: "system-ui", fontWeight: 500, textDecoration: "none",
              padding: isMobile ? "6px 6px" : "8px 16px",
              transition: "color 0.25s ease",
              whiteSpace: "nowrap",
            }}
          >
            {l.label}
            <motion.span
              initial={false}
              animate={{ scaleX: activeLink === l.label ? 1 : 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: "absolute", bottom: 2, left: isMobile ? 6 : 16, right: isMobile ? 6 : 16, height: 1.5, background: "#6B7A3A", borderRadius: 2, transformOrigin: "left" }}
            />
          </a>
        ))}
      </div>

      {/* Logo centrado */}
      <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <motion.img
            src="/images/claropng.png" alt="Caleo"
            style={{ height: isMobile ? 40 : 60, width: "auto" }}
            whileHover={{ filter: "drop-shadow(0px 0px 12px rgba(107,122,58,0.7)) brightness(1.15)" }}
            transition={{ duration: 0.3 }}
          />
        </Link>
      </div>

      {/* CTA derecha */}
      <div style={{ display: "flex", alignItems: "center", gap: 0, flex: 1, justifyContent: "flex-end" }}>
        {[{ label: "Iniciar sesión", href: "/login" }, { label: "Registrarse", href: "/register" }].map(({ label, href }) => (
          <LetterLink key={href} href={href} label={label} small={isMobile} />
        ))}
      </div>
    </motion.nav>
  );
}
