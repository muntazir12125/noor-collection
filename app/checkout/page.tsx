"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useStore } from "@/context/StoreContext";
import { jazzcashNumber, bankTitle, bankAccountNumber, createWhatsAppLink, supportEmail, emailUrl } from "@/lib/products";

export default function Checkout(){
 const {cart,cartTotal,clearCart}=useStore();
 const router=useRouter();
 const [payment,setPayment]=useState("cod"); const supportWa=createWhatsAppLink("Assalam o Alaikum, mujhe payment help chahiye.");
 function submit(e:FormEvent){e.preventDefault();clearCart();router.push('/order-success')}
 return <main>
  <section className="page-hero checkout-hero-v27"><div className="container"><div className="eyebrow">Checkout</div><h1 className="page-title">Complete Your Order</h1><p className="page-subtitle-v25">Luxury styled checkout with cleaner steps, payment guidance and a more trustworthy layout.</p></div></section>
  <section className="section"><form className="container two-col checkout-layout-v27" onSubmit={submit}>
    <div className="form-card form-card-v27 checkout-card-v27">
      <div className="checkout-progress-v20 checkout-progress-v27"><span className="active">Details</span><span>Payment</span><span>Confirm</span></div>
      <h2 style={{marginTop:0}}>Customer Details</h2>
      <label className="label">Full Name</label><input required className="input" placeholder="Your name"/>
      <label className="label">Phone Number</label><input required className="input" placeholder="0308 5585922"/>
      <label className="label">City</label><input required className="input" placeholder="Lahore"/>
      <label className="label">Complete Address</label><textarea required className="input" rows={4} placeholder="House, street, area, city"/>
      <h2>Payment Method</h2>
      {[['cod','Cash on Delivery'],['jazzcash','JazzCash'],['bank','Bank Transfer / Meezan Bank'],['online','Online Payment Placeholder']].map(([id,label])=><label className="payment-option payment-option-v27" key={id}><input type="radio" name="payment" checked={payment===id} onChange={()=>setPayment(id)}/><span>{label}</span></label>)}
      {payment==='jazzcash' && <div className="notice"><b>JazzCash Number:</b> {jazzcashNumber}<br/>Send payment screenshot on WhatsApp after transfer.</div>}
      {payment==='bank' && <div className="notice"><b>{bankTitle} Account:</b> {bankAccountNumber}<br/>Send payment screenshot on WhatsApp after transfer.</div>}
      <p className="notice">Online gateway structure is ready. Add real gateway integration later if needed.<br/><a href={supportWa} target="_blank">WhatsApp Payment Help</a> • <a href={emailUrl}>{supportEmail}</a></p>
    </div>
    <aside className="form-card form-card-v27 checkout-summary-v27">
      <h2 style={{marginTop:0}}>Order Summary</h2>
      {cart.map(i=><div className="info-row" key={i.id}><span>{i.code} x {i.quantity}</span><b>Rs. {i.price*i.quantity}</b></div>)}
      <div className="info-row"><span>Total</span><b>Rs. {cartTotal}</b></div>
      <div className="notice" style={{marginTop:14}}>Your order details will be confirmed on WhatsApp before dispatch.</div>
      <div className="summary-mini-v27 summary-mini-checkout-v27"><div><strong>Secure</strong><span>Order flow</span></div><div><strong>Trusted</strong><span>Payment info</span></div></div>
      <button className="btn btn-primary" style={{width:'100%',marginTop:18}}>Place Order</button>
    </aside>
  </form></section></main>
}
