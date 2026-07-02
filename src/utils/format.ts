export function formatCompactNumber(value: number) {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

export function getInitials(value: string) {
  return value
    .split(" ")
    .filter(Boolean)
    .map((segment) => segment[0]?.toUpperCase())
    .join("")
    .slice(0, 2);
}
