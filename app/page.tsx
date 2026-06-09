import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import HeroSlider from "@/components/HeroSlider";
import FaqSection from "@/components/FaqSection";
import ReviewsSection from "@/components/ReviewsSection";
import SizeGuide from "@/components/SizeGuide";
import { products, instagramUrl, jazzcashNumber, bankTitle, bankAccountNumber, whatsappDisplay } from "@/lib/products";

const departments = [
  { icon: "♀", title: "Women Collection", text: "Premium unstitched lawn and boutique style outfits.", image: "/products/women-16.png", href: "/women" },
  { icon: "♂", title: "Gents Collection", text: "Premium boxed fabric and classic traditional wear.", image: "/products/gents-01.png", href: "/gents" },
  { icon: "★", title: "Kids Collection", text: "Hoodie sets, boys shirts and stylish everyday outfits.", image: "/products/kids-01.png", href: "/kids" },
  { icon: "▣", title: "Bed Sheets", text: "Premium home textile and elegant bed sheet collection.", image: "/products/bedsheet-02.png", href: "/bedsheets" },
];

const highlights = [
  { icon: "✦", title: "Premium Store Feel", text: "Homepage, categories and product cards now feel more elegant and polished." },
  { icon: "◈", title: "Category Wise Flow", text: "Women, gents, kids and bed sheets each have a cleaner shopping path." },
  { icon: "◎", title: "Smart Mobile View", text: "Refined spacing, stronger blocks and better action buttons across devices." },
  { icon: "⌁", title: "Luxury Checkout", text: "Cart and checkout feel more premium while staying easy to use." },
];

function CategoryRow({
  eyebrow,
  title,
  text,
  href,
  items,
}: {
  eyebrow: string;
  title: string;
  text: string;
  href: string;
  items: typeof products;
}) {
  return (
    <section className="section category-row-v36-section">
      <div className="container category-row-v36">
        <div className="category-row-copy-v36">
          <div className="eyebrow">{eyebrow}</div>
          <h2>{title}</h2>
          <p className="section-intro">{text}</p>
          <Link href={href} className="btn btn-ghost">View Category</Link>
        </div>
        <div className="category-row-cards-v36">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(){
 const popular = products.slice(0,4);
 const women = products.filter(p=>p.category==="women").slice(0,4);
 const gents = products.filter(p=>p.category==="gents").slice(0,2);
 const kids = products.filter(p=>p.category==="kids").slice(0,2);
 const bedsheets = products.filter(p=>p.category==="bedsheets").slice(0,2);

 return <main>
  <HeroSlider />

  <section className="trust-strip-v19 trust-strip-v27">
    <div className="container trust-grid-v19 trust-grid-v27">
      <div><b>Fast Delivery</b><span>Across Pakistan</span></div>
      <div><b>WhatsApp Order</b><span>{whatsappDisplay}</span></div>
      <div><b>Premium Picks</b><span>Curated category edits</span></div>
      <div><b>Secure Payment</b><span>JazzCash / Bank</span></div>
    </div>
  </section>

  <section className="section compact-section section-v27-first">
    <div className="container">
      <div className="section-head modern-head"><div><div className="eyebrow">Best sellers</div><h2>Popular Picks</h2><p className="section-intro">Clean picks from every category.</p></div><Link className="btn btn-mini btn-ghost" href="/shop">Shop All</Link></div>
      <div className="grid-products editorial-grid">{popular.map(p=><ProductCard key={p.id} product={p}/>)}</div>
    </div>
  </section>

  <section className="section compact-section section-v27-departments">
    <div className="container">
      <div className="section-head centered"><div><div className="eyebrow">Shop by department</div><h2>Complete store categories</h2><p className="section-intro">Simple category-wise shopping.</p></div></div>
      <div className="department-grid department-grid-v27">{departments.map((item)=><Link href={item.href} className="department-card department-card-v27" key={item.title}><div className="department-thumb"><img src={item.image} alt={item.title}/><div className="department-icon">{item.icon}</div></div><div className="department-body"><h3>{item.title}</h3><p>{item.text}</p><span className="btn btn-mini btn-ghost">Explore</span></div></Link>)}</div>
    </div>
  </section>

  <section className="section compact-section">
    <div className="container">
      <div className="section-head modern-head"><div><div className="eyebrow">Women collection</div><h2>Featured Women Pieces</h2><p className="section-intro">Fresh women pieces with clean product cards.</p></div><Link className="btn btn-mini btn-ghost" href="/women">View Women</Link></div>
      <div className="grid-products editorial-grid">{women.map(p=><ProductCard key={p.id} product={p}/>)}</div>
    </div>
  </section>

  <CategoryRow eyebrow="Classic menswear" title="Gents Collection" text="Classic fabric picks with a premium clean layout." href="/gents" items={gents} />
  <CategoryRow eyebrow="Family shopping" title="Kids Collection" text="Cute outfits and smart shirts in a cleaner section." href="/kids" items={kids} />
  <CategoryRow eyebrow="Home textile" title="Bed Sheets" text="Soft textures and warm patterns for home." href="/bedsheets" items={bedsheets} />

  <section className="section modern-features-section modern-features-section-v27">
    <div className="container">
      <div className="section-head centered"><div><div className="eyebrow">Professional features</div><h2>Better experience, clearer flow</h2><p className="section-intro">Homepage, cards, responsive layout and ordering flow are now more premium.</p></div></div>
      <div className="feature-grid modern-feature-grid">{highlights.map(item=><div className="feature modern-feature modern-feature-v27" key={item.title}><div className="feature-icon modern-icon">{item.icon}</div><h3>{item.title}</h3><p>{item.text}</p></div>)}</div>
    </div>
  </section>

  <section className="section tone-section tone-section-v27">
    <div className="container two-tone-grid two-tone-grid-v27">
      <div className="content-card payment-panel payment-panel-v27">
        <div className="eyebrow">Payments & social</div>
        <h2>All account details added</h2>
        <div className="payments-grid">
          <div className="payment-mini"><span>WhatsApp</span><b>{whatsappDisplay}</b></div>
          <div className="payment-mini"><span>JazzCash</span><b>{jazzcashNumber}</b></div>
          <div className="payment-mini"><span>{bankTitle}</span><b>{bankAccountNumber}</b></div>
          <div className="payment-mini"><span>Instagram</span><a href={instagramUrl} target="_blank">Open Page</a></div>
          <div className="payment-mini"><span>Cash on Delivery</span><b>Available</b></div>
        </div>
      </div>
      <div className="content-card style-panel style-panel-v27">
        <div className="eyebrow">Order note</div>
        <h2>Payment details show after order</h2>
        <p className="section-intro">After placing an order, customers will see COD, WhatsApp, JazzCash and bank transfer details with screenshot instructions.</p>
        <Link href="/checkout" className="btn btn-primary">View Checkout</Link>
      </div>
    </div>
  </section>

  <ReviewsSection />
  <SizeGuide />
  <FaqSection />
 </main>
}
