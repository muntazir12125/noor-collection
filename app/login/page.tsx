"use client";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/context/StoreContext";

export default function Login(){
 const {login}=useStore();
 const router=useRouter();
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
 function submit(e:FormEvent){e.preventDefault();login(email || "customer@noorcollection.pk");router.push("/shop")}
 return <main>
  <section className="auth-page-v28">
   <div className="auth-bg-orb-v28 auth-orb-a" />
   <div className="auth-bg-orb-v28 auth-orb-b" />
   <div className="container auth-grid-v28">
    <div className="auth-copy-v28">
      <div className="eyebrow">Customer Login</div>
      <h1>Welcome back to Noor Collection.</h1>
      <p>Login to continue shopping, manage cart items and complete your premium store order flow.</p>
      <div className="auth-benefits-v28">
        <span>Fast Checkout</span>
        <span>Saved Cart Flow</span>
        <span>WhatsApp Support</span>
      </div>
    </div>

    <form className="auth-card-v28" onSubmit={submit}>
      <img src="/brand/noor-logo-transparent.png" alt="Noor Collection" />
      <h2>Login</h2>
      <p>Use any email and password for the current demo flow.</p>
      <label className="label">Email Address</label>
      <input className="input" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@example.com" type="email" />
      <label className="label">Password</label>
      <input className="input" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" type="password" />
      <button className="btn btn-primary" style={{width:"100%"}}>Login</button>
      <div className="auth-switch-v28">New customer? <Link href="/signup">Create account</Link></div>
    </form>
   </div>
  </section>
 </main>
}
