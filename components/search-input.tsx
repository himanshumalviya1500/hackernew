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
      // @ts-expect-error
      const val = event.target.value
      if (val) {
        const target = `/search?query=${val}`
        if (pathname === "/search") {
          replace(target)
        } else {
          push(target)
        }
      }
    }
  }
  return (
    <div className="relative mx-1 flex-1 md:flex-initial">
      <Input className="h-6 bg-white pl-8 text-sm shadow-none" />{" "}
    </div>
  )
}
