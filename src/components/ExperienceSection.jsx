import { IoFlowerOutline } from "react-icons/io5";
import { experience } from "../data/Content/Content";

export default function WorkExperience() {
  return (
    <section
      id="Work-Experience"
      className="
        font-[Quicksand]
        max-w-337.5 mx-auto
        
        px-6 pt-20 pb-10
        sm:px-8 sm:pt-20
        md:px-10 md:pt-25
        lg:px-12 lg:pt-25
        xl:px-6 xl:pt-25
      "
    >
      <h2 className="flex items-center gap-4">
        <IoFlowerOutline className="text-2xl font-bold text-(--primary) uppercase slow-spin" />
        <span className="text-2xl font-bold text-(--primary) uppercase">
          Work Experience
        </span>
      </h2>

      <div
        className="
          mt-6
          space-y-8

          md:space-y-10
          xl:space-y-12
        "
      >
        {experience.map((job) => (
          <div
            key={job.role}
            className="
              p-6
              rounded-lg
              bg-(--chip)
              border border-(--border)
              transition

              sm:p-7
              md:p-8
            "
          >
            <div
              className="
                flex flex-col gap-2
                sm:flex-col sm:justify-between sm:items-start
              "
            >
              <div>
                <h3 className="xl:text-[1.25rem] sm:text-[1.2rem] text-base font-semibold text-white uppercase">
                  {job.role}
                </h3>
                <h3 className="xl:text-[1rem] sm:text-[15px] text-[0.9rem] font-semibold text-white">
                  {job.company}
                </h3>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-[0.8rem] sm:text-[15px] text-(--secondary-light)">
                  {job.locationType} | {job?.location}
                </p>
                <p className="text-[0.8rem] sm:text-[15px] text-(--secondary-light)">
                  {job.duration}
                </p>
              </div>
            </div>

            <p
              className="
                mt-1
                text-[14px]
                text-(--secondary-light)
                leading-relaxed
                text-justify

                sm:text-[15px]
                md:text-[16px]
              "
            >
              {job.summary}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {job.tech.map((item) => (
                <span
                  key={item}
                  className="
                    flex items-center gap-2
                    px-3 py-2
                    rounded-md
                    bg-[#1d1f23]
                    border border-[#2a2d31]
                    hover:border-(--primary)
                    hover:bg-[#22262b]
                    transition
                    text-(--secondary)
                    text-xs
                    sm:text-[13px]
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
