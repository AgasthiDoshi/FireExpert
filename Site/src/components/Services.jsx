import React from "react";

const services = [
  { icon: "🔍", title: "Fire Audit", desc: "Detailed inspection and risk assessment to meet statutory fire safety norms." },
  { icon: "🧯", title: "Fire Extinguishers", desc: "Supply, installation, and maintenance of certified extinguishers." },
  { icon: "💧", title: "Hydrant Systems", desc: "Design and execution of internal & external fire hydrant systems." },
  { icon: "🚿", title: "Sprinkler Systems", desc: "Automatic fire sprinkler systems engineered for rapid response." },
  { icon: "📋", title: "Fire NOC", desc: "Complete assistance for Fire NOC approvals and renewals." },
  { icon: "🏃", title: "Training & Mock Drills", desc: "On-site fire training and evacuation mock drills for staff safety." }
];

export default function Services({ theme }) {
  return (
    <section
      id="services"
      className={`
        relative overflow-hidden px-5 py-[80px] pb-[100px]

        ${
          theme === "dark"
            ? "bg-[linear-gradient(135deg,#1a1a1a_0%,#2d2d2d_25%,#ff6b35_50%,#ff8c42_75%,#1a1a1a_100%)]"
            : "bg-[linear-gradient(135deg,#ffffff_0%,#f5f5f5_25%,#ff6b35_50%,#ff8c42_75%,#ffffff_100%)]"
        }

        bg-[length:400%_400%]
        animate-[gradientShift_15s_ease_infinite]
      `}
    >
      {/* GLOW OVERLAY */}
      <div
        className={`
          absolute inset-0 pointer-events-none
          animate-[pulseGlow_8s_ease-in-out_infinite]

          ${
            theme === "dark"
              ? "bg-[radial-gradient(circle_at_20%_50%,rgba(255,107,53,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,140,66,0.2),transparent_50%),radial-gradient(circle_at_40%_20%,rgba(0,0,0,0.3),transparent_50%)]"
              : "bg-[radial-gradient(circle_at_20%_50%,rgba(255,107,53,0.10),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,140,66,0.15),transparent_50%),radial-gradient(circle_at_40%_20%,rgba(0,0,0,0.05),transparent_50%)]"
          }
        `}
      />

      <div className="max-w-[1100px] mx-auto relative z-10">

        {/* TITLE */}
        <h2 className="
          font-['Bebas_Neue']
          text-[clamp(2.2rem,5vw,3.5rem)]
          text-center mb-3 tracking-wide
        "
        style={{
          textShadow:
            theme === "dark"
              ? "0 4px 20px rgba(255,107,53,0.4)"
              : "0 4px 20px rgba(255,107,53,0.2)"
        }}
        >
          Our Fire Safety Services
        </h2>

        {/* SUBTITLE */}
        <p className="
          text-center max-w-[600px] mx-auto mb-12 text-sm leading-relaxed
          font-['Inter']
        "
        style={{
          color:
            theme === "dark"
              ? "rgba(255,255,255,0.85)"
              : "rgba(0,0,0,0.75)"
        }}
        >
          End-to-end fire protection solutions designed for compliance,
          reliability, and life safety.
        </p>

        {/* GRID */}
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              style={{ animationDelay: `${i * 80}ms` }}
              className={`
                p-6 rounded-2xl backdrop-blur-xl border
                transition-all duration-300
                hover:-translate-y-2 hover:scale-[1.02]

                ${
                  theme === "dark"
                    ? "bg-black/40 border-[#ff6b35]/30 hover:shadow-[0_20px_60px_rgba(255,107,53,0.35)]"
                    : "bg-white/70 border-[#ff6b35]/30 hover:shadow-[0_20px_60px_rgba(255,107,53,0.2)]"
                }
              `}
            >
              <span className="text-2xl mb-3 block">{service.icon}</span>

              <h3 className="font-['Bebas_Neue'] text-lg tracking-wide mb-2 text-[#ff6b35]">
                {service.title}
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{
                  color:
                    theme === "dark"
                      ? "rgba(255,255,255,0.78)"
                      : "rgba(0,0,0,0.68)"
                }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* KEYFRAMES */}
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes pulseGlow {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
        `}
      </style>
    </section>
  );
}