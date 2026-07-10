import { useEffect, useState } from "react";

export default function Preloader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHide(true), 3800);
    return () => clearTimeout(t);
  }, []);

  if (hide) return null;

  const name = "GAURAV";

  return (
    <div className="fixed inset-0 flex z-50">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="
            w-[10%] h-full bg-(--bg-darker)
          "
          style={{
            animation: `slideDown 0.7s ease-in-out forwards`,
            animationDelay: `${2.1 + i * 0.08}s`,
          }}
        />
      ))}

      <p
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          text-(--primary)
          font-[Anton]
          leading-none
          whitespace-nowrap

          text-[22vw]
          sm:text-[20vw]
          md:text-[16vw]
          lg:text-[200px]
          xl:text-[220px]
        "
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
            className="
              inline-block
            "
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
