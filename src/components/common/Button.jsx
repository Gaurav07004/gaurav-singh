import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";
import cx from "../../utils/cx";
import { isExternalLink } from "../../utils/links";
import "./Button.css";

/**
 * One button for the whole site.
 *  variant: "primary" | "secondary"
 *  size:    "sm" | "md" | "lg"
 *  arrow:   show the ↗ icon
 *  newTab:  open in a new tab
 */
export default function Button({
  href,
  variant = "primary",
  size = "md",
  arrow = false,
  newTab = false,
  className,
  children,
}) {
  const classes = cx(
    "btn",
    `btn--${size}`,
    variant === "secondary" && "btn--secondary",
    className,
  );

  const content = (
    <>
      {children}
      {arrow && <HiArrowUpRight />}
    </>
  );

  if (isExternalLink(href)) {
    return (
      <a
        href={href}
        className={classes}
        {...(newTab && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {content}
      </a>
    );
  }

  return (
    <Link to={href} className={classes}>
      {content}
    </Link>
  );
}

// Wrapper that lays out several buttons in a row (column on mobile).
export function ButtonGroup({ className, children }) {
  return <div className={cx("btn-group", className)}>{children}</div>;
}
