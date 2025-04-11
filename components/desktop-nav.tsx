"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { storyNavConfig } from "@/config/conf"
import { cn } from "@/lib/utils"

interface DesktopNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DesktopNav({ className, ...props }: DesktopNavProps) {
  const pathname = usePathname()

  return (
    <div className={className} {...props}>
      <nav className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium sm:text-xs md:text-sm">
        {storyNavConfig.map((navItem, index) => {
          const isSelected =
            pathname === navItem.link ||
            (pathname === "/" && navItem.name === "top")

          return (
            <div key={navItem.name} className="flex items-center gap-2">
              <Link
                href={navItem.link || ""}
                prefetch={false}
                className={cn(
                  "whitespace-nowrap transition-colors",
                  isSelected ? "text-white" : "text-black"
                )}
              >
                {navItem.name}
              </Link>
              {index < storyNavConfig.length - 1 && (
                <span className="text-black">|</span>
              )}
            </div>
          )
        })}
      </nav>
    </div>
  )
}
