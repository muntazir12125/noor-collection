"use client";
import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { createWhatsAppLink, categoryLabels } from "@/lib/products";
import { useStore } from "@/context/StoreContext";

export default function ProductCard({product}:{product:Product}){
 const {addToCart}=useStore();
 const [quick,setQuick]=useState(false);
 const wa=createWhatsAppLink(`Assalam o Alaikum, mujhe Noor Collection ka ${product.name} (${product.code}) order karna hai. Price: ${product.priceLabel}`);
 return <>
  <article className="product-card modern-product-card product-card-v19 product-card-v27">
   <Link href={`/product/${product.id}`} className="product-img modern-product-img product-img-v27">
    <img src={product.image} alt={product.name}/>
    <span className="product-gloss-v27" />
    <span className="product-hover-label-v33">View Details</span>
   </Link>
   <div className="product-body product-body-v27">
    <div className="product-code">{product.code} • {categoryLabels[product.category]}</div>
    <h3 className="product-title">{product.name}</h3>
    <p className="product-meta">{product.fabric} • {product.color}</p>
    <div className="product-row product-row-v27"><span className="price">{product.priceLabel}</span><button className="btn btn-mini btn-ghost" type="button" onClick={()=>setQuick(true)}>Quick View</button></div>
    <div className="product-row compact-row"><button className="btn btn-mini btn-primary" onClick={()=>addToCart(product)}>Add to Cart</button><a className="btn btn-mini btn-ghost" href={wa} target="_blank">WhatsApp</a></div>
   </div>
  </article>
  {quick && <div className="quick-modal" onClick={()=>setQuick(false)}>
    <div className="quick-modal-card quick-modal-card-v27" onClick={(e)=>e.stopPropagation()}>
      <button className="quick-close" type="button" onClick={()=>setQuick(false)}>×</button>
      <div className="quick-img"><img src={product.image} alt={product.name}/></div>
      <div className="quick-info">
        <span className="product-chip-v36">{categoryLabels[product.category]}</span>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <div className="info-box">
          <div className="info-row"><span>Code</span><b>{product.code}</b></div>
          <div className="info-row"><span>Category</span><b>{categoryLabels[product.category]}</b></div>
          <div className="info-row"><span>Price</span><b>{product.priceLabel}</b></div>
          <div className="info-row"><span>Fabric</span><b>{product.fabric}</b></div>
        </div>
        <div className="product-row compact-row"><button className="btn btn-primary" onClick={()=>addToCart(product)}>Add to Cart</button><Link className="btn btn-ghost" href={`/product/${product.id}`}>Open Detail</Link></div>
      </div>
    </div>
  </div>}
 </>
}
