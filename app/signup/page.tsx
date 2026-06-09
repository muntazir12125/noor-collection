"use client";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/context/StoreContext";

export default function Signup(){
 const {login}=useStore();
 const router=useRouter();
 const [name,setName]=useState("");
 const [email,setEmail]=useState("");
 function submit(e:FormEvent){e.preventDefault();login(email || name || "Noor Customer");router.push("/shop")}
 return <main>
  <section className="auth-page-v28 signup-page-v28">
   <div className="auth-bg-orb-v28 auth-orb-a" />
   <div className="auth-bg-orb-v28 auth-orb-b" />
   <div className="container auth-grid-v28">
    <div className="auth-copy-v28">
      <div className="eyebrow">Create Account</div>
      <h1>Join Noor Collection shopping experience.</h1>
      <p>Create an account for a cleaner cart, checkout and WhatsApp order flow.</p>
      <div className="auth-benefits-v28">
        <span>Premium Store</span>
        <span>Easy Orders</span>
        <span>Best Deal Prices</span>
      </div>
    </div>

    <form className="auth-card-v28" onSubmit={submit}>
      <img src="/brand/noor-logo-transparent.png" alt="Noor Collection" />
      <h2>Sign Up</h2>
      <p>Demo account setup for store testing.</p>
      <label className="label">Full Name</label>
      <input className="input" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your name" />
      <label className="label">Email Address</label>
      <input className="input" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@example.com" type="email" />
      <label className="label">Password</label>
      <input className="input" placeholder="Create password" type="password" />
      <button className="btn btn-primary" style={{width:"100%"}}>Create Account</button>
      <div className="auth-switch-v28">Already have account? <Link href="/login">Login</Link></div>
    </form>
   </div>
  </section>
 </main>
}
