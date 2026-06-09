import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
export const metadata: Metadata = { title:"Noor Collection - Premium Ladies Clothing", description:"Premium ladies clothing store for unstitched lawn suits with WhatsApp ordering." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Providers><Header/>{children}<Footer/></Providers></body></html>}
