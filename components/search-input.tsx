"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { SearchIcon } from "lucide-react"

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
      <SearchIcon
        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
        size={14}
      />
      <Input
        defaultValue={searchParams.get("query") || ""}
        onKeyUp={handleKeyUp}
        className="h-6 w-48 bg-white pl-8 text-sm shadow-none"
        placeholder="Search..."
      />
    </div>
  )
}
