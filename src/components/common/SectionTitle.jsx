import { IoFlowerOutline } from "react-icons/io5";
import cx from "../../utils/cx";
import "./SectionTitle.css";

/**
 * Kicker + heading (+ optional paragraph) used by every section.
 * Content comes from data/sections.js, so a heading is edited in one place.
 */
export default function SectionTitle({ label, title, description, wide }) {
  return (
    <header className={cx("section-title", wide && "section-title--wide")}>
      <div className="section-title__kicker">
        <IoFlowerOutline className="text-xl text-(--primary) slow-spin" />
        <span>{label}</span>
      </div>

      <div className="section-title__body">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </header>
  );
}
