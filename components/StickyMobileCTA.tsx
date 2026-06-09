import { createWhatsAppLink } from "@/lib/products";

export default function StickyMobileCTA(){
 const wa=createWhatsAppLink("Assalam o Alaikum, mujhe Noor Collection ki latest collection dekhni hai.");
 return <div className="mobile-sticky-cta-v20">
  <a href="/shop">Shop</a>
  <a href={wa} target="_blank">WhatsApp</a>
  <a href="/cart">Cart</a>
 </div>
}
