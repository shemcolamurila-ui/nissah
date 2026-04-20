import { motion } from "motion/react";
import { Phone, MapPin, ChefHat, Utensils, ArrowRight, Instagram, Facebook, Star, CheckCircle2 } from "lucide-react";

const MENU_ITEMS = [
  {
    category: "01. Signature Chapatis",
    items: [
      { name: "Brown Chapati", options: ["10 Pieces @ 500/-", "2kg @ 1100/-"] },
      { name: "Butternut Chapati", options: ["10 Pieces @ 400/-", "2kg @ 900/-"] },
      { name: "White Chapati", options: ["10 Pieces @ 300/-", "2kg @ 800/-"] },
    ],
  },
  {
    category: "02. Snacks & More",
    items: [
      { name: "Samosa Ndengu", options: ["10 Pieces @ 200/-"] },
      { name: "Samosa Nyama", options: ["10 Pieces @ 400/-"] },
      { name: "Mandazi Packet", options: ["10 Packet @ 500/-"] },
    ],
  },
];

const PRECOOKED_ITEMS = [
  { name: "Brown", price: "400/–", qty: "10 pcs" },
  { name: "Butternut", price: "300/–", qty: "10 pcs" },
  { name: "White", price: "200/–", qty: "10 pcs" },
];

const REVIEWS = [
  { name: "SARAH W.", text: "The butternut chapatis are out of this world! So soft and flavor-rich.", stars: 5 },
  { name: "JOHN M.", text: "Quick delivery to Kasarani. Best samosas I've had in a long time.", stars: 5 },
];

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans selection:bg-ink selection:text-paper">
      <div className="max-w-[1240px] mx-auto px-6 py-12 flex flex-col min-h-screen">
        
        {/* Editorial Header */}
        <header className="flex flex-col md:flex-row justify-between items-end border-b-2 border-ink pb-8 mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-7xl md:text-9xl font-serif tracking-tighter leading-none italic">Nissah Kitchen</h1>
            <p className="mt-6 uppercase tracking-[0.3em] text-[10px] font-black opacity-60 flex items-center gap-4">
              <ChefHat size={12} />
              Gourmet Home Baking • Kasarani Mwiki
            </p>
          </motion.div>
          
          <div className="text-right mt-8 md:mt-0">
            <p className="text-2xl font-serif italic mb-1">Direct Order</p>
            <a href="tel:0705391052" className="text-xl font-bold tracking-tight hover:opacity-70 transition-opacity">
              0705 391 052
            </a>
          </div>
        </header>

        {/* Hero Meta Banner */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 border-b border-ink/10 pb-16">
          <div className="md:col-span-8">
            <h2 className="text-4xl md:text-6xl font-serif italic mb-6 leading-tight">
              Warmth in every <br/>
              <span className="not-italic font-black text-butternut uppercase text-2xl md:text-3xl tracking-[0.2em] relative inline-block">
                handmade
                <div className="absolute bottom-0 left-0 w-full h-[4px] bg-butternut opacity-20 -z-10"></div>
              </span> bite.
            </h2>
            <p className="text-lg max-w-xl opacity-80 leading-relaxed font-medium">
              Authentic, freshly made chapatis and snacks delivered right to your doorstep. We use <span className="text-butternut font-bold">100% organic butternut</span> for our signature recipes.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col justify-end">
            <div className="bg-grain text-paper p-6 rounded-sm shadow-xl">
                <p className="text-[10px] uppercase font-black tracking-widest mb-4 text-butternut">Order Information</p>
                <div className="flex items-center gap-3 mb-2">
                    <MapPin size={16} className="text-butternut" />
                    <span className="text-sm font-bold tracking-tight">Kasarani Mwiki, Nairobi</span>
                </div>
                <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-butternut" />
                    <span className="text-sm font-bold tracking-tight">Available for Bulk Delivery</span>
                </div>
            </div>
          </div>
        </section>

        {/* Main Editorial Content Grid */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-16 flex-grow mb-20">
          
          {/* Left Column: Signature Menu */}
          <section className="lg:col-span-5 lg:border-r lg:border-ink/10 lg:pr-16">
            <div className="mb-16">
               <h3 className="text-[10px] uppercase tracking-[0.3em] font-black mb-10 text-grain border-l-2 border-butternut pl-4">01. Signature Chapatis</h3>
               <div className="space-y-8">
                  {MENU_ITEMS[0].items.map((item) => (
                    <div key={item.name} className="flex justify-between items-baseline group border-b border-ink/5 pb-4">
                      <div>
                        <span className="text-2xl font-serif italic">{item.name}</span>
                        <div className={`w-0 group-hover:w-full h-[1px] ${item.name.includes('Butternut') ? 'bg-butternut' : 'bg-grain'} transition-all duration-500`}></div>
                      </div>
                      <div className="text-right">
                        {item.options.map((opt, i) => (
                          <span key={i} className={`block ${i === 0 ? 'font-bold' : 'italic text-xs opacity-60'}`}>
                            {opt.replace('Pieces ', 'pcs ').replace(' @ ', ' / ')}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="mb-16">
               <h3 className="text-[10px] uppercase tracking-[0.3em] font-black mb-10 text-herbal border-l-2 border-herbal pl-4">02. Snacks & More</h3>
               <div className="space-y-8">
                  {MENU_ITEMS[1].items.map((item) => (
                    <div key={item.name} className="flex justify-between items-baseline group border-b border-ink/5 pb-4">
                      <span className="text-2xl font-serif italic">{item.name}</span>
                      <div className="text-right">
                        {item.options.map((opt, i) => (
                          <span key={i} className="block font-bold">
                            {opt.replace('Pieces ', 'pcs ').replace(' @ ', ' / ')}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
               </div>
            </div>
            
            {/* Reviews Embedded */}
            <div className="pt-8 border-t border-ink/10">
               <h3 className="text-[10px] uppercase tracking-[0.3em] font-black mb-6 opacity-40">Local Neighbors Say</h3>
               <div className="grid gap-8">
                 {REVIEWS.map(rev => (
                   <div key={rev.name} className="group">
                      <p className="font-serif italic text-lg leading-snug group-hover:text-butternut transition-colors duration-300">"{rev.text}"</p>
                      <p className="text-[9px] font-black tracking-widest mt-2">— {rev.name}</p>
                   </div>
                 ))}
               </div>
            </div>
          </section>

          {/* Right Column: Precooked & Feature */}
          <section className="lg:col-span-7 flex flex-col gap-12">
            
            {/* Dark Precooked Block */}
            <div className="bg-ink text-paper p-10 md:p-12 rounded-sm shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-wheat opacity-5 -mr-16 -mt-16 rotate-45"></div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-black mb-10 text-wheat font-sans">03. Precooked Favorites</h3>
              <div className="grid grid-cols-2 gap-12">
                {PRECOOKED_ITEMS.map((item, i) => (
                  <div key={item.name} className={`${i === 2 ? 'col-span-2 pt-8 border-t border-white/10' : ''}`}>
                    <p className={`text-xs uppercase font-black tracking-widest opacity-60 mb-2 ${item.name === 'Butternut' ? 'text-butternut' : ''}`}>{item.name}</p>
                    <p className="text-4xl font-serif tracking-tight">
                      {item.price} <span className="text-xs uppercase opacity-40 italic tracking-tighter">/ {item.qty}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Feature Block */}
            <div className="relative flex-grow flex items-center justify-center border border-ink/10 overflow-hidden min-h-[300px] bg-stone/30">
               <div className="absolute inset-x-0 bottom-0 h-1 bg-butternut opacity-10"></div>
               <img 
                 src="https://images.unsplash.com/photo-1541518763669-279f00ed51ca?q=80&w=1000&auto=format&fit=crop" 
                 alt="Process" 
                 className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale mix-blend-multiply" 
                 referrerPolicy="no-referrer"
               />
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 className="text-center z-10 px-6 md:px-20"
               >
                  <p className="font-serif italic text-4xl md:text-5xl mb-6 text-grain">“The secret is in the butternut.”</p>
                  <div className="w-16 h-[2px] bg-butternut mx-auto mb-6"></div>
                  <p className="text-[10px] uppercase tracking-[0.4em] font-black text-ink">Freshly Prepared Daily in Kasarani</p>
               </motion.div>
            </div>

            {/* Process / Contact */}
            <div className="grid md:grid-cols-2 gap-8 border-t border-ink/10 pt-12">
                <div>
                   <h4 className="text-[10px] uppercase font-black tracking-[0.2em] mb-4 text-herbal">The Process</h4>
                   <p className="text-sm italic opacity-80 leading-relaxed font-serif text-grain">
                     Hand-kneaded, oil-free preparation available on request. We prioritize texture and health in every batch.
                   </p>
                </div>
                <div className="flex flex-col items-end">
                   <a 
                     href="tel:0705391052"
                     className="inline-flex items-center gap-3 px-8 py-4 bg-grain text-paper rounded-full text-xs font-black uppercase tracking-widest hover:bg-butternut transition-all duration-300 shadow-lg"
                   >
                     Order Direct
                     <ArrowRight size={14} />
                   </a>
                </div>
            </div>
          </section>
        </main>

        {/* Editorial Footer */}
        <footer className="mt-auto flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] font-black border-t border-ink pb-8 pt-8 opacity-60">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <span>© 2024 Nissah Kitchen</span>
            <div className="w-1 h-1 bg-ink rounded-full"></div>
            <span>Mwiki Road, Kasarani</span>
          </div>
          <div className="flex gap-8">
            <span className="hover:opacity-100 transition-opacity cursor-pointer">Menu</span>
            <span className="hover:opacity-100 transition-opacity cursor-pointer">Process</span>
            <span className="hover:opacity-100 transition-opacity cursor-pointer">Contact</span>
          </div>
          <div className="mt-4 md:mt-0">
            <span>Delivery Available All Week</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
