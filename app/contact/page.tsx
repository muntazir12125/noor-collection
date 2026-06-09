import { createWhatsAppLink, facebookUrl, instagramUrl, whatsappDisplay, jazzcashNumber, bankTitle, bankAccountNumber, storeAddress, googleMapsUrl, supportEmail, phoneUrl, emailUrl, businessHours, shippingNote, dummyOwner } from "@/lib/products";
export default function Contact(){
 const wa=createWhatsAppLink("Assalam o Alaikum, mujhe Noor Collection se order/place details chahiye.");
 return <main>
  <section className="page-hero"><div className="container"><div className="eyebrow">Contact</div><h1 className="page-title">Contact Noor Collection</h1></div></section>
  <section className="section"><div className="container two-col">
   <div className="content-card premium-contact-card">
    <h2 style={{marginTop:0,color:'var(--maroon)'}}>Visit, Order & Connect</h2>
    <p style={{color:'var(--muted)',lineHeight:1.8}}>All important Noor Collection details are clickable for customers — WhatsApp, Instagram, Facebook, call, email and Google Maps.</p>
    <div className="click-grid" style={{marginTop:20}}>
      <a className="click-tile" href={wa} target="_blank"><span className="tile-icon wa-icon">WA</span><b>WhatsApp</b><small>{whatsappDisplay}</small></a>
      <a className="click-tile" href={instagramUrl} target="_blank"><span className="tile-icon insta-icon">IG</span><b>Instagram</b><small>@noor_collection1212</small></a>
      <a className="click-tile" href={facebookUrl} target="_blank"><span className="tile-icon fb-icon">FB</span><b>Facebook</b><small>Noor Collection</small></a>
      <a className="click-tile" href={phoneUrl}><span className="tile-icon call-icon">☎</span><b>Call</b><small>{whatsappDisplay}</small></a>
      <a className="click-tile" href={emailUrl}><span className="tile-icon mail-icon">✉</span><b>Email</b><small>{supportEmail}</small></a>
      <a className="click-tile" href={googleMapsUrl} target="_blank"><span className="tile-icon map-icon">⌖</span><b>Google Maps</b><small>Get Directions</small></a>
    </div>
    <div className="address-card">
      <div className="address-icon">⌖</div>
      <div>
        <h3>Store Address</h3>
        <p>{storeAddress}</p>
        <a href={googleMapsUrl} target="_blank" className="btn btn-mini btn-ghost">Open in Google Maps</a>
      </div>
    </div>
   </div>
   <div className="form-card premium-contact-side">
    <h2 style={{marginTop:0}}>Store Details</h2>
    <div className="info-row"><span>Support</span><b>{dummyOwner}</b></div>
    <div className="info-row"><span>Business Hours</span><b>{businessHours}</b></div>
    <div className="info-row"><span>Shipping</span><b>{shippingNote}</b></div>
    <div className="info-row"><span>JazzCash</span><b>{jazzcashNumber}</b></div>
    <div className="info-row"><span>{bankTitle}</span><b>{bankAccountNumber}</b></div>
    <div className="map-panel">
      <div className="map-pin">⌖</div>
      <h3>Noor Collection Location</h3>
      <p>Main Bazaar / Layyah Road, Garh More, Jhang, Punjab.</p>
      <a href={googleMapsUrl} target="_blank" className="btn btn-light btn-mini">Get Directions</a>
    </div>
   </div>
  </div></section>
 </main>
}
