import Link from "next/link";
import { createWhatsAppLink, googleMapsUrl } from "@/lib/products";

export default function DeliveryReturn(){
 const wa=createWhatsAppLink("Assalam o Alaikum, mujhe delivery aur return policy ke bare mein details chahiye.");
 return <main>
  <section className="page-hero"><div className="container"><div className="eyebrow">Customer Care</div><h1 className="page-title">Delivery & Return Policy</h1></div></section>
  <section className="section"><div className="container policy-grid-v21">
    <div className="content-card"><h2>Delivery Policy</h2><p>Standard delivery across Pakistan is usually 3–7 working days after order confirmation. Shipping charges may vary by city and parcel size.</p><a href={wa} target="_blank" className="btn btn-primary">Ask Delivery Details</a></div>
    <div className="content-card"><h2>Return Policy</h2><p>Exchange or return is available only for damaged or incorrect items reported within 24 hours of delivery. Product must be unused and in original condition.</p><a href={wa} target="_blank" className="btn btn-ghost">Report Issue</a></div>
    <div className="content-card"><h2>Store Visit</h2><p>Customers can also visit the store location for product checking and direct purchase guidance.</p><a href={googleMapsUrl} target="_blank" className="btn btn-ghost">Open Google Maps</a></div>
    <div className="content-card"><h2>Shop More</h2><p>Browse women, gents, kids and bed sheet categories from the main shop page.</p><Link href="/shop" className="btn btn-primary">Go to Shop</Link></div>
  </div></section>
 </main>
}
