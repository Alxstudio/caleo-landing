"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

function NavTextLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ fontSize: "0.85rem", color: hovered ? "#6B7A3A" : "#5C4A3A", fontFamily: "system-ui", fontWeight: 600, textDecoration: "none", padding: "9px 18px", transition: "color 0.22s ease" }}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const target = document.getElementById("unete");
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHidden(entry.isIntersecting);
        if (entry.isIntersecting) setMenuOpen(false);
      },
      { threshold: 0.1 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: "Sobre nosotros", href: "#" },
    { label: "Servicios",      href: "#caracteristicas" },
    { label: "Comparador",     href: "#como-funciona" },
    { label: "Expansión",      href: "#supermercados" },
    { label: "Únete",          href: "#unete" },
  ];


  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: hidden ? -20 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          pointerEvents: hidden ? "none" : "auto",
          padding: isMobile ? "12px 20px" : "16px 48px",
          background: scrolled || menuOpen ? "rgba(245,240,232,0.92)" : "rgba(245,240,232,0.6)",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled || menuOpen ? "1px solid rgba(232,223,208,0.8)" : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 20px rgba(61,43,31,0.08)" : "none",
          transition: "all 0.4s ease",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}
      >
        {/* === DESKTOP === */}
        {!isMobile && (
          <>
            {/* Links izquierda */}
            <div style={{ display: "flex", alignItems: "center", gap: 4, flex: 1 }}>
              {navLinks.map(l => (
                <a key={l.label} href={l.href}
                  onMouseEnter={e => (e.currentTarget.style.color = "#6B7A3A")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#5C4A3A")}
                  style={{ fontSize: "0.85rem", color: "#5C4A3A", fontFamily: "system-ui", fontWeight: 600, textDecoration: "none", padding: "9px 18px", transition: "color 0.22s ease" }}
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Logo centrado */}
            <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
              <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
                <motion.img
                  src="/images/claropng.png" alt="Caleo"
                  style={{ height: 60, width: "auto" }}
                  whileHover={{ filter: "drop-shadow(0px 0px 12px rgba(107,122,58,0.7)) brightness(1.15)" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </div>

            {/* CTAs derecha */}
            <div style={{ display: "flex", alignItems: "center", gap: 4, flex: 1, justifyContent: "flex-end" }}>
              <NavTextLink href="/proximamente" label="Iniciar sesión" />
              <NavTextLink href="/proximamente" label="Registrarse" />
            </div>
          </>
        )}

        {/* === MOBILE === */}
        {isMobile && (
          <>
            {/* Logo izquierda */}
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
              <motion.img
                src="/images/claropng.png" alt="Caleo"
                style={{ height: 42, width: "auto" }}
                whileHover={{ filter: "drop-shadow(0px 0px 12px rgba(107,122,58,0.7)) brightness(1.15)" }}
                transition={{ duration: 0.3 }}
              />
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 6, display: "flex", flexDirection: "column", gap: 5, justifyContent: "center" }}
            >
              <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }} transition={{ duration: 0.22 }} style={{ display: "block", width: 22, height: 2, background: "#3D2B1F", borderRadius: 2 }} />
              <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} transition={{ duration: 0.15 }} style={{ display: "block", width: 22, height: 2, background: "#3D2B1F", borderRadius: 2 }} />
              <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }} transition={{ duration: 0.22 }} style={{ display: "block", width: 22, height: 2, background: "#3D2B1F", borderRadius: 2 }} />
            </button>
          </>
        )}
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{
              position: "fixed", top: 66, left: 0, right: 0, zIndex: 99,
              background: "rgba(245,240,232,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(232,223,208,0.8)",
              boxShadow: "0 8px 32px rgba(61,43,31,0.08)",
              padding: "16px 24px 24px",
              display: "flex", flexDirection: "column", gap: 2,
            }}
          >
            {/* Nav links — mismo estilo que desktop */}
            {navLinks.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.18 }}
                style={{ fontSize: "0.85rem", color: "#3D2B1F", fontFamily: "system-ui", fontWeight: 500, textDecoration: "none", padding: "10px 16px" }}
              >
                {l.label}
              </motion.a>
            ))}

            {/* Divisor */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.18 }}
              style={{ height: 1, background: "rgba(232,223,208,0.8)", margin: "8px 0" }}
            />

            {/* CTAs — mismo estilo que desktop */}
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.18 }}
              style={{ display: "flex", flexDirection: "column", gap: 6 }}
            >
              <Link href="/proximamente" onClick={() => setMenuOpen(false)}
                style={{ fontSize: "0.85rem", color: "#3D2B1F", fontFamily: "system-ui", fontWeight: 600, textDecoration: "none", padding: "10px 16px" }}
              >
                Iniciar sesión
              </Link>
              <Link href="/proximamente" onClick={() => setMenuOpen(false)}
                style={{ fontSize: "0.85rem", color: "#F5F0E8", fontFamily: "system-ui", fontWeight: 600, textDecoration: "none", padding: "10px 20px", background: "#6B7A3A", borderRadius: 10, textAlign: "center" }}
              >
                Registrarse
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
