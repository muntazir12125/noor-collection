import ProductCard from "@/components/ProductCard";
import CategoryHero from "@/components/CategoryHero";
import { products, categoryMeta, type Category } from "@/lib/products";

const category: Category = "bedsheets";

export default function CategoryPage(){
  const items = products.filter((p)=>p.category===category);
  const meta = categoryMeta[category];

  return <main>
    <CategoryHero
      eyebrow={meta.eyebrow}
      title={meta.title}
      subtitle={meta.subtitle}
      image={meta.heroImage}
    />

    <section className="section">
      <div className="container">
        <div className="section-head modern-head">
          <div>
            <div className="eyebrow">{meta.title}</div>
            <h2>Available Products</h2>
            <p className="section-intro">Browse product codes, prices and details with a cleaner and more consistent layout.</p>
          </div>
        </div>
        <div className="grid-products">{items.map((p)=><ProductCard key={p.id} product={p}/>)}</div>
      </div>
    </section>
  </main>
}
