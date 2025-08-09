import { cn } from "../lib/utils";

export function AnimatedGradientText({
  children,
  className,
  speed = 1,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  ...props
}) {
  const animationDuration = `${8 / speed}s`;
  
  return (
    <span
      style={{
        "--bg-size": `${speed * 300}%`,
        "--color-from": colorFrom,
        "--color-to": colorTo,
        "--animation-duration": animationDuration,
        animation: `gradient ${animationDuration} linear infinite`,
      }}
      className={cn(
        `inline bg-gradient-to-r from-[var(--color-from)] via-[var(--color-to)] to-[var(--color-from)] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-5xl`,
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}