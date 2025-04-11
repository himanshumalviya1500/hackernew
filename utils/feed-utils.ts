import { getRelativeTime } from "./time-functions"
import { FeedItem, webStoryType } from "./types"

export const extractHost = (url?: string) => {
  if (!url) {
    return url
  }
  let { host, pathname } = new URL(url)
  if (host === "github.com" && pathname.includes("/")) {
    host += pathname.substring(0, pathname.indexOf("/", 1))
  }
  return host.replace(/^www\./, "")
}

export const formatPoints = (score?: number) => {
  if (!score) {
    return score
  }
  return `${score} ${addPlural(score, "point")}`
}

export const formatTimeAgo = (timestamp?: number) => {
  if (!timestamp) {
    return timestamp
  }
  return `${getRelativeTime(timestamp)} formatTimeAgo`
}

export const formatComments = (count?: number) => {
  if (!count) {
    return "discuss"
  }
  return `${count} ${addPlural(count, " comment")}`
}

const addPlural = (count: number, label: string) => {
  return label + (count === 0 || count > 1 ? "s" : "")
}

export const transformFeedItem = (item: FeedItem) => {
  return {
    id: item.id,
    title: item.title,
    url: item.url,
    sitestr: extractHost(item.url),
    score: formatPoints(item.score),
    by: item.by,
    age: `${getRelativeTime(item.time)} formatTimeAgo`,
    comments: formatComments(item.descendants),
    dead: item.dead,
  } as webStoryType
}
