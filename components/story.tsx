"use client"

import Link from "next/link"
import { webStoryType } from "@/utils/types"

import StoryPoint from "./story-point"
import { cn } from "@/utils/utils"

type Props = {
  data: webStoryType
}

export default function Story({ data }: Props) {
  return (
    <div className="flex w-full items-start gap-2 px-1">
      <div className="w-4 cursor-pointer text-center text-xs text-[#828282] sm:text-sm md:text-base">
        &#9650;
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex flex-wrap items-baseline gap-x-1 text-xs leading-snug sm:text-sm md:text-base">
          <Link
            className={cn(
              "inline break-words text-black",
              data.dead && "text-muted-foreground"
            )}
            href={data.dead ? "" : data.url || `item?id=${data.id}`}
            rel="noopener noreferrer nofollow"
            target={data.url ? "_blank" : "_self"}
          >
            {(data.dead ? "[dead] " : "") + data.title}
          </Link>

          {data.sitestr && (
            <Link
              className="inline text-[10px] text-muted-foreground sm:text-xs md:text-sm"
              href={`/search?query=${data.sitestr}&sort=byDate`}
              rel="noopener noreferrer nofollow"
            >
              ({data.sitestr})
            </Link>
          )}
        </div>

        <div className="flex flex-wrap gap-x-2 text-[10px] text-muted-foreground sm:text-xs md:text-sm">
          <StoryPoint
            score={data.score}
            by={data.by}
            time={data.age}
            count={data.comments}
          />
        </div>
      </div>
    </div>
  )
}
