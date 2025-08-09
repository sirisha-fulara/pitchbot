import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"; // ✅ Yes

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
