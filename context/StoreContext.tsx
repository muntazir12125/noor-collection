"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/lib/products";

type CartItem = Product & { quantity: number };
type User = { name: string; email: string } | null;
type StoreContextType = {
  cart: CartItem[];
  user: User;
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  login: (email: string, name?: string) => void;
  logout: () => void;
  cartTotal: number;
  cartCount: number;
};
const StoreContext = createContext<StoreContextType | undefined>(undefined);
export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User>(null);
  useEffect(() => {
    const savedCart = localStorage.getItem("noor_cart");
    const savedUser = localStorage.getItem("noor_user");
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);
  useEffect(() => { localStorage.setItem("noor_cart", JSON.stringify(cart)); }, [cart]);
  useEffect(() => { user ? localStorage.setItem("noor_user", JSON.stringify(user)) : localStorage.removeItem("noor_user"); }, [user]);
  const addToCart = (product: Product) => setCart((items) => {
    const exists = items.find((i) => i.id === product.id);
    if (exists) return items.map((i) => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
    return [...items, { ...product, quantity: 1 }];
  });
  const removeFromCart = (id: string) => setCart((items) => items.filter((i) => i.id !== id));
  const updateQty = (id: string, qty: number) => setCart((items) => items.map((i) => i.id === id ? { ...i, quantity: Math.max(1, qty) } : i));
  const clearCart = () => setCart([]);
  const login = (email: string, name = "Noor Customer") => setUser({ email, name });
  const logout = () => setUser(null);
  const cartTotal = useMemo(() => cart.reduce((sum, i) => sum + i.price * i.quantity, 0), [cart]);
  const cartCount = useMemo(() => cart.reduce((sum, i) => sum + i.quantity, 0), [cart]);
  return <StoreContext.Provider value={{ cart, user, addToCart, removeFromCart, updateQty, clearCart, login, logout, cartTotal, cartCount }}>{children}</StoreContext.Provider>;
}
export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}
