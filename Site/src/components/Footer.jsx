import logo from "/assets/fire-expert-logo.png";

export default function Footer({ theme }) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`
        px-5 py-[80px]
        ${theme === "dark" ? "bg-[#0b0b0b] text-white" : "bg-[#f5f5f5] text-black"}
      `}
    >
      <div className="max-w-[1100px] mx-auto">

        {/* TOP */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div>
            <img src={logo} alt="Fire Expert" className="h-10 mb-4" />

            <p
              className="text-sm leading-relaxed mb-4 font-['Inter']"
              style={{
                color:
                  theme === "dark"
                    ? "rgba(255,255,255,0.7)"
                    : "rgba(0,0,0,0.7)"
              }}
            >
              End-to-end fire protection solutions engineered for compliance,
              reliability, and life safety.
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-['Bebas_Neue'] tracking-wide text-lg mb-4">
              Services
            </h4>

            <ul className="space-y-2 text-sm font-['Inter']">
              <li><a href="#services" className="hover:text-[#ff5a1f]">Fire Audit</a></li>
              <li><a href="#services" className="hover:text-[#ff5a1f]">Fire Extinguishers</a></li>
              <li><a href="#services" className="hover:text-[#ff5a1f]">Hydrant Systems</a></li>
              <li><a href="#services" className="hover:text-[#ff5a1f]">Sprinkler Systems</a></li>
              <li><a href="#services" className="hover:text-[#ff5a1f]">Fire NOC</a></li>
              <li><a href="#services" className="hover:text-[#ff5a1f]">Training & Mock Drills</a></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-['Bebas_Neue'] tracking-wide text-lg mb-4">
              Company
            </h4>

            <ul className="space-y-2 text-sm font-['Inter']">
              <li><a href="#about" className="hover:text-[#ff5a1f]">About Us</a></li>
              <li><a href="#services" className="hover:text-[#ff5a1f]">Our Services</a></li>
              <li><a href="#contact" className="hover:text-[#ff5a1f]">Contact</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-['Bebas_Neue'] tracking-wide text-lg mb-4">
              Contact
            </h4>

            <ul className="space-y-3 text-sm font-['Inter']">

              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+919820305111" className="hover:text-[#ff5a1f]">
                  +91 9820305111
                </a>
              </li>

              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:info@firexpert.in" className="hover:text-[#ff5a1f]">
                  info@firexpert.in
                </a>
              </li>

              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>NaviMumbai, Maharashtra</span>
              </li>

            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className={`
          my-10 h-[1px]
          ${
            theme === "dark"
              ? "bg-white/10"
              : "bg-black/10"
          }
        `} />

        {/* BOTTOM */}
        <div className="text-center text-sm font-['Inter'] opacity-60">
          © {year} Fire Expert. All rights reserved.
        </div>

      </div>
    </footer>
  );
}