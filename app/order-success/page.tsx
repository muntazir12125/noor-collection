import Link from "next/link";
import { createWhatsAppLink, whatsappDisplay, jazzcashNumber, bankTitle, bankAccountNumber, storeAddress, googleMapsUrl, supportEmail, emailUrl, phoneUrl } from "@/lib/products";

export default function Success(){
  const wa = createWhatsAppLink("Assalam o Alaikum, maine Noor Collection website par order place kar diya hai. Payment screenshot aur confirmation share kar raha/rahi hoon.");
  return <main>
    <section className="success-hero-v28">
      <div className="container success-card-v28">
        <div className="success-check-v28">✓</div>
        <div className="eyebrow">Order Placed</div>
        <h1>Thank you for your order</h1>
        <p>Your order request has been received. Send payment screenshot on WhatsApp for quick confirmation.</p>
        <div className="success-actions-v28">
          <a href={wa} target="_blank" className="btn btn-primary">Send Screenshot on WhatsApp</a>
          <Link href="/shop" className="btn btn-ghost">Continue Shopping</Link>
        </div>
      </div>
    </section>

    <section className="section invoice-section invoice-section-v28">
      <div className="container invoice-card invoice-card-v28">
        <div className="invoice-top">
          <div><div className="eyebrow">Payment & Contact</div><h1>Confirmation Details</h1><p>Use these details to complete payment or contact the store for support.</p></div>
          <div className="invoice-stamp">NOOR<br/>ORDER</div>
        </div>
        <div className="invoice-grid">
          <a className="payment-mini" href={phoneUrl}><span>Call / WhatsApp</span><b>{whatsappDisplay}</b></a>
          <div className="payment-mini"><span>Cash on Delivery</span><b>Available on selected orders</b></div>
          <div className="payment-mini"><span>JazzCash</span><b>{jazzcashNumber}</b></div>
          <div className="payment-mini"><span>{bankTitle}</span><b>{bankAccountNumber}</b></div>
          <a className="payment-mini" href={emailUrl}><span>Email Support</span><b>{supportEmail}</b></a>
          <a className="payment-mini" href={googleMapsUrl} target="_blank"><span>Store Location</span><b>Get Directions</b></a>
        </div>
        <div className="invoice-address"><b>Store Address:</b> {storeAddress}</div>
      </div>
    </section>
  </main>
}
