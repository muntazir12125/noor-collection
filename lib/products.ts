export type Category = "women" | "gents" | "kids" | "bedsheets";

export type Product = {
  id: string;
  code: string;
  name: string;
  price: number;
  priceLabel: string;
  fabric: string;
  status: string;
  image: string;
  color: string;
  category: Category;
  description: string;
};

export const whatsappNumber = "923085585922";
export const whatsappDisplay = "0308 5585922";
export const jazzcashNumber = "0321 9504634";
export const bankTitle = "Meezan Bank";
export const bankAccountNumber = "02360113521739";
export const facebookUrl = "https://www.facebook.com/noorcollection1212";
export const instagramUrl = "https://www.instagram.com/noor_collection1212/";
export const tiktokUrl = "https://www.tiktok.com/@noor_collection1212";
export const tiktokHandle = "@noor_collection1212";
export const brandLine = "We have a variety of clothes brand's for men's, women's & child's at best deal prices.";
export const storeAddress = "Noor Collection – Main Bazaar / Layyah Road, Garh More, Jhang, Punjab, Pakistan, Garh Maharaja, Pakistan, 35080";
export const googleMapsUrl = "https://share.google/pAAunExuAvVY3DSYt";
export const supportEmail = "info@noorcollection.pk";
export const phoneDisplay = "0308 5585922";
export const phoneUrl = "tel:+923085585922";
export const emailUrl = "mailto:info@noorcollection.pk";
export const businessHours = "Monday to Saturday: 10:00 AM – 9:00 PM";
export const shippingNote = "Standard delivery across Pakistan. Estimated delivery: 3–7 working days.";
export const dummyOwner = "Noor Collection Support Team";

export const products: Product[] = [
  { id:"nc-01", code:"NC-01", name:"Florence Noir Edit", price:3290, priceLabel:"Rs. 3,290", fabric:"Printed Lawn", status:"Only 1 Piece", image:"/products/real-01.png", color:"Black / Orange", category:"women", description:"Bold zebra-inspired printed lawn with a striking floral dupatta and elegant black trouser pairing." },
  { id:"nc-02", code:"NC-02", name:"Florence Mustard Edit", price:3290, priceLabel:"Rs. 3,290", fabric:"Printed Lawn", status:"Only 1 Piece", image:"/products/real-02.png", color:"Mustard / White", category:"women", description:"A bright summer-ready lawn suit with signature zebra pattern and statement dupatta styling." },
  { id:"nc-03", code:"NC-03", name:"White Patel Berry Dots", price:3490, priceLabel:"Rs. 3,490", fabric:"Luxury Lawn", status:"Only 1 Piece", image:"/products/real-03.png", color:"Berry / Ivory", category:"women", description:"Clean ivory base with elegant dot pattern and soft berry trouser tone for a graceful premium look." },
  { id:"nc-04", code:"NC-04", name:"White Patel Lime Bloom", price:3490, priceLabel:"Rs. 3,490", fabric:"Luxury Lawn", status:"Only 1 Piece", image:"/products/real-04.png", color:"Lime / White", category:"women", description:"Refreshing lime palette with floral dupatta details and airy unstitched lawn fabric." },
  { id:"nc-05", code:"NC-05", name:"Hania Noor Teal Craft", price:3590, priceLabel:"Rs. 3,590", fabric:"Lawn Suit", status:"Only 1 Piece", image:"/products/real-06.png", color:"Teal / Ivory", category:"women", description:"Modern ethnic motifs in teal with matching bottom and coordinated catalog styling." },
  { id:"nc-06", code:"NC-06", name:"Hania Noor Mustard Craft", price:3590, priceLabel:"Rs. 3,590", fabric:"Lawn Suit", status:"Only 1 Piece", image:"/products/real-07.png", color:"Mustard / Black", category:"women", description:"A warm mustard statement piece featuring geometric motifs and a strong contrasting dupatta." },

  { id:"nc-11", code:"NC-11", name:"Black Floral 3 Piece Suit", price:3990, priceLabel:"Rs. 3,990", fabric:"Embroidered Lawn", status:"Only 1 Piece", image:"/products/women-11.png", color:"Black / Gold", category:"women", description:"Elegant black 3 piece women suit with detailed floral embroidery and premium catalog styling." },
  { id:"nc-12", code:"NC-12", name:"Royal Purple Floral Suit", price:3990, priceLabel:"Rs. 3,990", fabric:"Embroidered Lawn", status:"Only 1 Piece", image:"/products/women-12.png", color:"Purple / Black", category:"women", description:"Royal purple women suit with statement floral details and matching trouser/dupatta layout." },
  { id:"nc-13", code:"NC-13", name:"Sage Green Floral Suit", price:3990, priceLabel:"Rs. 3,990", fabric:"Embroidered Lawn", status:"Only 1 Piece", image:"/products/women-13.png", color:"Sage Green", category:"women", description:"Soft sage green suit with black floral linework and premium 3 piece presentation." },
  { id:"nc-14", code:"NC-14", name:"Lilac Floral 3 Piece Suit", price:3990, priceLabel:"Rs. 3,990", fabric:"Embroidered Lawn", status:"Only 1 Piece", image:"/products/women-14.png", color:"Lilac / Black", category:"women", description:"Beautiful lilac women suit with elegant floral linework and soft feminine color palette." },
  { id:"nc-15", code:"NC-15", name:"Navy Floral 3 Piece Suit", price:3990, priceLabel:"Rs. 3,990", fabric:"Embroidered Lawn", status:"Only 1 Piece", image:"/products/women-15.png", color:"Navy / Gold", category:"women", description:"Premium navy suit with gold floral embroidery and graceful formal look." },
  { id:"nc-16", code:"NC-16", name:"Peach Floral 3 Piece Suit", price:3990, priceLabel:"Rs. 3,990", fabric:"Embroidered Lawn", status:"Only 1 Piece", image:"/products/women-16.png", color:"Peach / Black", category:"women", description:"Fresh peach women suit with elegant black floral design and soft premium finish." },

  { id:"gt-01", code:"GT-01", name:"J. Premium Cotton – Aqua", price:4290, priceLabel:"Rs. 4,290", fabric:"J. Cotton", status:"Available", image:"/products/gents-01.png", color:"Aqua Blue", category:"gents", description:"Premium boxed J. fabric in aqua blue shade with branded packing and elegant gents presentation." },
  { id:"gt-02", code:"GT-02", name:"J. Premium Cotton – Mustard", price:4290, priceLabel:"Rs. 4,290", fabric:"J. Cotton", status:"Available", image:"/products/gents-02.png", color:"Mustard", category:"gents", description:"Premium boxed gents fabric with classic mustard shade and branded packaging." },
  { id:"gt-03", code:"GT-03", name:"J. Premium Cotton – Golden", price:4290, priceLabel:"Rs. 4,290", fabric:"J. Cotton", status:"Available", image:"/products/gents-03.png", color:"Golden Mustard", category:"gents", description:"Elegant golden mustard boxed gents fabric with refined premium look." },
  { id:"gt-04", code:"GT-04", name:"J. Premium Cotton – Camel", price:4290, priceLabel:"Rs. 4,290", fabric:"J. Cotton", status:"Available", image:"/products/gents-04.png", color:"Camel Brown", category:"gents", description:"Classic camel brown gents fabric in branded box presentation." },
  { id:"gt-05", code:"GT-05", name:"J. Premium Cotton – Cream", price:4290, priceLabel:"Rs. 4,290", fabric:"J. Cotton", status:"Available", image:"/products/gents-05.png", color:"Cream", category:"gents", description:"Soft cream shade premium gents fabric with branded packing and clean luxury feel." },

  { id:"bs-01", code:"BS-01", name:"Classic Brown Pattern Bed Sheet", price:2890, priceLabel:"Rs. 2,890", fabric:"Printed Cotton", status:"Available", image:"/products/bedsheet-01.png", color:"Brown / Ivory", category:"bedsheets", description:"Classic brown patterned bed sheet design with rich borders and traditional home textile feel." },
  { id:"bs-02", code:"BS-02", name:"Golden Embroidered Bed Sheet Set", price:3490, priceLabel:"Rs. 3,490", fabric:"Velvet Feel", status:"Available", image:"/products/bedsheet-02.png", color:"Golden", category:"bedsheets", description:"Golden bed sheet set with rich embroidery pattern and premium bedroom styling." },
  { id:"bs-03", code:"BS-03", name:"Brown Heritage Bed Sheet", price:2890, priceLabel:"Rs. 2,890", fabric:"Printed Cotton", status:"Available", image:"/products/bedsheet-03.png", color:"Brown / Beige", category:"bedsheets", description:"Heritage brown bed sheet with detailed printed motifs and matching pillow style presentation." },

  { id:"kd-01", code:"KD-01", name:"Boys Hoodie Set – Mustard", price:2490, priceLabel:"Rs. 2,490", fabric:"Cotton Fleece", status:"Available", image:"/products/kids-01.png", color:"Mustard / Blue", category:"kids", description:"Warm mustard kids hoodie set with matching denim-style trouser for a smart casual look." },
  { id:"kd-02", code:"KD-02", name:"Boys Hoodie Set – Orange", price:2490, priceLabel:"Rs. 2,490", fabric:"Cotton Fleece", status:"Available", image:"/products/kids-02.png", color:"Orange / Blue", category:"kids", description:"Bright orange hoodie set paired with blue denim-style trouser, perfect for everyday kids fashion." },
  { id:"kd-03", code:"KD-03", name:"Spider Kids Set – Black", price:2290, priceLabel:"Rs. 2,290", fabric:"Cotton Jersey", status:"Available", image:"/products/kids-03.png", color:"Black / Blue", category:"kids", description:"Black full-sleeve Spider themed kids set with matching trouser and sporty styling." },
  { id:"kd-04", code:"KD-04", name:"Spider Kids Set – Yellow", price:2290, priceLabel:"Rs. 2,290", fabric:"Cotton Jersey", status:"Available", image:"/products/kids-04.png", color:"Yellow / Blue", category:"kids", description:"Eye-catching yellow Spider inspired kids set with comfortable fabric and matching trouser." },
  { id:"kd-05", code:"KD-05", name:"Spider Kids Set – White", price:2290, priceLabel:"Rs. 2,290", fabric:"Cotton Jersey", status:"Available", image:"/products/kids-05.png", color:"White / Blue", category:"kids", description:"Soft white Spider kids outfit with graphic styling and coordinated blue trouser." },
  { id:"kd-06", code:"KD-06", name:"Boys Shirt – Navy Squares", price:1690, priceLabel:"Rs. 1,690", fabric:"Soft Cotton", status:"Available", image:"/products/kids-06.png", color:"Navy / Mustard", category:"kids", description:"Stylish navy button shirt for boys with square print and neat collar finish." },
  { id:"kd-07", code:"KD-07", name:"Boys Shirt – Red Pattern", price:1690, priceLabel:"Rs. 1,690", fabric:"Soft Cotton", status:"Available", image:"/products/kids-07.png", color:"Red / Black", category:"kids", description:"Vibrant red boys shirt featuring bold pattern work and a smart party wear feel." },
  { id:"kd-08", code:"KD-08", name:"Boys Shirt – Black Check", price:1790, priceLabel:"Rs. 1,790", fabric:"Soft Cotton", status:"Available", image:"/products/kids-08.png", color:"Black / Blue", category:"kids", description:"Classic black check shirt with blue highlights for a polished and trendy boys look." },
  { id:"kd-09", code:"KD-09", name:"Boys Shirt – Red Square", price:1690, priceLabel:"Rs. 1,690", fabric:"Soft Cotton", status:"Available", image:"/products/kids-09.png", color:"Red", category:"kids", description:"Smart red boys shirt with subtle square print and clean formal-casual styling." },
  { id:"kd-10", code:"KD-10", name:"Boys Shirt – Mustard Pattern", price:1690, priceLabel:"Rs. 1,690", fabric:"Soft Cotton", status:"Available", image:"/products/kids-10.png", color:"Mustard / Black", category:"kids", description:"Mustard boys shirt with stylish pattern design, ideal for festive and casual wear." },
  { id:"kd-11", code:"KD-11", name:"Boys Shirt – Black Blue Texture", price:1790, priceLabel:"Rs. 1,790", fabric:"Soft Cotton", status:"Available", image:"/products/kids-11.png", color:"Black / Blue", category:"kids", description:"Premium black and blue textured shirt with elegant finishing for a modern kids collection." },
  { id:"kd-12", code:"KD-12", name:"Boys Shirt – Mustard Leaf Print", price:1690, priceLabel:"Rs. 1,690", fabric:"Soft Cotton", status:"Available", image:"/products/kids-12.png", color:"Mustard / Black", category:"kids", description:"Unique mustard leaf print boys shirt designed for a standout stylish appearance." }

];


export const categoryMeta: Record<Category, {
  title: string;
  subtitle: string;
  heroImage: string;
  eyebrow: string;
  href: string;
}> = {
  women: {
    title: "Women Collection",
    subtitle: "Elegant suits and graceful everyday fashion.",
    heroImage: "/products/women-16.png",
    eyebrow: "Elegant styles",
    href: "/women",
  },
  gents: {
    title: "Gents Collection",
    subtitle: "Classic fabrics with a clean premium feel.",
    heroImage: "/products/gents-01.png",
    eyebrow: "Classic menswear",
    href: "/gents",
  },
  kids: {
    title: "Kids Collection",
    subtitle: "Cute sets and smart shirts for everyday wear.",
    heroImage: "/products/kids-01.png",
    eyebrow: "New kids arrivals",
    href: "/kids",
  },
  bedsheets: {
    title: "Bed Sheets",
    subtitle: "Soft home textile picks with elegant styling.",
    heroImage: "/products/bedsheet-02.png",
    eyebrow: "Home textile picks",
    href: "/bedsheets",
  },
};

export const categoryLabels: Record<Category, string> = {
  women: "Women Collection",
  gents: "Gents Collection",
  kids: "Children Collection",
  bedsheets: "Bed Sheets"
};

export function createWhatsAppLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
