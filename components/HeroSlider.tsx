"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createWhatsAppLink } from "@/lib/products";

type Slide = {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  accent: string;
  href: string;
  button: string;
  stat: string;
};

const slides: Slide[] = [
  {
    eyebrow: "Noor Collection • Women",
    title: "Elegant everyday styles.",
    text: "Premium looks, soft colors and easy ordering.",
    image: "/products/women-16.png",
    accent: "Signature Style",
    href: "/women",
    button: "Explore Women",
    stat: "Women Edit",
  },
  {
    eyebrow: "Noor Collection • Gents",
    title: "Classic gents wear.",
    text: "Clean fabric picks with a premium feel.",
    image: "/products/gents-01.png",
    accent: "Premium Fabric",
    href: "/gents",
    button: "Explore Gents",
    stat: "Gents Edit",
  },
  {
    eyebrow: "Noor Collection • Kids",
    title: "Smart kids outfits.",
    text: "Cute sets and quick WhatsApp ordering.",
    image: "/products/kids-01.png",
    accent: "New Arrival",
    href: "/kids",
    button: "Explore Kids",
    stat: "Kids Edit",
  },
  {
    eyebrow: "Noor Collection • Home",
    title: "Soft home picks.",
    text: "Elegant bed sheets for a premium room look.",
    image: "/products/bedsheet-02.png",
    accent: "Home Textile",
    href: "/bedsheets",
    button: "Explore Bed Sheets",
    stat: "Home Edit",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 4800);

    return () => window.clearInterval(id);
  }, []);

  const current = slides[index];
  const wa = createWhatsAppLink(
    `Assalam o Alaikum, mujhe Noor Collection ki ${current.stat} dekhni hai.`
  );

  return (
    <section className="hero-v27 hero-v36-fullscreen">
      <div className="hero-v27-bg" />
      <div className="hero-v27-glow hero-v27-glow-a" />
      <div className="hero-v27-glow hero-v27-glow-b" />

      <div className="container hero-v27-inner hero-v36-inner">
        <div className="hero-v27-copy hero-copy-v33 hero-v36-copy">
          <div className="hero-v27-eyebrow">{current.eyebrow}</div>
          <h1>{current.title}</h1>
          <p className="hero-v27-text">{current.text}</p>

          <div className="hero-v27-buttons">
            <Link href={current.href} className="btn btn-dark">
              {current.button}
            </Link>
            <a href={wa} target="_blank" className="btn btn-light">
              WhatsApp Order
            </a>
          </div>
        </div>

        <div className="hero-v27-visual hero-v36-visual">
          <div className="hero-v27-card hero-v36-card">
            <div className="hero-v27-card-top">
              <span className="hero-v27-chip">{current.stat}</span>
              <span className="hero-v27-chip muted">{current.accent}</span>
            </div>

            <div className="hero-v27-image-wrap hero-v36-image-wrap">
              <img src={current.image} alt={current.title} />
            </div>

            <div className="hero-v27-card-body">
              <h3>{current.stat}</h3>
              <p>{current.text}</p>
            </div>
          </div>

          <div className="hero-v27-floating hero-v27-floating-a">
            Premium Look
          </div>
          <div className="hero-v27-floating hero-v27-floating-b">
            Easy Order
          </div>

          <div className="hero-v27-dots">
            {slides.map((_, dotIndex) => (
              <button
                key={dotIndex}
                className={index === dotIndex ? "active" : ""}
                onClick={() => setIndex(dotIndex)}
                aria-label={`Go to slide ${dotIndex + 1}`}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
