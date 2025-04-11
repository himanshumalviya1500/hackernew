"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { Input } from "@/components/ui/input"

export default function SearchInput() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace, push } = useRouter()

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const val = (event.target as HTMLInputElement).value.trim()
      if (val) {
        const target = `/search?query=${encodeURIComponent(val)}`
        if (pathname === "/search") {
          replace(target)
        } else {
          push(target)
        }
      }
    }
  }

  return (
    <div className="relative w-48 flex-1 px-2 py-1">
      <Input
        defaultValue={searchParams.get("query") || ""}
        onKeyUp={handleKeyUp}
        className="h-6 w-48 bg-white text-sm shadow-none focus:border-none focus:outline-none focus:ring-0"
      />
    </div>
  )
}
