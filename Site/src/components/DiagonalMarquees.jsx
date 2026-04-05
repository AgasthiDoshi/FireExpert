import React from "react";

const DiagonalMarquees = ({
  textA = "FIRE SAFETY  •  FIRE AUDIT  •  FIRE NOC  •  COMPLIANCE  •  LIFE SAFETY  • ",
  textB = "SPRINKLER SYSTEMS  •  HYDRANT SYSTEMS  •  FIRE EXTINGUISHERS  •  TRAINING & MOCK DRILLS  • ",
  speedA = 20,
  speedB = 16
}) => {
  const repeatedA = textA.repeat(12);
  const repeatedB = textB.repeat(12);

  return (
    <div
      className="
        fixed left-0 w-screen overflow-hidden pointer-events-none z-[30]
        h-[100px]

        top-[88px]       /* mobile */
        md:top-[72px]    /* desktop */
      "
      aria-hidden="true"
    >
      {/* STRIP A */}
      <div
        className="
          absolute left-[-20%] w-[140%] flex items-center z-[31]

          -translate-y-[10px] rotate-[-4deg]   /* mobile */
          md:-translate-y-[42px] md:rotate-[-6deg]
        "
      >
        <div className="w-full overflow-hidden rounded-md bg-[#f6c21a]/90 md:bg-[#f6c21a] shadow-[0_4px_14px_rgba(0,0,0,0.15)]">
          <div
            className="inline-flex whitespace-nowrap items-center w-[200%] animate-[dm-scroll-left_linear_infinite]"
            style={{ animationDuration: `${speedA}s` }}
          >
            {[repeatedA, repeatedA].map((text, i) => (
              <span
                key={i}
                className="
                  inline-flex items-center gap-[10px]
                  px-[14px] py-[6px]
                  font-extrabold uppercase
                  tracking-[1px] text-[#111]

                  text-[clamp(11px,1.1vw,13px)]
                  md:text-[clamp(10px,2vw,12px)]
                  text-[10px]
                "
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* STRIP B */}
      <div
        className="
          absolute left-[-20%] w-[140%] flex items-center z-[29]

          translate-y-[20px] rotate-[4deg]   /* mobile */
          md:-translate-y-[4px] md:rotate-[6deg]
        "
      >
        <div className="w-full overflow-hidden rounded-md bg-[#f6c21a]/90 md:bg-[#f6c21a] shadow-[0_4px_14px_rgba(0,0,0,0.15)]">
          <div
            className="inline-flex whitespace-nowrap items-center w-[200%] animate-[dm-scroll-right_linear_infinite]"
            style={{ animationDuration: `${speedB}s` }}
          >
            {[repeatedB, repeatedB].map((text, i) => (
              <span
                key={i}
                className="
                  inline-flex items-center gap-[10px]
                  px-[14px] py-[6px]
                  font-extrabold uppercase
                  tracking-[1px] text-[#111]

                  text-[clamp(11px,1.1vw,13px)]
                  md:text-[clamp(10px,2vw,12px)]
                  text-[10px]
                "
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* KEYFRAMES */}
      <style>
        {`
          @keyframes dm-scroll-left {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }

          @keyframes dm-scroll-right {
            from { transform: translateX(-50%); }
            to   { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
};

export default DiagonalMarquees;