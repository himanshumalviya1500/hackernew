import { ReadonlyURLSearchParams } from "next/navigation"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function getSecret() {
  const aesSecret = process.env["AES_SECRET"]
  if (!aesSecret) {
    throw new Error(
      `The following environment variables are missing. Read more: https://vercel.com/docs/integrations/shopify#configure-environment-variables\n\n\'AES_SECRET\'\n`
    )
  }
  return aesSecret
}

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) => {
  const paramsString = params.toString()
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`
  return `${pathname}${queryString}`
}
