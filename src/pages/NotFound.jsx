import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <section
      className="
        font-[Quicksand]
        min-h-screen
        max-w-300 mx-auto
        px-6 py-24
        sm:px-8 sm:py-28
        md:px-10 md:py-32
        lg:px-12
        xl:px-20

        flex flex-col items-center justify-center text-center
      "
    >
      <h1
        className="
          text-[80px]
          font-extrabold
          leading-none
          text-(--primary)

          sm:text-[110px]
          md:text-[130px]
        "
      >
        404
      </h1>

      <p
        className="
          mt-2
          text-[18px]
          text-(--secondary-light)

          sm:text-[19px]
          md:text-[20px]
        "
      >
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <NavLink
        to="/"
        className="
            mt-6
            inline-block
            px-5 py-3
            rounded
            text-[0.8rem] uppercase tracking-wide
            border border-(--primary)
            text-(--primary)
            transition-all duration-500
            hover:font-bold
            hover:bg-(--primary-light)
            hover:text-black
            hover:border-(--primary-light)
        "
      >
        Go Back Home
      </NavLink>
    </section>
  );
}
