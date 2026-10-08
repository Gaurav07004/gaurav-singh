import cx from "../../utils/cx";
import "./Card.css";

/**
 * Shared surface (border, radius, gradient, shadow).
 *  hover: lift + stronger border on hover
 *  as:    rendered element ("article" by default)
 */
export default function Card({
  as: Component = "article",
  hover = false,
  className,
  children,
}) {
  return (
    <Component className={cx("card", hover && "card--hover", className)}>
      {children}
    </Component>
  );
}
