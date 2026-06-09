import { createWhatsAppLink, whatsappDisplay, storeAddress, googleMapsUrl, supportEmail, emailUrl, phoneUrl, facebookUrl, instagramUrl } from "@/lib/products";
import Link from "next/link";

const faqs = [
  ["What’s your exchange and return policy?", "We only accept exchange or return requests for damaged or incorrect items reported within 24 hours of delivery. Product must remain unused and in original condition."],
  ["How long will it take to get my order?", "Orders are usually confirmed quickly and delivered in 3 to 7 working days depending on your city and product availability."],
  ["What are the payment options? Is COD available?", "You can order through WhatsApp, Cash on Delivery on selected orders, JazzCash and Meezan Bank transfer. All payment details are shown after checkout."],
  ["What’s the standard of your fabric and stitching?", "Noor Collection focuses on premium quality unstitched and catalog products. Product details and fabric information are clearly shown on each product page."],
  ["What are the shipping charges?", "Our standard shipping rate is PKR 350 across Pakistan."],
  ["Where is Noor Collection located?", storeAddress],
];

export default function FaqSection() {
  const wa = createWhatsAppLink("Assalam o Alaikum, mujhe Noor Collection ke FAQs aur order details chahiye.");
  const newsletterWa = createWhatsAppLink("Assalam o Alaikum, mujhe Noor Collection ki new arrivals aur offers ki updates chahiye.");
  return (
    <section className="section faq-news-section" id="faqs">
      <div className="container">
        <div className="section-head centered faq-head">
          <div>
            <div className="eyebrow">Help & Support</div>
            <h2>FAQs</h2>
          </div>
        </div>
        <div className="faq-list-box">
          {faqs.map(([q, a], idx) => (
            <details className="faq-item" key={q} open={idx === 4}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
        <div className="newsletter-card">
          <div className="eyebrow">Stay updated</div>
          <h3>Noor Collection</h3>
          <p>Sign up to our newsletter and be the first to get updates on discounts, new arrivals and promotions.</p>
          <form className="newsletter-form" action={newsletterWa} target="_blank">
            <input type="email" placeholder="Email address" />
            <button type="submit">→</button>
          </form>
        </div>
        <div className="faq-bottom-grid faq-bottom-grid-v21">
          <div>
            <h4>Contact Us</h4>
            <p>
              <a href={phoneUrl}>Call: {whatsappDisplay}</a><br/>
              <a href={emailUrl}>{supportEmail}</a><br/>
              <a href={googleMapsUrl} target="_blank">Open Google Maps</a><br/>
              <a href={wa} target="_blank">Order on WhatsApp</a>
            </p>
          </div>
          <div>
            <h4>Support</h4>
            <p>
              <Link href="/about">About us</Link><br/>
              <Link href="/contact">Contact us</Link><br/>
              <a href="#faqs">FAQs</a><br/>
              <a href={wa} target="_blank">Size Guidance</a>
            </p>
          </div>
          <div>
            <h4>Customer Care</h4>
            <p>
              <Link href="/contact">Contact Information</Link><br/>
              <Link href="/delivery-return">Privacy Policy</Link><br/>
              <Link href="/delivery-return">Refund Policy</Link><br/>
              <Link href="/delivery-return">Shipping Policy</Link>
            </p>
          </div>
          <div>
            <h4>Quick Help</h4>
            <p>
              <a href={wa} target="_blank">Order on WhatsApp</a><br/>
              <Link href="/shop">Best Sellers</Link><br/>
              <Link href="/women">New Arrivals</Link><br/>
              <Link href="/shop">Shop All</Link><br/>
              <a href={instagramUrl} target="_blank">Instagram</a><br/>
              <a href={facebookUrl} target="_blank">Facebook</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
