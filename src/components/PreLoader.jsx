import { useEffect, useState } from "react";

export default function Preloader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setHide(true);
    }, 3800);
    return () => clearTimeout(t);
  }, []);

  if (hide) return null;

  const name = "GAURAV";

  return (
    <div className="fixed inset-0 flex z-99">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="w-[10%] h-full bg-black"
          style={{
            animation: `slideDown 0.7s ease-in-out forwards`,
            animationDelay: `${2.1 + i * 0.08}s`,
          }}
        />
      ))}

      <p
        className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex overflow-hidden leading-none text-white font-[Anton] text-[18vw] lg:text-[200px] tracking-tight"
        style={{
          animation: `
            textHold 1.5s linear 0.6s forwards,
            textFadeOut 0.7s ease-in-out 2.1s forwards
          `,
        }}
      >
        {name.split("").map((ch, i) => (
          <span
            key={i}
            style={{
              transform: "translateY(100%)",
              opacity: 0,
              animation: `textReveal 0.6s ease-out forwards`,
              animationDelay: `${i * 0.12}s`,
            }}
          >
            {ch}
          </span>
        ))}
      </p>
    </div>
  );
}
