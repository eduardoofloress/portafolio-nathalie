import { useState, useRef } from "react";

const PROJECTS = [
  {
    id: 1,
    title: "Expo BalanceBites - Supérate Poma",
    description:
      "En Balanced Bites creamos una herramienta digital para promover una mejor alimentación en El Salvador, con un creador de recetas, información nutricional y tips para mejorar los hábitos alimenticios.",
  },
  {
    id: 2,
    title: "Libro Contextos - Supérate Poma",
    description:
      "Creé un libro personal de contextos donde relaté mi historia de vida, combinando texto e imágenes para transmitir emociones y conectar con el lector.",
  },
  {
    id: 3,
    title: "Pitch Expo Tech – Supérate Poma",
    description:
      "Junto a una compañera, redacté en inglés el pitch de cuatro minutos presentado en la Expo Tech, explicando de forma clara y precisa el funcionamiento de nuestro proyecto y herramienta.",
  },
  {
    id: 4,
    title: "Certificación Excel – Supérate Poma",
    description:
      "Este fue un proceso para certificarme en MOS Excel, me preparé estudiando y desarrollando guías de trabajo para la prueba que aprobé.",
  },
];

export default function App() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [images, setImages] = useState<Record<number, string>>({
    0: "/images/nathalie-graduacion.jpeg",
    1: "/images/expo-superate-poma.jpeg",
    2: "/images/libro-contextos.jpeg",
    3: "/images/potc-proyecto.jpeg",
    4: "/images/certificacion-excel.jpeg",
  });
  const inputRefs = useRef<Record<number, HTMLInputElement | null>>({});

  function handleImageChange(id: number, e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImages((prev) => ({ ...prev, [id]: url }));
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#2A2F63",
        color: "#ffffff",
        fontFamily: "var(--font-body)",
      }}
    >
      {/* ── Navbar ── */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 64px",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          backgroundColor: "#2A2F63",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: "20px",
            color: "#ffffff",
          }}
        >
          Nathalie Ortiz
        </div>

        <nav style={{ display: "flex", gap: "28px", alignItems: "center" }}>
          {[
            { label: "Inicio", href: "#inicio" },
            { label: "Proyectos", href: "#proyectos" },
            { label: "Sobre mí", href: "#sobre-mi" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#9CA3AF",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#75B520")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#9CA3AF")}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#9CA3AF",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#75B520")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
          >
            Contáctame
          </a>
        </nav>
      </header>

      {/* ── Hero ── */}
      <section
        id="inicio"
        style={{
          padding: "96px 64px 80px",
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: "72px",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "#75B520",
              color: "#2A2F63",
              borderRadius: "30px",
              padding: "6px 18px",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "28px",
            }}
          >
            Portafolio Estudiantil · 2026
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(44px, 4.5vw, 74px)",
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              marginBottom: "28px",
              color: "#ffffff",
            }}
          >
            El valor de{" "}
            <span style={{ color: "#75B520" }}>mi proceso</span>
          </h1>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.85,
              color: "#9CA3AF",
              maxWidth: "480px",
              marginBottom: "40px",
              paddingLeft: "20px",
              borderLeft: "4px solid #75B520",
            }}
          >
            Soy estudiante de Bachillerato General, curiosa y creativa, con interés por la tecnología y todo lo que puedo crear a partir de ella. Cada experiencia es una oportunidad para aprender, crecer y descubrir mi camino.
          </p>

          <button
            style={{
              padding: "14px 36px",
              borderRadius: "30px",
              background: "#75B520",
              color: "#2A2F63",
              fontWeight: 700,
              fontSize: "15px",
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-body)",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 20px rgba(117,181,32,0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(117,181,32,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(117,181,32,0.3)";
            }}
          >
            Ver mis proyectos
          </button>
        </div>

        {/* Right: profile image */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <button
            type="button"
            onClick={() => inputRefs.current[0]?.click()}
            style={{
              position: "relative",
              background: images[0] ? "transparent" : "rgba(255,255,255,0.05)",
              border: "2px dashed rgba(255,255,255,0.15)",
              borderRadius: "24px",
              padding: 0,
              textAlign: "center",
              width: "100%",
              maxWidth: "360px",
              aspectRatio: "4 / 5",
              overflow: "hidden",
              cursor: "pointer",
              color: "#ffffff",
              fontFamily: "var(--font-body)",
            }}
          >
            {images[0] ? (
              <>
                <img
                  src={images[0]}
                  alt="Imagen de presentación de Nathalie Ortiz"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <span
                  style={{
                    position: "absolute",
                    left: "50%",
                    bottom: "18px",
                    transform: "translateX(-50%)",
                    padding: "9px 18px",
                    borderRadius: "30px",
                    background: "rgba(42,47,99,0.9)",
                    fontSize: "12px",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                  }}
                >
                  Cambiar imagen
                </span>
              </>
            ) : (
              <span
                style={{
                  height: "100%",
                  padding: "48px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px",
                }}
              >
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#75B520" strokeWidth="1.7">
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="m4 17 4.5-4.5 3 3L14 13l6 6" />
                </svg>
                <strong style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 900 }}>
                  Agregar una imagen
                </strong>
                <span style={{ color: "#9CA3AF", fontSize: "12px", lineHeight: 1.6 }}>
                  Haz clic para elegir una foto
                </span>
              </span>
            )}
            <input
              ref={(el) => {
                inputRefs.current[0] = el;
              }}
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(0, e)}
              style={{ display: "none" }}
            />
          </button>
        </div>
      </section>

      {/* ── Divider ── */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ height: "1px", background: "rgba(255,255,255,0.1)" }} />
      </div>

      {/* ── Projects Section ── */}
      <section
        id="proyectos"
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "72px 64px 112px" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "52px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#75B520",
                marginBottom: "10px",
              }}
            >
              Lo que he creado
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(30px, 3vw, 50px)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                color: "#ffffff",
              }}
            >
              Mis Proyectos
            </h2>
          </div>
        </div>

        {/* 4 Project Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px",
          }}
        >
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: "#ffffff",
                border: `2px solid ${hoveredCard === project.id ? "#75B520" : "transparent"}`,
                borderRadius: "20px",
                overflow: "hidden",
                cursor: "default",
                transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
                transform: hoveredCard === project.id ? "translateY(-5px)" : "translateY(0)",
                boxShadow:
                  hoveredCard === project.id
                    ? "0 12px 40px rgba(0,0,0,0.2)"
                    : "0 2px 16px rgba(0,0,0,0.15)",
              }}
            >
              {/* Image area */}
              <div
                style={{
                  width: "100%",
                  height: "220px",
                  background: images[project.id] ? "transparent" : (hoveredCard === project.id ? "#f0f7e6" : "#f4f6ff"),
                  borderBottom: "1px solid #e8eef8",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                  transition: "background 0.25s",
                }}
              >
                {images[project.id] ? (
                  <>
                    <img
                      src={images[project.id]}
                      alt={project.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.4s",
                        transform: hoveredCard === project.id ? "scale(1.04)" : "scale(1)",
                      }}
                    />
                    {/* Replace image button */}
                    <button
                      onClick={() => inputRefs.current[project.id]?.click()}
                      style={{
                        position: "absolute",
                        bottom: "12px",
                        right: "12px",
                        background: "rgba(0,0,0,0.55)",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "20px",
                        padding: "5px 14px",
                        fontSize: "11px",
                        fontWeight: 600,
                        cursor: "pointer",
                        backdropFilter: "blur(6px)",
                        transition: "background 0.2s",
                        fontFamily: "var(--font-body)",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "rgba(117,181,32,0.85)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "rgba(0,0,0,0.55)")
                      }
                    >
                      Cambiar imagen
                    </button>
                  </>
                ) : (
                  <>
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "16px",
                        background: "rgba(42,47,99,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "12px",
                      }}
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#2A2F63"
                        strokeWidth="1.5"
                        style={{ opacity: 0.4 }}
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                    </div>
                    <p
                      style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#2A2F63",
                        opacity: 0.5,
                        marginBottom: "4px",
                        textAlign: "center",
                      }}
                    >
                      Agrega una imagen
                    </p>
                    <p style={{ fontSize: "11px", color: "#9CA3AF", marginBottom: "16px" }}>
                      JPG, PNG · Recomendado 600×400
                    </p>
                    <button
                      onClick={() => inputRefs.current[project.id]?.click()}
                      style={{
                        padding: "8px 22px",
                        borderRadius: "20px",
                        background: "#75B520",
                        color: "#2A2F63",
                        fontWeight: 700,
                        fontSize: "12px",
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "var(--font-body)",
                        transition: "transform 0.15s, box-shadow 0.15s",
                        boxShadow: "0 2px 10px rgba(117,181,32,0.3)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 4px 14px rgba(117,181,32,0.4)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 2px 10px rgba(117,181,32,0.3)";
                      }}
                    >
                      Subir imagen
                    </button>
                  </>
                )}

                {/* Hidden file input */}
                <input
                  ref={(el) => { inputRefs.current[project.id] = el; }}
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => handleImageChange(project.id, e)}
                />
              </div>

              {/* Card content */}
              <div style={{ padding: "24px 28px 28px", background: "#ffffff" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "20px",
                    fontWeight: 800,
                    letterSpacing: "-0.01em",
                    marginBottom: "12px",
                    lineHeight: 1.25,
                    color: "#2A2F63",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.8,
                    color: "#9CA3AF",
                    marginBottom: "22px",
                    borderLeft: "3px solid #75B520",
                    paddingLeft: "14px",
                  }}
                >
                  {project.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#2A2F63",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    Ver proyecto →
                  </span>
                  <div
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      background: "rgba(117,181,32,0.1)",
                      border: "1.5px solid #75B520",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "15px",
                      color: "#2A2F63",
                    }}
                  >
                    ♡
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── About strip ── */}
      <section
        id="sobre-mi"
        style={{
          background: "#333872",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          padding: "72px 64px",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#75B520",
                marginBottom: "14px",
              }}
            >
              Sobre mi
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "38px",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                color: "#ffffff",
              }}
            >
              Hola, soy{" "}
              <span style={{ color: "#75B520", fontStyle: "italic" }}>
                Nathalie.
              </span>
            </h2>
          </div>
          <div>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.9,
                color: "#9CA3AF",
                marginBottom: "30px",
                paddingLeft: "20px",
                borderLeft: "4px solid #75B520",
              }}
            >
              Soy estudiante de Bachillerato General, curiosa y creativa, con interés por la tecnología y todo lo que puedo crear a partir de ella. Cada experiencia es una oportunidad para aprender, crecer y descubrir mi camino.
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {["Creatividad", "Comunicacion", "Redacción", "Organización", "Adaptabilidad", "Iniciativa"].map((skill) => (
                <span
                  key={skill}
                  style={{
                    padding: "7px 18px",
                    borderRadius: "20px",
                    border: "1.5px solid rgba(255,255,255,0.15)",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#9CA3AF",
                    background: "rgba(255,255,255,0.05)",
                    cursor: "default",
                    transition: "border-color 0.2s, color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.target as HTMLElement;
                    el.style.borderColor = "#75B520";
                    el.style.color = "#75B520";
                    el.style.background = "rgba(117,181,32,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.target as HTMLElement;
                    el.style.borderColor = "rgba(255,255,255,0.15)";
                    el.style.color = "#9CA3AF";
                    el.style.background = "rgba(255,255,255,0.05)";
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section
        id="contacto"
        style={{
          width: "100%",
          background: "#2A2F63",
          padding: "100px 64px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* Left column */}
          <div>
            <p
              style={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#75B520",
                marginBottom: "20px",
              }}
            >
              ¿Hablamos?
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 4vw, 58px)",
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                color: "#ffffff",
                marginBottom: "24px",
              }}
            >
              Lista para{" "}
              <span style={{ color: "#75B520" }}>colaborar</span>
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#9CA3AF",
                marginBottom: "48px",
                maxWidth: "420px",
              }}
            >
              Estoy abierta a nuevas oportunidades, proyectos creativos y colaboraciones. Si tienes una idea o simplemente quieres conectar, escríbeme.
            </p>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Email */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(117,181,32,0.12)",
                    border: "1px solid rgba(117,181,32,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#75B520" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <polyline points="2,4 12,13 22,4" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: "2px" }}>
                    Correo
                  </p>
                  <p style={{ fontSize: "15px", fontWeight: 600, color: "#ffffff" }}>
                    nathalievasquez309@gmail.com
                  </p>
                </div>
              </div>

              {/* LinkedIn */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(117,181,32,0.12)",
                    border: "1px solid rgba(117,181,32,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#75B520" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="4" />
                    <line x1="8" y1="11" x2="8" y2="16" />
                    <line x1="8" y1="8" x2="8" y2="8.5" />
                    <path d="M12 11v5M12 11a3 3 0 0 1 6 0v5" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: "2px" }}>
                    LinkedIn
                  </p>
                  <p style={{ fontSize: "15px", fontWeight: 600, color: "#ffffff" }}>
                    linkedin.com/in/tuusuario
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right column: form */}
          <div
            style={{
              background: "#333872",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "20px",
              padding: "44px 40px",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "22px",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "32px",
                letterSpacing: "-0.01em",
              }}
            >
              Envíame un mensaje
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.currentTarget.reset();
                document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#9CA3AF",
                    marginBottom: "8px",
                  }}
                >
                  Tu nombre
                </label>
                <input
                  type="text"
                  placeholder="¿Cómo te llamas?"
                  style={{
                    width: "100%",
                    padding: "14px 18px",
                    background: "rgba(42,47,99,0.7)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "10px",
                    color: "#ffffff",
                    fontSize: "14px",
                    fontFamily: "var(--font-body)",
                    outline: "none",
                    transition: "border-color 0.2s",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#75B520")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#9CA3AF",
                    marginBottom: "8px",
                  }}
                >
                  Correo electrónico
                </label>
                <input
                  type="email"
                  placeholder="tucorreo@gmail.com"
                  style={{
                    width: "100%",
                    padding: "14px 18px",
                    background: "rgba(42,47,99,0.7)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "10px",
                    color: "#ffffff",
                    fontSize: "14px",
                    fontFamily: "var(--font-body)",
                    outline: "none",
                    transition: "border-color 0.2s",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#75B520")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#9CA3AF",
                    marginBottom: "8px",
                  }}
                >
                  Mensaje
                </label>
                <textarea
                  placeholder="Cuéntame en qué puedo ayudarte..."
                  rows={5}
                  style={{
                    width: "100%",
                    padding: "14px 18px",
                    background: "rgba(42,47,99,0.7)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "10px",
                    color: "#ffffff",
                    fontSize: "14px",
                    fontFamily: "var(--font-body)",
                    outline: "none",
                    resize: "vertical",
                    transition: "border-color 0.2s",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#75B520")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
                />
              </div>

              <button
                type="submit"
                style={{
                  padding: "15px 32px",
                  borderRadius: "30px",
                  background: "#75B520",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "15px",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-body)",
                  letterSpacing: "0.01em",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  boxShadow: "0 4px 20px rgba(117,181,32,0.3)",
                  alignSelf: "flex-start",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 28px rgba(117,181,32,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(117,181,32,0.3)";
                }}
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "64px auto 0",
            paddingTop: "32px",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "16px",
              color: "#ffffff",
            }}
          >
            Nathalie Ortiz
          </span>
          <span style={{ fontSize: "12px", color: "#9CA3AF" }}>
            2026 · Todos los derechos reservados
          </span>
        </div>
      </section>
    </div>
  );
}
