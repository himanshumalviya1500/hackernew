import Link from "next/link"

import { SearchInput } from "../stories/search-input"
import { Suspense } from "react"

export const Footer = () => {
  return (
    <footer className="mt-4 text-muted-foreground">
      <div className="border-t border-[#ff6600]"></div>
      <div className="bg-[#f6f6ef] py-4 text-center text-sm">
        <div className="mb-2 text-[14px]">
          Join us for{" "}
          <Link href="https://www.ycombinator.com/ai" className="font-bold">
            AI Startup School
          </Link>{" "}
          this June 16-17 in San Francisco!
        </div>
        <div className="mb-3 text-[12px]">
          <Link
            href="https://news.ycombinator.com/newsguidelines.html"
            className="hover:underline"
          >
            Guidelines
          </Link>
          {" | "}
          <Link
            href="https://news.ycombinator.com/newsfaq.html"
            className="hover:underline"
          >
            FAQ
          </Link>
          {" | "}
          <Link
            href="https://news.ycombinator.com/lists"
            className="hover:underline"
          >
            Lists
          </Link>
          {" | "}
          <Link
            href="https://github.com/HackerNews/API"
            className="hover:underline"
          >
            API
          </Link>
          {" | "}
          <Link
            href="https://news.ycombinator.com/security.html"
            className="hover:underline"
          >
            Security
          </Link>
          {" | "}
          <Link
            href="https://www.ycombinator.com/legal/"
            className="hover:underline"
          >
            Legal
          </Link>
          {" | "}
          <Link
            href="https://www.ycombinator.com/apply/"
            className="hover:underline"
          >
            Apply to YC
          </Link>
          {" | "}
          <Link
            href="mailto:hn@ycombinator.com"
            className="text-black hover:underline"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center">
            <label htmlFor="search" className="text-sm font-medium">
              Search:
            </label>
            <Suspense fallback={<div>Loading search...</div>}>
              <SearchInput />
            </Suspense>
          </div>
        </div>
      </div>
    </footer>
  )
}
