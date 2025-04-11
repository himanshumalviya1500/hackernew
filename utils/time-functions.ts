import dayjs from "dayjs"
import isToday from "dayjs/plugin/isToday"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)
dayjs.extend(isToday)

export function formatReadableDate(timestamp?: number) {
  if (!timestamp) {
    return ""
  }
  return dayjs(timestamp * 1000).format("MMMM DD, YYYY")
}

export function getRelativeTime(timestamp: number) {
  return dayjs(timestamp * 1000).toNow(true)
}

const fourteenDaysInMs = 14 * 24 * 60 * 60 * 1000

export function isWithinNextTwoWeeks(timestamp: number) {
  const current = Date.now()
  return current - timestamp * 1000 <= fourteenDaysInMs
}
