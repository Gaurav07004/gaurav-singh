import cx from "../../utils/cx";
import "./TagList.css";

/**
 * Row of technology / skill pills.
 *  size:   "sm" | "md" | "lg"
 *  accent: red outline style (used for "Currently Strengthening")
 */
export default function TagList({ items, size = "md", accent, className }) {
  return (
    <div
      className={cx(
        "tag-list",
        `tag-list--${size}`,
        accent && "tag-list--accent",
        className,
      )}
    >
      {items.map((item) => (
        <span key={item} className="tag">
          {item}
        </span>
      ))}
    </div>
  );
}
