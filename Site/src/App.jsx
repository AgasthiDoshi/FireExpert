import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import DiagonalMarquees from "./components/DiagonalMarquees";
import Hero from "./components/Hero";
// import Services from "./components/Services";
// import Products from "./components/Products";
// import CTA from "./components/CTA";
// import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest("a[href^='#']");
      if (!target) return;
      const id = target.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div className="app-wrapper">
      <Navbar
        theme={theme}
        toggleTheme={() => setTheme(prev => (prev === "dark" ? "light" : "dark"))}
      />
      <DiagonalMarquees />
      <Hero theme={theme} />
      {/* <Services /> */}
      {/* <Products /> */}
      {/* <CTA theme={theme} /> */}
      {/* <Footer theme={theme} /> */}
    </div>
  );
}

export default App;