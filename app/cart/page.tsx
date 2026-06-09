"use client";
import Link from "next/link";
import { useStore } from "@/context/StoreContext";
import { createWhatsAppLink } from "@/lib/products";

export default function Cart(){
 const {cart,removeFromCart,updateQty,cartTotal}=useStore();

 const msg = cart.length
  ? [
      "Assalam o Alaikum, mujhe Noor Collection ka ye order confirm karna hai:",
      ...cart.map((i)=>`${i.code} - ${i.name} x ${i.quantity} = Rs. ${i.price * i.quantity}`),
      `Total: Rs. ${cartTotal}`,
    ].join("\n")
  : "Assalam o Alaikum, mujhe Noor Collection se order details chahiye.";

 const wa=createWhatsAppLink(msg);

 return <main>
  <section className="page-hero cart-hero-v27"><div className="container"><div className="eyebrow">Cart</div><h1 className="page-title">Your Shopping Cart</h1><p className="page-subtitle-v25">Review your selected items, update quantities and continue with a more premium checkout flow.</p></div></section>
  <section className="section"><div className="container two-col cart-layout-v27">
    <div>
      {cart.length===0?
      <div className="empty empty-v27"><h2>Your cart is empty</h2><p>Explore the Noor Collection shop and add your favorite products.</p><Link className="btn btn-primary" href="/shop">Go to Shop</Link></div>
      :cart.map(item=><div className="cart-item cart-item-v27" key={item.id}><img src={item.image} alt={item.name}/><div className="cart-copy-v27"><b>{item.name}</b><p>{item.code} • {item.priceLabel}</p><div className="qty"><button onClick={()=>updateQty(item.id,item.quantity-1)}>-</button><b>{item.quantity}</b><button onClick={()=>updateQty(item.id,item.quantity+1)}>+</button><button className="remove-v27" onClick={()=>removeFromCart(item.id)}>Remove</button></div></div><b className="price">Rs. {item.price*item.quantity}</b></div>)}
    </div>
    <aside className="form-card form-card-v27 cart-summary-v27">
      <h2 style={{marginTop:0}}>Cart Summary</h2>
      <div className="info-row"><span>Total</span><b>Rs. {cartTotal}</b></div>
      <div className="notice">Delivery and payment instructions will be shown clearly in the next step.</div>
      <div className="summary-mini-v27">
        <div><strong>Fast order</strong><span>WhatsApp ready</span></div>
        <div><strong>Premium flow</strong><span>Luxury checkout</span></div>
      </div>
      <Link href="/checkout" className="btn btn-primary" style={{width:'100%',marginTop:18}}>Checkout</Link>
      <a href={wa} target="_blank" className="btn btn-ghost" style={{width:'100%',marginTop:10}}>WhatsApp Checkout</a>
    </aside></div></section></main>
}
