"use client";
import Link from "next/link";
import { useState } from "react";
import { useStore } from "@/context/StoreContext";
import { createWhatsAppLink, googleMapsUrl, phoneUrl } from "@/lib/products";

const categoryItems = [
  ["Women", "/women", "Ladies suits"],
  ["Gents", "/gents", "Men fabrics"],
  ["Kids", "/kids", "Kids wear"],
  ["Bed Sheets", "/bedsheets", "Home textile"],
];

export default function Header() {
  const { cartCount, user, logout } = useStore();
  const [open, setOpen] = useState(false);
  const wa = createWhatsAppLink("Assalam o Alaikum, mujhe Noor Collection ki latest collection dekhni hai.");

  return (
    <header className="header modern-header header-v14 header-v15 header-v16 header-v19 header-v25 header-v26 header-v27">
      <div className="container nav modern-nav nav-v19 nav-v25 nav-v26 nav-v27">
        <Link href="/" className="brand brand-v26 brand-v27 brand-v40" aria-label="Noor Collection Home">
          <img src="/brand/noor-logo-cropped.png" alt="Noor Collection logo" className="brand-logo-simple-v40" />
        </Link>

        <button className={`mobile-menu-btn mobile-menu-btn-v33 ${open ? "active" : ""}`} type="button" onClick={() => setOpen(!open)} aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>

        <nav className={`nav-links mobile-nav nav-links-v19 nav-links-v25 nav-links-v26 nav-links-v27 nav-links-v44 ${open ? "open" : ""}`}>
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <div className="mega-wrap mega-wrap-v38 mega-wrap-v44">
            <Link href="/shop" className="mega-trigger mega-trigger-v39">Categories <span className="mega-arrow-v39">⌄</span></Link>
            <div className="mega-menu mega-menu-v25 mega-menu-v26 mega-menu-v38 mega-menu-v44">
              {categoryItems.map(([title, href, sub]) => (
                <Link href={href} key={title} className="mega-item-v25 mega-item-v26 mega-item-v38" onClick={() => setOpen(false)}>
                  <span>{title}</span>
                  <small>{sub}</small>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/women" onClick={() => setOpen(false)}>Women</Link>
          <Link href="/gents" onClick={() => setOpen(false)}>Gents</Link>
          <Link href="/kids" onClick={() => setOpen(false)}>Kids</Link>
          <Link href="/bedsheets" onClick={() => setOpen(false)}>Bed Sheets</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>

        <div className="nav-actions nav-actions-v19 nav-actions-v25 nav-actions-v26 nav-actions-v27 nav-actions-v39 nav-actions-v44">
          <a href={googleMapsUrl} target="_blank" className="nav-badge nav-badge-v25 nav-badge-v26 nav-badge-v27"><img src="/icons/google-maps-icon.png" alt="Store" className="nav-badge-icon-img" /> <span>Store</span></a>
          <a href={phoneUrl} className="nav-badge nav-badge-v25 nav-badge-v26 nav-badge-v27"><img src="/icons/call-icon.png" alt="Call" className="nav-badge-icon-img" /> <span>Call</span></a>
          {user ? <button className="text-link" onClick={logout}>Logout</button> : <Link className="text-link" href="/login">Login</Link>}
          <Link href="/cart" className="cart-link cart-link-v26">Cart <span>{cartCount}</span></Link>
        </div>
      </div>
    </header>
  );
}
