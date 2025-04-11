"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useGoto } from "@/hooks"
import { Menu, Plus, X } from "lucide-react"

import { showStoryNav } from "@/config/conf"
import { logoutAction } from "@/lib/actions"
import { HnUser } from "@/lib/hn-types"
import { Button } from "@/components/ui/button"
import { DesktopNav } from "@/components/desktop-nav"
import MobileNav from "@/components/mobile-nav"
import SearchInput from "@/components/search-input"

export function Header({ user }: { user: HnUser | null }) {
  const pathname = usePathname()
  const goto = useGoto()
  const storyNavVisiable = showStoryNav(pathname)
  const [mobileNavActive, setMobileNavActive] = useState(false)

  return (
    <header className="top-0 z-50 flex flex w-full items-center bg-[#ff6600] px-2">
      <div className="flex flex-1 items-center space-x-1">
        <Link href="/" className="flex items-center">
          <div className="mr-1 flex h-5 w-5 items-center justify-center">
            <span className="text-sm font-bold text-white">Y</span>
          </div>
          <span className="font-bold text-black">Hacker News</span>
        </Link>
        {storyNavVisiable && (
          <DesktopNav className="hidden md:flex md:flex-1 md:justify-center" />
        )}
        <div
          className="mr-1 block md:hidden"
          onClick={() => setMobileNavActive(!mobileNavActive)}
        >
          {mobileNavActive ? <X /> : <Menu />}
        </div>
        <div className="flex flex-1 items-center justify-end">
          <span className="font-bold text-black">Search</span>
          <SearchInput />
          {storyNavVisiable && (
            <Button variant={"ghost"} className="hidden size-8">
              <Link rel="noreferrer nofollow" href={"/submit"}>
                <Plus size={22}></Plus>
              </Link>
            </Button>
          )}
          {user && (
            <p className="text-sm font-medium leading-none">{user.id}</p>
          )}
          {user && (
            <form action={logoutAction}>
              <input name="goto" hidden defaultValue={usePathname()} />
              <button type="submit" className="hover:cursor-default">
                logout
              </button>
            </form>
          )}
          {/* {user && <UserNav user={user} />} */}
          {storyNavVisiable && !user && (
            <Button size={"sm"} variant={"outline"} className="ml-1">
              <Link
                rel="noreferrer nofollow"
                href={`/login?goto=${goto}`}
                className="text-sm"
              >
                Login
              </Link>
            </Button>
          )}
        </div>
      </div>
      <MobileNav active={mobileNavActive} onActiveChange={setMobileNavActive} />
    </header>
  )
}
