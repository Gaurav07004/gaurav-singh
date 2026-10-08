// Tiny className joiner: cx("a", cond && "b", undefined) -> "a b"
export default function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}
