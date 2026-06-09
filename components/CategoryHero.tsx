import Link from "next/link";
import { createWhatsAppLink } from "@/lib/products";

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
};

export default function CategoryHero({ eyebrow, title, subtitle, image }: Props) {
  const wa = createWhatsAppLink(`Assalam o Alaikum, mujhe Noor Collection ki ${title} dekhni hai.`);

  return (
    <section className="category-hero-v24 category-hero-v25">
      <div className="container category-hero-shell-v24 category-hero-shell-v25">
        <div className="category-copy-v24 category-copy-v25">
          <div className="eyebrow">{eyebrow}</div>
          <h1>{title}</h1>
          <p>{subtitle}</p>

          <div className="hero-buttons">
            <Link href="/shop" className="btn btn-dark">Shop All</Link>
            <a href={wa} target="_blank" className="btn btn-light">Order on WhatsApp</a>
          </div>
        </div>

        <div className="category-visual-v24 category-visual-v25">
          <div className="category-visual-card-v24 category-visual-card-v25">
            <div className="category-image-badge-v25">Featured Pick</div>
            <img src={image} alt={title} />
          </div>
        </div>
      </div>
    </section>
  );
}
