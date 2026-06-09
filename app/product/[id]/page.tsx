"use client";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { products, createWhatsAppLink, categoryLabels } from "@/lib/products";
import { useStore } from "@/context/StoreContext";
import ProductGallery from "@/components/ProductGallery";
import ProductCard from "@/components/ProductCard";

export default function ProductDetail(){
 const params=useParams<{id:string}>();
 const product=products.find(p=>p.id===params.id);
 const {addToCart}=useStore();
 if(!product) return notFound();

 const related = products.filter((p)=>p.category===product.category && p.id!==product.id).slice(0,4);
 const wa=createWhatsAppLink(`Assalam o Alaikum, mujhe Noor Collection ka product ${product.code} - ${product.name} order karna hai. Price: ${product.priceLabel}`);

 return <main>
  <section className="page-hero page-hero-v25 page-hero-v28">
    <div className="container">
      <div className="eyebrow">Noor Collection Product</div>
      <h1 className="page-title">{product.name}</h1>
      <p className="page-subtitle-v25">Premium product presentation with luxury layout, clear product code and faster order flow.</p>
    </div>
  </section>

  <section className="section product-detail-v22 product-detail-v25 product-detail-v28">
    <div className="container detail-grid detail-grid-v22 detail-grid-v25 detail-grid-v28">
      <div className="luxury-product-media-v28">
        <ProductGallery src={product.image} alt={product.name} />
        <div className="media-trust-row-v28">
          <span>✦ Quality Checked</span>
          <span>◈ Fast Confirmation</span>
          <span>◎ Secure Order</span>
        </div>
      </div>

      <div className="product-copy-v22 product-copy-v25 product-copy-v28">
        <div className="product-topline-v22">
          <span className="product-chip-v22">{categoryLabels[product.category]}</span>
        </div>

        <h2 className="product-title-v22 product-title-v25 product-title-v28">{product.name}</h2>
        <div className="price-ribbon-v25 price-ribbon-v28">{product.priceLabel}</div>

        <p className="product-subtitle-v22 product-subtitle-v25">{product.description}</p>

        <div className="feature-strip-v22 feature-strip-v25 feature-strip-v28">
          <div><strong>Premium Look</strong><span>Elegant presentation</span></div>
          <div><strong>Fast Order</strong><span>WhatsApp ready</span></div>
          <div><strong>Trusted Listing</strong><span>Code based browsing</span></div>
        </div>

        <div className="info-box info-box-v22 info-box-v25 info-box-v28">
          <div className="info-row"><span>Product Code</span><b>{product.code}</b></div>
          <div className="info-row"><span>Category</span><b>{categoryLabels[product.category]}</b></div>
          <div className="info-row"><span>Price</span><b>{product.priceLabel}</b></div>
          <div className="info-row"><span>Fabric</span><b>{product.fabric}</b></div>
          <div className="info-row"><span>Color</span><b>{product.color}</b></div>
        </div>

        <div className="product-actions-v22 product-actions-v25 product-actions-v28">
          <button className="btn btn-primary" onClick={()=>addToCart(product)}>Add to Cart</button>
          <a href={wa} target="_blank" className="btn btn-ghost">Order on WhatsApp</a>
          <Link className="btn btn-ghost" href="/shop">Back to Shop</Link>
        </div>

        <div className="detail-help-v25 detail-help-v28">
          <div className="notice notice-v22 notice-v25 notice-v28">
            <div className="notice-icon-v22">✦</div>
            <p>
              Mention product code <b>{product.code}</b> on WhatsApp for faster confirmation. Click the image to open a larger premium preview.
            </p>
          </div>
          <div className="detail-service-card-v25 detail-service-card-v28">
            <h3>Need help before order?</h3>
            <p>Ask for live stock, fabric details, measurements or payment instructions directly on WhatsApp.</p>
            <a href={wa} target="_blank" className="btn btn-dark">Chat Now</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="section related-products-v28">
    <div className="container">
      <div className="section-head modern-head">
        <div>
          <div className="eyebrow">Related Products</div>
          <h2>More from {categoryLabels[product.category]}</h2>
          <p className="section-intro">Continue browsing similar products with the same premium card style.</p>
        </div>
        <Link href={`/${product.category === "bedsheets" ? "bedsheets" : product.category}`} className="btn btn-mini btn-ghost">View Category</Link>
      </div>
      <div className="grid-products editorial-grid">{related.map((p)=><ProductCard key={p.id} product={p}/>)}</div>
    </div>
  </section>
 </main>
}
