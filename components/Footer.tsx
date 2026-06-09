import Link from "next/link";
import { createWhatsAppLink, facebookUrl, instagramUrl, tiktokUrl, brandLine, whatsappDisplay, jazzcashNumber, bankTitle, bankAccountNumber, storeAddress, googleMapsUrl, supportEmail, phoneUrl, emailUrl, businessHours } from "@/lib/products";

export default function Footer(){
 const wa=createWhatsAppLink("Assalam o Alaikum, mujhe Noor Collection ki products ke bare mein details chahiye.");
 return <>
  <footer className="footer modern-footer premium-footer footer-v25 footer-v26 footer-v27">
    <div className="container footer-shell-v25 footer-shell-v26 footer-shell-v27">
      <div className="footer-intro-v25 footer-intro-v26 footer-intro-v27">
        <div className="footer-brand footer-logo-row footer-brand-v25 footer-brand-v26 footer-brand-v27">
          <div className="footer-logo-inline-v26 footer-logo-inline-v27">
            <img src="/brand/noor-logo-transparent.png" alt="Noor Collection" />
          </div>
          <div>
            <h3>Noor Collection</h3>
            <p>{brandLine}</p>
          </div>
        </div>

        <div className="footer-social-block-v32">
          <div className="footer-socials footer-socials-v25 footer-socials-v26 footer-socials-v27 footer-socials-top-v32">
            <a href={facebookUrl} target="_blank" className="social-icon-img social-icon-fb" aria-label="Facebook"><img src="/icons/facebook-icon.png" alt="Facebook" /></a>
            <a href={wa} target="_blank" className="social-icon-img social-icon-wa" aria-label="WhatsApp"><img src="/icons/whatsapp-icon.png" alt="WhatsApp" /></a>
            <a href={instagramUrl} target="_blank" className="social-icon-img social-icon-ig" aria-label="Instagram"><img src="/icons/instagram-icon.png" alt="Instagram" /></a>
            <a href={tiktokUrl} target="_blank" className="social-icon-img social-icon-tt" aria-label="TikTok"><img src="/icons/tiktok-icon.png" alt="TikTok" /></a>
          </div>
        </div>

        <div className="footer-contact-pills-v25 footer-contact-pills-v26 footer-contact-pills-v27">
          <a href={phoneUrl}><img src="/icons/call-icon.png" alt="Call" /> <span>Call: {whatsappDisplay}</span></a>
          <a href={emailUrl}><span className="footer-mail-pill-v26">@</span> <span>{supportEmail}</span></a>
          <a href={googleMapsUrl} target="_blank"><img src="/icons/google-maps-icon.png" alt="Maps" /> <span>Open Google Maps</span></a>
        </div>
      </div>

      <div className="footer-grid footer-grid-v25 footer-grid-v26 footer-grid-v27">
        <div>
          <h4>Categories</h4>
          <p>
            <Link href="/women">Women</Link><br/>
            <Link href="/gents">Gents</Link><br/>
            <Link href="/kids">Kids</Link><br/>
            <Link href="/bedsheets">Bed Sheets</Link><br/>
            <Link href="/shop">Shop All</Link>
          </p>
        </div>

        <div>
          <h4>Customer Care</h4>
          <p>
            <Link href="/contact">Contact Information</Link><br/>
            <Link href="/delivery-return">Delivery Policy</Link><br/>
            <Link href="/delivery-return">Return Policy</Link><br/>
            <Link href="/faq">FAQs</Link><br/>
            <Link href="/size-guide">Size Guide</Link>
          </p>
        </div>

        <div>
          <h4>Store Details</h4>
          <p>
            <a href={googleMapsUrl} target="_blank">{storeAddress}</a><br/>
            Hours: {businessHours}
          </p>
        </div>

        <div className="footer-payment-v25 footer-payment-v26 footer-payment-v27">
          <h4>Payments</h4>
          <div className="footer-payment-card-v25"><span>WhatsApp</span><b>{whatsappDisplay}</b></div>
          <div className="footer-payment-card-v25"><span>JazzCash</span><b>{jazzcashNumber}</b></div>
          <div className="footer-payment-card-v25"><span>{bankTitle}</span><b>{bankAccountNumber}</b></div>
        </div>
      </div>
    </div>
  </footer>
  <a className="whatsapp-float whatsapp-float-v26 whatsapp-float-v27" href={wa} target="_blank"><img src="/icons/whatsapp-icon.png" alt="WhatsApp" /></a>
 </>
}
