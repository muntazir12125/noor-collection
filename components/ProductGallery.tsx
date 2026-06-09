"use client";
import ProductZoom from "@/components/ProductZoom";

export default function ProductGallery({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="single-product-gallery-v22">
      <ProductZoom src={src} alt={alt} />
    </div>
  );
}
