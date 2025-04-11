import Link from "next/link"
import { transformFeedItem } from "@/utils/feed-utils"
import { FeedItem } from "@/utils/types"

import Story from "@/components/story"

export interface Props {
  stories: FeedItem[]
  offset?: number
  currentPage?: number
  totalPages?: number
  pathname?: string
  searchParams?: { [key: string]: string | undefined }
}
export default async function ItemList({
  stories,
  offset = 1,
  currentPage = 1,
  totalPages = 1,
  pathname = "",
  searchParams,
}: Props) {
  const createPageLink = (page: number) => {
    const params = new URLSearchParams()
    if (searchParams) {
      Object.entries(searchParams).forEach(([key, val]) => {
        if (key !== "page" && val !== undefined) {
          params.set(key, val)
        }
      })
    }

    params.set("page", page.toString())
    return `/${pathname}?${params.toString()}`
  }

  const getPagination = () => {
    const pages = []
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages - 1, totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          2,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        )
      } else {
        pages.push(
          1,
          2,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages - 1,
          totalPages
        )
      }
    }
    return pages
  }

  return (
    <div className="px-1">
      {stories.map((story, i) => (
        <div key={story.id} className="flex items-start gap-1">
          {offset != null && (
            <span className="w-5 text-right text-sm text-muted-foreground sm:text-sm md:text-base">
              {i + offset + 1}.
            </span>
          )}
          <Story key={story.id} data={transformFeedItem(story)} />
        </div>
      ))}

      <div className="flex flex-wrap items-center justify-center gap-2 pt-6 text-sm">
        {currentPage > 1 && (
          <Link
            href={createPageLink(currentPage - 1)}
            className="rounded-md border px-3 py-1 text-muted-foreground transition hover:bg-muted"
          >
            ‹ Prev
          </Link>
        )}

        {getPagination().map((page, index) =>
          typeof page === "number" ? (
            <Link
              key={index}
              href={createPageLink(page)}
              className={`rounded-md border px-3 py-1 transition-colors duration-200 ${
                page === currentPage
                  ? "bg-black font-semibold text-white"
                  : "text-muted-foreground hover:bg-muted"
              }`}
            >
              {page}
            </Link>
          ) : (
            <span
              key={index}
              className="select-none px-2 py-1 text-muted-foreground"
            >
              {page}
            </span>
          )
        )}

        {currentPage < totalPages && (
          <Link
            href={createPageLink(currentPage + 1)}
            className="rounded-md border px-3 py-1 text-muted-foreground transition hover:bg-muted"
          >
            Next ›
          </Link>
        )}
      </div>
    </div>
  )
}
