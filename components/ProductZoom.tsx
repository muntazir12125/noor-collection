"use client";
import { useState } from "react";

export default function ProductZoom({ src, alt }: { src: string; alt: string }) {
  const [zoom, setZoom] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");
  const [modal, setModal] = useState(false);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin(`${x}% ${y}%`);
  }

  return (
    <>
      <div className="detail-img zoom-card zoom-card-v22">
        <div
          className={`zoom-stage zoom-stage-v22 ${zoom ? "is-zoomed" : ""}`}
          onMouseEnter={() => setZoom(true)}
          onMouseLeave={() => setZoom(false)}
          onMouseMove={handleMove}
          onClick={() => setModal(true)}
        >
          <img src={src} alt={alt} style={{ transformOrigin: origin }} />
          <span className="zoom-hotspot-v22" aria-hidden="true"></span>
        </div>
      </div>
      {modal && (
        <div className="zoom-modal" onClick={() => setModal(false)}>
          <div className="zoom-modal-inner">
            <button className="zoom-close" type="button" onClick={() => setModal(false)}>×</button>
            <img src={src} alt={alt} />
          </div>
        </div>
      )}
    </>
  );
}
