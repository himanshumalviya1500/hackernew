"use client"

import Link from "next/link"

import { Navigation } from "@/components/common/navigation"

export const Header = () => {
  return (
    <header className="top-0 z-50 mt-2 w-full bg-[#FF6600] px-3 py-1">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex min-w-0 flex-1 flex-wrap items-center gap-3">
          <Link href="/" className="flex shrink-0 items-center">
            <div className="-ml-1 mr-2 flex h-6 w-6 items-center justify-center border border-white">
              <span className="text-sm font-bold text-white">Y</span>
            </div>
            <span className="text-base font-bold text-black">Hacker News</span>
          </Link>

          <Navigation className="flex flex-wrap gap-x-2 text-xs sm:text-sm md:text-base" />
        </div>
        <div className="flex items-center justify-end">
          <span className="text-black">login</span>
        </div>
      </div>
    </header>
  )
}
