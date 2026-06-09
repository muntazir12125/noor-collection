import { createWhatsAppLink, googleMapsUrl } from "@/lib/products";

const reviews = [
  ["Ayesha Khan", "NC-14 Lilac suit ka fabric soft tha aur color bilkul picture jaisa nikla. WhatsApp par order confirm karna easy tha.", "Women Collection"],
  ["Hira Malik", "Gents J. fabric packing bohat premium thi. Delivery timing aur product details clear mil gayi.", "Gents Fabric"],
  ["Sana Iqbal", "Bed sheet quality achi thi aur print bhi premium feel de raha tha. Order process simple hai.", "Bed Sheets"],
  ["Mahnoor Ali", "Product code share kiya aur team ne quickly stock confirm kar diya. Overall experience professional laga.", "Customer Support"],
];

export default function ReviewsSection(){
 const reviewWa = createWhatsAppLink("Assalam o Alaikum, main Noor Collection ke liye apna review share karna chahta/chahti hoon.");
 return <section className="section reviews-v20 reviews-v21">
  <div className="container">
   <div className="section-head centered"><div><div className="eyebrow">Customer trust</div><h2>Customer Reviews</h2><p className="section-intro">Real-store feel ke liye review cards aur clickable review actions add kiye gaye hain.</p></div></div>
   <div className="reviews-grid-v20 reviews-grid-v21">
    {reviews.map(([name,text,type])=><div className="review-card-v20 review-card-v21" key={name}><div className="stars-v20">★★★★★</div><p>“{text}”</p><div className="review-meta-v21"><b>{name}</b><span>{type}</span></div></div>)}
   </div>
   <div className="review-actions-v21">
    <a href={reviewWa} target="_blank" className="btn btn-primary">Write a Review</a>
    <a href={googleMapsUrl} target="_blank" className="btn btn-ghost">Review on Google Maps</a>
   </div>
  </div>
 </section>
}
