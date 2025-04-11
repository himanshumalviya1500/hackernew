import { HnItem } from "./hn-types"
import { HnWebStory } from "./hn-web-types"
import { timeAgo } from "./time-utils"

export const site = (url?: string) => {
  if (!url) {
    return url
  }
  let { host, pathname } = url ? new URL(url) : { host: "#", pathname: "" }
  if (host === "github.com" && pathname.includes("/")) {
    host += pathname.substring(0, pathname.indexOf("/", 1))
  }
  return host.replace(/^www\./, "")
}

export const points = (score?: number) => {
  if (!score) {
    return score
  }
  return `${score} ${plural(score, "point")}`
}

export const ago = (time?: number) => {
  if (!time) {
    return time
  }
  return `${timeAgo(time)} ago`
}

export const commentCount = (descendants?: number) => {
  if (!descendants) {
    return "discuss"
  }
  return `${descendants} ${plural(descendants, " comment")}`
}

const plural = (n: number, s: string) => {
  return s + (n === 0 || n > 1 ? "s" : "")
}

export const hnItem2HnWebStory = (hnItem: HnItem) => {
  return {
    id: hnItem.id,
    title: hnItem.title,
    url: hnItem.url,
    sitestr: site(hnItem.url),
    score: points(hnItem.score),
    by: hnItem.by,
    age: `${timeAgo(hnItem.time)} ago`,
    comments: commentCount(hnItem.descendants),
    dead: hnItem.dead,
  } as HnWebStory
}
