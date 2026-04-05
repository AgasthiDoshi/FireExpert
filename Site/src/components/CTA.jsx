export default function CTA({ theme }) {
  return (
    <section
      id="contact"
      className={`
        relative overflow-hidden text-center px-5 py-[100px]

        ${
          theme === "dark"
            ? "bg-[#0b0b0b] text-white"
            : "bg-[#f5f5f5] text-[#111]"
        }
      `}
      style={{
        backgroundImage:
          theme === "dark"
            ? "radial-gradient(ellipse at 50% 0%, rgba(255,90,31,0.18) 0%, transparent 65%)"
            : "radial-gradient(ellipse at 50% 0%, rgba(255,90,31,0.10) 0%, transparent 65%)"
      }}
    >
      {/* TOP BORDER */}
      <div className="absolute top-0 left-[10%] right-[10%] h-[1px]
        bg-gradient-to-r from-transparent via-[#ff5a1f]/60 to-transparent" />

      <div className="max-w-[720px] mx-auto relative z-10">

        {/* BADGE */}
        <div className="
          inline-block mb-5 px-4 py-[5px] rounded-full
          text-[0.7rem] font-bold tracking-[0.2em]
          font-['Inter'] uppercase
          text-[#ff5a1f]
          bg-[#ff5a1f]/10 border border-[#ff5a1f]/30
        ">
          GET PROTECTED TODAY
        </div>

        {/* TITLE */}
        <h2 className="
          font-['Bebas_Neue']
          text-[clamp(2.4rem,6vw,4rem)]
          tracking-[0.04em]
          leading-[1.05]
          mb-4
        ">
          Ready to Secure Your{" "}
          <span
            className="text-[#ff5a1f]"
            style={{ textShadow: "0 0 30px rgba(255,90,31,0.4)" }}
          >
            Premises?
          </span>
        </h2>

        {/* SUBTITLE */}
        <p
          className="font-['Inter'] text-[1.05rem] leading-[1.65] max-w-[560px] mx-auto mb-9"
          style={{
            color:
              theme === "dark"
                ? "rgba(255,255,255,0.75)"
                : "rgba(0,0,0,0.65)"
          }}
        >
          Our certified fire safety engineers are ready to audit, install,
          and certify your property — fast, reliable, and fully compliant.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 justify-center flex-wrap mb-9">

          {/* PRIMARY */}
          <a
            href="tel:+919820305111"
            className="
              flex items-center gap-2 px-7 py-4 rounded-xl
              font-['Inter'] text-base font-semibold
              bg-[#ff5a1f] text-white
              shadow-[0_8px_28px_rgba(255,90,31,0.4)]
              hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(255,90,31,0.55)]
              transition
            "
          >
            📞 Call Us Now
          </a>

          {/* SECONDARY */}
          <a
            href="mailto:info@firexpert.in"
            className={`
              flex items-center gap-2 px-7 py-4 rounded-xl
              font-['Inter'] text-base font-semibold border transition
              ${
                theme === "dark"
                  ? "bg-white/5 text-white border-white/20 hover:bg-white/10"
                  : "bg-black/5 text-black border-black/20 hover:bg-black/10"
              }
            `}
          >
            ✉️ Send Enquiry
          </a>

        </div>

        {/* TRUST */}
        <div
          className="flex gap-6 justify-center flex-wrap font-['Inter'] text-sm"
          style={{
            color:
              theme === "dark"
                ? "rgba(255,255,255,0.55)"
                : "rgba(0,0,0,0.5)"
          }}
        >
          <span>✅ NOC Approved</span>
          <span>✅ Certified Engineers</span>
          <span>✅ Pan-India Service</span>
        </div>

      </div>
    </section>
  );
}