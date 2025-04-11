"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { HnWebStory } from "@/lib/hn-web-types"
import { cn } from "@/lib/utils"
import StoryCommentCount from "@/components/story-comment-count"
import StoryPoint from "@/components/story-point"

type Props = {
  data: HnWebStory
}

export default function Story({ data }: Props) {
  const pathname = usePathname()
  return (
    <div className="flex flex-row border-b py-2 md:w-full">
      <div>
        <div className="pl-1">
          <Link
            className={cn(data.dead ? "text-muted-foreground" : "")}
            href={data.dead ? "" : data.url || `item?id=${data.id}`}
            rel="noopener noreferrer nofollow"
            target={data.url ? "_blank" : "_self"}
          >
            {(data.dead ? "[dead] " : "") + data.title}{" "}
          </Link>
          {data.sitestr && (
            <Link
              className="text-sm text-muted-foreground"
              href={`/search?query=${data.sitestr}&sort=byDate`}
              rel="noopener noreferrer nofollow"
            >
              ({data.sitestr})
            </Link>
          )}
        </div>

        <div
          className={
            "flex flex-wrap gap-x-3 pl-1 text-sm text-muted-foreground md:space-x-4"
          }
        >
          {
            <StoryPoint
              score={data.score}
              by={data.by}
              time={data.age}
              count={data.comments}
            />
          }
        </div>
      </div>
    </div>
  )
}
