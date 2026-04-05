import { useEffect, useState } from "react";

const services = [
  "Fire Audit",
  "Fire Extinguishers",
  "Hydrant Systems",
  "Sprinkler Systems",
  "Fire NOC",
  "Training & Mock Drills"
];

const keywords = [
  { word: "Fire Safety", suffix: " engineered for compliance" },
  { word: "अग्निसुरक्षा", suffix: " नियमांसाठी अभियंता पद्धतीने" }
];

export default function Hero({ theme }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const current = keywords[index].word;

  useEffect(() => {
    const speed = isDeleting ? 40 : 65;

    const timer = setTimeout(() => {
      setText(prev =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1300);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((index + 1) % keywords.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center px-4 pt-[140px] pb-[60px]
      ${theme === "dark" ? "bg-[#0b0b0b] text-white" : "bg-[#fafafa] text-black"}`}
    >
      <div className="max-w-[1100px] mx-auto w-full text-center md:text-left">

        {/* TITLE */}
        <h1 className="
          font-['Bebas_Neue']
          text-[clamp(2.2rem,6vw,3.8rem)]
          tracking-wide leading-[1.1]
          flex flex-wrap gap-2 mb-4 justify-center md:justify-start
        ">
          <span
            className="text-[#ff5a1f]"
            style={{
              textShadow:
                "0 0 10px rgba(255,90,31,0.5), 0 0 25px rgba(255,90,31,0.25)"
            }}
          >
            {text}
            <span className="ml-1 animate-pulse">|</span>
          </span>

          <span className="opacity-90">
            {keywords[index].suffix}
          </span>
        </h1>

        {/* SUBTITLE */}
        <p className="
          font-['Inter']
          max-w-[520px]
          text-[1rem]
          leading-[1.7]
          opacity-80
          mb-7
          mx-auto md:mx-0
        ">
          End-to-end fire protection systems designed to meet regulations,
          protect lives, and secure businesses.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 flex-wrap mb-10 justify-center md:justify-start">

          <button className="
            font-['Inter']
            px-6 py-3.5 rounded-xl text-sm font-semibold
            bg-[#ff5a1f] text-white
            shadow-lg hover:scale-105 transition
          ">
            Get Service
          </button>

          <button className={`
            font-['Inter']
            px-6 py-3.5 rounded-xl text-sm font-semibold border
            ${theme === "dark" ? "border-white/30" : "border-black/30"}
          `}>
            Know More
          </button>

        </div>

        {/* CAROUSEL */}
       <div className="relative overflow-hidden">

  {/* LEFT FADE */}
  <div
    className={`absolute left-0 top-0 h-full w-[80px] z-10 pointer-events-none
    ${
      theme === "dark"
        ? "bg-gradient-to-r from-[#0b0b0b] to-transparent"
        : "bg-gradient-to-r from-[#fafafa] to-transparent"
    }`}
  />

  {/* RIGHT FADE */}
  <div
    className={`absolute right-0 top-0 h-full w-[80px] z-10 pointer-events-none
    ${
      theme === "dark"
        ? "bg-gradient-to-l from-[#0b0b0b] to-transparent"
        : "bg-gradient-to-l from-[#fafafa] to-transparent"
    }`}
  />

  {/* CAROUSEL TRACK */}
  <div className="flex gap-4 w-max animate-[scroll_22s_linear_infinite]">
    {[...services, ...services].map((s, i) => (
      <div
        key={i}
        className={`
          px-5 py-3 rounded-xl text-sm font-semibold
          ${theme === "dark"
            ? "bg-white/5 border border-white/10"
            : "bg-black/5 border border-black/10"}
        `}
      >
        {s}
      </div>
    ))}
  </div>

</div>

      </div>

      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
}