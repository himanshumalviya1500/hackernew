import { ReadonlyURLSearchParams } from "next/navigation"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...values: ClassValue[]) {
  return twMerge(clsx(values))
}

export const generateUrl = (
  path: string,
  searchParams: URLSearchParams | ReadonlyURLSearchParams
) => {
  const query = searchParams.toString()
  return `${path}${query ? `?${query}` : ""}`
}
