import { useState, useEffect } from "react";
import { X, MessageCircle, ZoomIn } from "lucide-react";

const WHATS =
  "https://wa.me/5511968106611?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20os%20quebra-cabe%C3%A7as%20no%20atacado.";

export const categoryImages: Record<string, string[]> = {
  "Barbie": [
    "https://i.imgur.com/SlxxGxa.jpg","https://i.imgur.com/4FoqvQa.jpg",
    "https://i.imgur.com/So6hZPk.jpg","https://i.imgur.com/kuvXSD3.jpg",
    "https://i.imgur.com/fzaQl9T.jpg","https://i.imgur.com/1qfeyd6.jpg",
    "https://i.imgur.com/S1oabew.jpg","https://i.imgur.com/REERR3B.jpg",
  ],
  "Bob Esponja": [
    "https://i.imgur.com/GtPtFTy.jpg","https://i.imgur.com/HD1nRsp.jpg",
    "https://i.imgur.com/xSYkzjo.jpg","https://i.imgur.com/LS0L6xN.jpg",
  ],
  "Frozen": [
    "https://i.imgur.com/tKfnqPx.jpg","https://i.imgur.com/1iEDcSV.jpg",
    "https://i.imgur.com/HDExfSV.jpg","https://i.imgur.com/EKVrAGf.jpg",
    "https://i.imgur.com/bCtcldn.jpg","https://i.imgur.com/QcL0UG0.jpg",
    "https://i.imgur.com/ZUOifKq.jpg",
  ],
  "Galinha Pintadinha": [
    "https://i.imgur.com/pjFr7NT.jpg","https://i.imgur.com/Ofj9CjQ.jpg",
    "https://i.imgur.com/gjmsFfp.jpg","https://i.imgur.com/RXEWYdf.jpg",
  ],
  "Marvel": [
    "https://i.imgur.com/dlQzC9g.jpg","https://i.imgur.com/uD1qPtZ.jpg",
    "https://i.imgur.com/9X8ZbfS.jpg","https://i.imgur.com/jVrx7oq.jpg",
    "https://i.imgur.com/VdtuApE.jpg","https://i.imgur.com/0W0XpkN.jpg",
    "https://i.imgur.com/BDSnu2F.jpg","https://i.imgur.com/8wC43Ou.jpg",
    "https://i.imgur.com/IFd9Cps.jpg","https://i.imgur.com/fEv1Frp.jpg",
    "https://i.imgur.com/jCUt3D0.jpg","https://i.imgur.com/Y7xWRrO.jpg",
    "https://i.imgur.com/yD54sL2.jpg","https://i.imgur.com/B2mKGUn.jpg",
    "https://i.imgur.com/6tU8hQS.jpg","https://i.imgur.com/gC0Mj8o.jpg",
    "https://i.imgur.com/PaOREka.jpeg","https://i.imgur.com/0yMP9EB.jpeg",
    "https://i.imgur.com/ITAWMEu.jpg","https://i.imgur.com/GgkShmz.jpg",
  ],
  "Super Mario": [
    "https://i.imgur.com/Bu4Sprj.jpeg","https://i.imgur.com/3HXtqXy.jpg",
    "https://i.imgur.com/1IDO7mU.jpg","https://i.imgur.com/sxfPCdE.jpg",
    "https://i.imgur.com/CGGbmie.jpg","https://i.imgur.com/WcWEkkB.jpg",
  ],
  "Mickey Mouse": [
    "https://i.imgur.com/K7XVAek.jpg","https://i.imgur.com/B0H9dLP.jpg",
    "https://i.imgur.com/EHEhPoN.jpg","https://i.imgur.com/nnOJALs.jpg",
    "https://i.imgur.com/5oGq9Cf.jpg",
  ],
  "Mundo Bita": [
    "https://i.imgur.com/67uJLCx.jpg","https://i.imgur.com/8xImGxq.jpg",
    "https://i.imgur.com/FuaMd7I.jpg","https://i.imgur.com/PbNjZkZ.jpg",
    "https://i.imgur.com/n1NVEKC.jpg",
  ],
  "Patrulha Canina": [
    "https://i.imgur.com/LTXm6ES.jpg","https://i.imgur.com/0hiW6SM.jpg",
    "https://i.imgur.com/HZMMW2g.jpg","https://i.imgur.com/SaUlQcj.jpg",
    "https://i.imgur.com/ZkELxZJ.jpg","https://i.imgur.com/qXWdbY2.jpg",
  ],
  "Princesas": [
    "https://i.imgur.com/ix68wsu.jpg","https://i.imgur.com/peMIDG7.jpg",
    "https://i.imgur.com/ovl4RKB.jpg","https://i.imgur.com/39XRzdt.jpg",
    "https://i.imgur.com/MEzVS44.jpg","https://i.imgur.com/2UUjiNt.jpg",
    "https://i.imgur.com/DsXiz2a.jpg",
  ],
  "McQueen": [
    "https://i.imgur.com/C5iWX7J.jpg","https://i.imgur.com/NmvvarD.jpg",
    "https://i.imgur.com/nYlQoxE.jpg","https://i.imgur.com/HUFSU3T.jpg",
  ],
  "Sonic": [
    "https://i.imgur.com/zuZNobz.jpg","https://i.imgur.com/H9EvTmZ.jpg",
    "https://i.imgur.com/3jNfynB.jpg","https://i.imgur.com/GSvdLQr.jpg",
    "https://i.imgur.com/kCFhkKi.jpg",
  ],
  "Stitch": [
    "https://i.imgur.com/sua7FVs.jpg","https://i.imgur.com/bUXY8Cr.jpg",
    "https://i.imgur.com/CZtOnTK.jpg","https://i.imgur.com/LJtyhUV.jpg",
    "https://i.imgur.com/PH5TYkj.jpg",
  ],
  "Turma da Mônica": [
    "https://i.imgur.com/YsxJRLm.jpg","https://i.imgur.com/l0kqdUS.jpg",
    "https://i.imgur.com/Ka9g8xw.jpg","https://i.imgur.com/imzQfK6.jpg",
    "https://i.imgur.com/RHu24Pf.jpg","https://i.imgur.com/FBoHfRP.jpg",
    "https://i.imgur.com/SDvS5Kf.jpg",
  ],
  "Brinquedos Educativos": [
    "https://i.imgur.com/kdGLqOe.jpg","https://i.imgur.com/qfbxcnQ.jpg",
    "https://i.imgur.com/D2i8adV.jpg",
  ],
  "Copa do Mundo": [
    "https://i.imgur.com/R7ztvOf.jpg","https://i.imgur.com/XQ2Pb1m.jpg",
    "https://i.imgur.com/SzYf3KH.jpg","https://i.imgur.com/AYc3VTF.jpg",
    "https://i.imgur.com/olLEaui.jpg","https://i.imgur.com/zO7gAtH.jpg",
    "https://i.imgur.com/D9fEPdS.jpg","https://i.imgur.com/nHOdJzt.jpg",
    "https://i.imgur.com/xaSQcZY.jpg","https://i.imgur.com/0DLsLDv.jpg",
  ],
  "Histórias Bíblicas": [
    "https://i.imgur.com/htxahfR.jpg","https://i.imgur.com/lchcjxr.jpg",
    "https://i.imgur.com/46J6gIL.jpg","https://i.imgur.com/cKLiJ3e.jpg",
    "https://i.imgur.com/xTWa39d.jpg","https://i.imgur.com/lyuqFXM.jpg",
    "https://i.imgur.com/aV4gpfK.jpg","https://i.imgur.com/9teNYU3.jpg",
    "https://i.imgur.com/yeUHmRA.jpg","https://i.imgur.com/9aeraWO.jpg",
    "https://i.imgur.com/gYyzd6m.jpg",
  ],
};

interface Props {
  category: string | null;
  onClose: () => void;
}

export function CategoryModal({ category, onClose }: Props) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [imgErrors, setImgErrors] = useState<Set<number>>(new Set());

  // Lock body scroll
  useEffect(() => {
    if (category) {
      document.body.style.overflow = "hidden";
    }
    return () => { document.body.style.overflow = ""; };
  }, [category]);

  // Reset state when category changes
  useEffect(() => {
    setLightbox(null);
    setImgErrors(new Set());
  }, [category]);

  // ESC key handler
  useEffect(() => {
    if (!category) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightbox !== null) setLightbox(null);
        else onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [category, lightbox, onClose]);

  if (!category) return null;

  const images = categoryImages[category] ?? [];

  const handleImgError = (i: number) =>
    setImgErrors((prev) => new Set(prev).add(i));

  return (
    <>
      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.97) translateY(12px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
        @keyframes overlayIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes lightboxIn {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
        .cm-grid-img {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .cm-grid-img:hover {
          transform: scale(1.04);
          box-shadow: 0 12px 32px rgba(0,0,0,0.22);
        }
        .cm-grid-img:hover .cm-zoom-icon {
          opacity: 1;
        }
        .cm-zoom-icon {
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .cm-whats-btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .cm-whats-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(37,211,102,0.45);
        }
        .cm-close-btn {
          transition: background 0.2s, transform 0.2s;
        }
        .cm-close-btn:hover {
          background: rgba(255,255,255,0.25) !important;
          transform: rotate(90deg);
        }
        .cm-grid {
          display: grid;
          gap: 16px;
          grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 768px) {
          .cm-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .cm-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>

      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 9000,
          background: "rgba(10,10,20,0.72)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          animation: "overlayIn 0.25s ease forwards",
        }}
      />

      {/* Modal Panel */}
      <div
        style={{
          position: "fixed", inset: "0", zIndex: 9001,
          display: "flex", alignItems: "flex-start", justifyContent: "center",
          padding: "20px 12px",
          overflowY: "auto",
          pointerEvents: "none",
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            pointerEvents: "auto",
            width: "100%", maxWidth: "1100px",
            background: "var(--background, #fff)",
            borderRadius: "28px",
            boxShadow: "0 32px 80px rgba(0,0,0,0.35)",
            overflow: "hidden",
            animation: "modalIn 0.3s cubic-bezier(.22,.68,0,1.2) forwards",
          }}
        >
          {/* Header */}
          <div style={{
            background: "linear-gradient(135deg, oklch(0.55 0.22 250), oklch(0.65 0.25 295))",
            padding: "20px 24px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            position: "sticky", top: 0, zIndex: 10,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontSize: "22px" }}>🧩</span>
              <div>
                <div style={{
                  fontFamily: "Fredoka, sans-serif",
                  fontWeight: 700, fontSize: "clamp(1.2rem,3vw,1.6rem)",
                  color: "#fff", lineHeight: 1.1,
                }}>{category}</div>
                <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.78rem", marginTop: "2px" }}>
                  {images.length} quebra-cabeça{images.length !== 1 ? "s" : ""}
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="cm-close-btn"
              aria-label="Fechar"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "none", borderRadius: "50%",
                width: "42px", height: "42px",
                display: "grid", placeItems: "center",
                cursor: "pointer", color: "#fff",
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Decorative puzzle strip */}
          <div style={{
            background: "linear-gradient(90deg, oklch(0.88 0.14 95), oklch(0.88 0.18 155), oklch(0.88 0.16 245), oklch(0.88 0.18 320))",
            height: "6px",
          }} />

          {/* Grid */}
          <div className="cm-grid" style={{ padding: "28px 24px 32px" }}>
            {images.map((src, i) => (
              <div
                key={src}
                className="cm-grid-img"
                onClick={() => setLightbox(i)}
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  position: "relative",
                  aspectRatio: "1 / 1",
                  background: "var(--muted, #f0f0f0)",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
                }}
              >
                {imgErrors.has(i) ? (
                  <div style={{
                    width: "100%", height: "100%",
                    display: "grid", placeItems: "center",
                    color: "#999", fontSize: "0.8rem",
                    flexDirection: "column", gap: "8px",
                  }}>
                    <span style={{ fontSize: "2rem" }}>🧩</span>
                    <span>Imagem indisponível</span>
                  </div>
                ) : (
                  <img
                    src={src}
                    alt={`${category} quebra-cabeça ${i + 1}`}
                    loading="lazy"
                    onError={() => handleImgError(i)}
                    style={{
                      width: "100%", height: "100%",
                      objectFit: "cover", display: "block",
                    }}
                  />
                )}
                {/* Zoom overlay */}
                <div
                  className="cm-zoom-icon"
                  style={{
                    position: "absolute", inset: 0,
                    background: "rgba(0,0,0,0.28)",
                    display: "grid", placeItems: "center",
                    color: "#fff",
                  }}
                >
                  <ZoomIn size={32} />
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div style={{
            borderTop: "1px solid var(--border, #e5e7eb)",
            padding: "20px 24px",
            display: "flex", justifyContent: "center",
            background: "var(--card, #fafafa)",
          }}>
            <a
              href={WHATS}
              target="_blank"
              rel="noreferrer"
              className="cm-whats-btn"
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                background: "#25d366",
                color: "#fff",
                fontWeight: 700, fontSize: "1rem",
                padding: "14px 32px",
                borderRadius: "999px",
                textDecoration: "none",
                boxShadow: "0 6px 20px rgba(37,211,102,0.35)",
                fontFamily: "Fredoka, sans-serif",
              }}
            >
              <MessageCircle size={20} />
              Pedir {category} pelo WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <>
          <div
            onClick={() => setLightbox(null)}
            style={{
              position: "fixed", inset: 0, zIndex: 9100,
              background: "rgba(0,0,0,0.88)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              animation: "overlayIn 0.2s ease forwards",
            }}
          />
          <div
            style={{
              position: "fixed", inset: 0, zIndex: 9101,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              padding: "20px",
              gap: "20px",
              animation: "lightboxIn 0.25s ease forwards",
            }}
            onClick={() => setLightbox(null)}
          >
            <img
              src={images[lightbox]}
              alt={`${category} ${lightbox + 1}`}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "min(92vw, 700px)",
                maxHeight: "72vh",
                objectFit: "contain",
                borderRadius: "20px",
                boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
              }}
            />
            <a
              href={WHATS}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="cm-whats-btn"
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                background: "#25d366",
                color: "#fff",
                fontWeight: 700, fontSize: "1.05rem",
                padding: "15px 36px",
                borderRadius: "999px",
                textDecoration: "none",
                boxShadow: "0 6px 24px rgba(37,211,102,0.4)",
                fontFamily: "Fredoka, sans-serif",
              }}
            >
              <MessageCircle size={20} />
              Comprar pelo WhatsApp
            </a>
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: "fixed", top: "20px", right: "20px",
                background: "rgba(255,255,255,0.15)",
                border: "none", borderRadius: "50%",
                width: "46px", height: "46px",
                display: "grid", placeItems: "center",
                cursor: "pointer", color: "#fff",
                zIndex: 9102,
              }}
              aria-label="Fechar visualização"
            >
              <X size={22} />
            </button>
          </div>
        </>
      )}
    </>
  );
}
