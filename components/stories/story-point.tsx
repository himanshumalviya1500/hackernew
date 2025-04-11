import { formatComments, formatPoints, formatTimeAgo } from "@/utils/feed-utils"

export const StoryPoint = ({
  score,
  by,
  time,
  count,
}: {
  score?: number | string
  by?: string
  time?: number | string
  count?: number | string
}) => {
  if (!score) {
    return null
  }
  return (
    <div className="flex items-center justify-center gap-1 truncate">
      <span>{typeof score === "string" ? score : formatPoints(score)} </span>
      <div className="flex items-center justify-center truncate">by {by}</div>
      <span>{typeof time === "string" ? time : formatTimeAgo(time)}</span>
      <span className="">|</span>
      {typeof count === "string"
        ? count
        : count == 0
          ? "discuss"
          : formatComments(count)}
    </div>
  )
}
