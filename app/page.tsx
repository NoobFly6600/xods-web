"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouse);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  const services = [
    {
      tag: "01 — DATA SERVICES",
      title: "Feed the frontier.",
      body: "We source, refine, and deliver high-quality training data to the world's leading AI labs — the fuel that powers frontier models.",
    },
    {
      tag: "02 — ENTERPRISE DEPLOYMENT",
      title: "AI that works inside your business.",
      body: "We deploy and integrate state-of-the-art AI tools into enterprise workflows — from strategy to production, end to end.",
    },
  ];

  const stats = [
    { value: "AGI", label: "Our north star" },
    { value: "2", label: "Core services" },
    { value: "∞", label: "Human potential unlocked" },
  ];

  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
        overflowX: "hidden",
        minHeight: "100vh",
      }}
    >
      {/* Radial glow that follows mouse */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.04) 0%, transparent 70%)`,
        }}
      />

      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 48px",
          borderBottom:
            scrollY > 40
              ? "1px solid rgba(255,255,255,0.08)"
              : "1px solid transparent",
          backgroundColor: scrollY > 40 ? "rgba(0,0,0,0.85)" : "transparent",
          backdropFilter: scrollY > 40 ? "blur(12px)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <span
          style={{
            fontSize: "15px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          XODS
        </span>
        <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          {["Mission", "Services", "Contact"].map((item) => (
            <span
              key={item}
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.06em",
                cursor: "pointer",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
              }
            >
              {item}
            </span>
          ))}
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#fff",
              color: "#000",
              border: "none",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Get in touch
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section
        ref={heroRef}
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 48px",
          paddingTop: "120px",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        {/* Grid lines background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            zIndex: 0,
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          }}
        />

        {/* Horizontal line accent */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
            zIndex: 0,
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px" }}>
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.35)",
              textTransform: "uppercase",
              marginBottom: "32px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
            AGI IS REAL. WE ARE ACCELERATING IT.
          </div>

          <h1
            style={{
              fontSize: "clamp(48px, 8vw, 120px)",
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              margin: 0,
              marginBottom: "40px",
            }}
          >
            To accelerate
            <br />
            the advent{" "}
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,255,255,0.4)",
              }}
            >
              of AGI
            </span>
            <br />
            by building and
            <br />
            distributing AI.
          </h1>

          <div
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                padding: "16px 36px",
                backgroundColor: "#fff",
                color: "#000",
                border: "none",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Work with us
            </button>
            <button
              style={{
                padding: "16px 36px",
                backgroundColor: "transparent",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.2)",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Learn more
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "48px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              fontSize: "10px",
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.15em",
            }}
          >
            SCROLL
          </span>
          <div
            style={{
              width: "1px",
              height: "48px",
              backgroundColor: "rgba(255,255,255,0.15)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                backgroundColor: "#fff",
                animation: "scrollLine 1.8s ease-in-out infinite",
                height: "40%",
              }}
            />
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              padding: "48px",
              borderRight:
                i < stats.length - 1
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "none",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <span
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              {s.value}
            </span>
            <span
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </section>

      {/* SERVICES */}
      <section
        style={{ padding: "120px 48px", position: "relative", zIndex: 1 }}
      >
        <div
          style={{
            fontSize: "11px",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
            marginBottom: "64px",
          }}
        >
          What we do
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            backgroundColor: "rgba(255,255,255,0.08)",
          }}
        >
          {services.map((s, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#000",
                padding: "64px 48px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor =
                  "#0a0a0a";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor =
                  "#000";
              }}
            >
              <div
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  color: "rgba(255,255,255,0.25)",
                  marginBottom: "32px",
                  textTransform: "uppercase",
                }}
              >
                {s.tag}
              </div>
              <h2
                style={{
                  fontSize: "clamp(24px, 3vw, 40px)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                  marginBottom: "24px",
                  margin: "0 0 24px 0",
                }}
              >
                {s.title}
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.7,
                  maxWidth: "400px",
                  margin: 0,
                }}
              >
                {s.body}
              </p>
              <div
                style={{
                  position: "absolute",
                  bottom: "40px",
                  right: "40px",
                  fontSize: "20px",
                  color: "rgba(255,255,255,0.15)",
                }}
              >
                →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE BAND */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          overflow: "hidden",
          padding: "20px 0",
          whiteSpace: "nowrap",
        }}
      >
        <div
          style={{
            display: "inline-block",
            animation: "marquee 20s linear infinite",
          }}
        >
          {Array(6)
            .fill(
              "BUILD AI · DISTRIBUTE AI · ACCELERATE AGI · LIBERATE HUMANITY · ",
            )
            .join("")}
        </div>
      </div>

      {/* BELIEF SECTION */}
      <section
        style={{
          padding: "120px 48px",
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase",
              marginBottom: "32px",
            }}
          >
            We believe
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 56px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              margin: "0 0 32px 0",
            }}
          >
            AGI is not a question
            <br />
            of{" "}
            <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.5)" }}>
              if.
            </em>
            <br />
            Only <em style={{ fontStyle: "normal" }}>when.</em>
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
            paddingLeft: "80px",
          }}
        >
          {[
            "We believe AGI will be the most transformative technology in human history.",
            "We believe the path there requires both the best data and the widest distribution.",
            "We believe every business and every nation should have access to AI — not just the few.",
          ].map((belief, i) => (
            <p
              key={i}
              style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.75,
                margin: 0,
                paddingBottom: "32px",
                borderBottom:
                  i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}
            >
              {belief}
            </p>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "120px 48px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        {/* Large background text */}
        <div
          style={{
            position: "absolute",
            fontSize: "clamp(120px, 20vw, 280px)",
            fontWeight: 800,
            color: "rgba(255,255,255,0.02)",
            letterSpacing: "-0.05em",
            userSelect: "none",
            pointerEvents: "none",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            whiteSpace: "nowrap",
          }}
        >
          AGI
        </div>

        <div
          style={{
            fontSize: "11px",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
            marginBottom: "32px",
          }}
        >
          Ready to move faster?
        </div>
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 72px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            margin: "0 0 48px 0",
            maxWidth: "800px",
          }}
        >
          The advent of AGI starts here.
        </h2>
        <button
          style={{
            padding: "20px 48px",
            backgroundColor: "#fff",
            color: "#000",
            border: "none",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          Get in touch
        </button>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          XODS
        </span>
        <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>
          © 2026. To accelerate the advent of AGI.
        </span>
        <div style={{ display: "flex", gap: "32px" }}>
          {["Twitter", "LinkedIn"].map((link) => (
            <span
              key={link}
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.3)",
                cursor: "pointer",
                letterSpacing: "0.06em",
              }}
            >
              {link}
            </span>
          ))}
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        * { box-sizing: border-box; }
        body { margin: 0; }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }

        @keyframes scrollLine {
          0% { transform: translateY(-100%); opacity: 0; }
          30% { opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translateY(250%); opacity: 0; }
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        button:hover {
          opacity: 0.85;
          transition: opacity 0.2s;
        }
      `}</style>
    </div>
  );
}
