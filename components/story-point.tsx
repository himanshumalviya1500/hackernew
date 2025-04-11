import { ago, commentCount, points } from "@/lib/hn-item-utils"

export default function StoryPoint({
  score,
  by,
  time,
  count,
}: {
  score?: number | string
  by?: string
  time?: number | string
  count?: number | string
}) {
  if (!score) {
    return null
  }
  return (
    <div className="flex items-center justify-center gap-1 truncate">
      <span>{typeof score === "string" ? score : points(score)} </span>
      <div className="flex items-center justify-center truncate">by {by}</div>
      <span>{typeof time === "string" ? time : ago(time)}</span>
      <span className="">|</span>
      {typeof count === "string"
        ? count
        : count == 0
          ? "discuss"
          : commentCount(count)}
    </div>
  )
}
