"use client";
import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products, categoryLabels, type Category } from "@/lib/products";

const order: Category[] = ["women", "gents", "kids", "bedsheets"];

export default function Shop(){
 const [category,setCategory]=useState<"all"|Category>("all");
 const [query,setQuery]=useState("");
 const [sort,setSort]=useState("featured");

 const filtered = useMemo(()=>{
  let list = products.filter((p)=> category==="all" || p.category===category);
  if(query.trim()){
   const q=query.toLowerCase();
   list=list.filter((p)=>`${p.name} ${p.code} ${p.fabric} ${p.color}`.toLowerCase().includes(q));
  }
  if(sort==="low") list=[...list].sort((a,b)=>a.price-b.price);
  if(sort==="high") list=[...list].sort((a,b)=>b.price-a.price);
  return list;
 },[category,query,sort]);

 return <main>
  <section className="shop-hero-v20 shop-hero-v25">
   <div className="container">
    <div className="eyebrow">Noor Collection Store</div>
    <h1>Shop by category, code or style.</h1>
    <p>Search products, filter by category and sort prices in a cleaner premium shopping layout.</p>
    <div className="shop-hero-pills-v25">
      <span>Women</span><span>Gents</span><span>Kids</span><span>Bed Sheets</span>
    </div>
   </div>
  </section>

  <section className="section shop-section-v20">
   <div className="container">
    <div className="shop-toolbar-v20">
      <div className="search-box-v20">
        <span>⌕</span>
        <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search by code, fabric, color..." />
      </div>
      <select value={sort} onChange={(e)=>setSort(e.target.value)}>
        <option value="featured">Featured</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
    </div>

    <div className="category-tabs-v20">
      <button className={category==="all"?"active":""} onClick={()=>setCategory("all")}>All</button>
      {order.map((cat)=><button key={cat} className={category===cat?"active":""} onClick={()=>setCategory(cat)}>{categoryLabels[cat]}</button>)}
    </div>

    <div className="result-line-v20">
      <b>{filtered.length}</b> products found
    </div>

    <div className="grid-products">
      {filtered.map((p)=><ProductCard key={p.id} product={p}/>)}
    </div>
   </div>
  </section>
 </main>
}
