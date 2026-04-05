import { useState } from "react";
import productsData from "../data/products.json";

const WHATSAPP_NUMBER = "919820305111";

/* ===============================
   MODAL (PREMIUM)
================================ */
function ProductModal({ product, onClose, theme }) {
  const openWhatsApp = () => {
    const message = `Hello 👋

I am interested in:

🧯 ${product.name}

${product.desc}

${product.details}

Please share quotation and details.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-[1000] p-4
      ${theme === "dark" ? "bg-black/80" : "bg-black/40"} backdrop-blur-md`}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          relative w-full max-w-[900px]
          rounded-[24px] overflow-hidden flex flex-col md:flex-row
          ${theme === "dark" ? "bg-[#0f0f0f]" : "bg-white"}
          border border-[#ff6b35]/30
          shadow-[0_40px_120px_rgba(0,0,0,0.6)]
        `}
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-[#ff6b35]/20 flex items-center justify-center"
        >
          ✕
        </button>

        {/* IMAGE */}
        <div className="w-full md:w-[320px] flex items-center justify-center relative p-6 bg-black/5">
          <span className="absolute top-4 left-4 text-[10px] tracking-widest bg-[#ff6b35]/10 text-[#ff6b35] px-3 py-1 rounded-full">
            {product.category}
          </span>

          <img
            src={product.image}
            alt={product.name}
            className="w-[180px] object-contain z-10"
          />

          <div className="absolute w-[220px] h-[220px] bg-[#ff6b35]/20 blur-3xl rounded-full" />
        </div>

        {/* INFO */}
        <div className="flex-1 p-6 md:p-8 flex flex-col">
          <span className="text-xs tracking-widest text-[#ff6b35] mb-2">
            FIRE EXTINGUISHER
          </span>

          <h2 className="font-['Bebas_Neue'] text-[2rem] mb-3">
            {product.name}
          </h2>

          <p className="text-sm opacity-70 mb-4">{product.desc}</p>

          <div className="w-[50px] h-[2px] bg-gradient-to-r from-[#ff6b35] mb-5" />

          <p className="text-sm mb-6 opacity-90">{product.details}</p>

          {/* SPECS */}
          {product.specs?.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              {product.specs.map((s, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-md bg-white/5 border border-white/10"
                >
                  {s}
                </span>
              ))}
            </div>
          )}

          {/* CTA */}
          <button
            onClick={openWhatsApp}
            className="mt-auto bg-[#ff6b35] px-6 py-3 rounded-xl text-white font-semibold hover:scale-105 transition shadow-[0_10px_30px_rgba(255,107,53,0.4)]"
          >
            💬 Enquire on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

/* ===============================
   CARD (PREMIUM)
================================ */
function ProductCard({ product, onClick, index, theme }) {
  return (
    <div
      onClick={() => onClick(product)}
      style={{ animationDelay: `${index * 60}ms` }}
      className={`
        group relative overflow-hidden rounded-2xl cursor-pointer
        border backdrop-blur-xl

        ${
          theme === "dark"
            ? "bg-white/5 border-white/10"
            : "bg-white border-black/10 shadow-sm"
        }

        transition-all duration-300
        hover:-translate-y-2 hover:scale-[1.02]
        hover:shadow-[0_25px_80px_rgba(255,107,53,0.25)]
      `}
    >
      {/* glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_50%_0%,rgba(255,107,53,0.25),transparent_60%)]" />

      {/* IMAGE */}
      <div className="h-[140px] flex items-center justify-center relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-[110px] object-contain transition duration-300 group-hover:scale-110"
        />

        <div className="absolute bottom-2 w-[70%] h-[20px] bg-[#ff6b35]/20 blur-xl rounded-full" />
      </div>

      {/* BODY */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-['Bebas_Neue'] text-sm text-[#ff6b35]">
          {product.name}
        </h3>

        <p className="text-xs opacity-60">{product.desc}</p>

        <span className="text-[11px] text-[#ff6b35] mt-2 group-hover:tracking-widest transition">
          VIEW DETAILS →
        </span>
      </div>
    </div>
  );
}

/* ===============================
   MAIN
================================ */
export default function Products({ theme }) {
  const categories = productsData.map((g) => g.category);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const activeGroup = productsData.find(
    (g) => g.category === activeCategory
  );

  return (
    <section
      id="products"
      className={`py-[80px] px-5 ${
        theme === "dark" ? "bg-[#0a0a0a] text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-[1100px] mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="font-['Bebas_Neue'] text-[clamp(2.2rem,5vw,3.5rem)] mb-3">
            Fire Safety Products
          </h2>

          <p className="opacity-70">
            BIS-certified fire extinguishers for every environment.
          </p>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-4 py-2 rounded-full text-sm border transition
                ${
                  activeCategory === cat
                    ? "bg-[#ff6b35] text-white border-[#ff6b35]"
                    : theme === "dark"
                    ? "border-white/20 text-white/60"
                    : "border-black/20 text-black/60"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {activeGroup?.products.map((product, i) => (
            <ProductCard
              key={product.id}
              product={{ ...product, category: activeCategory }}
              onClick={setSelectedProduct}
              index={i}
              theme={theme}
            />
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          theme={theme}
        />
      )}
    </section>
  );
}