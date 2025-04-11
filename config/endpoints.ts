export const HN_WEB_URL =
  process.env.NEXT_PUBLIC_HN_WEB_URL || "https://news.ycombinator.com"
export const HN_API_URL =
  process.env.NEXT_PUBLIC_HN_API_URL || "https://hacker-news.firebaseio.com/v0"
export const ALGOLIA_URL =
  process.env.NEXT_PUBLIC_HN_SEARCH_API_URL || "https://hn.algolia.com/api/v1"

const trimEnd = (str: string, suffix: string) => {
  if (!str) {
    return str
  }
  if (str.endsWith(suffix)) {
    return str.slice(0, -suffix.length)
  }
  return str
}

const ensurePrefix = (str: string, prefix: string) => {
  if (!str) {
    return str
  }
  if (str.startsWith(prefix)) {
    return str
  }
  return prefix + str
}

const buildUrl = (baseUrl: string, path: string) => {
  return `${trimEnd(baseUrl, "/")}${ensurePrefix(path, "/")}`
}

export const getWebUrl = (path: string) => {
  return buildUrl(HN_WEB_URL, path)
}

export const getApiUrl = (path: string) => {
  return buildUrl(HN_API_URL, path)
}

export const getSearchApiUrl = (path: string) => {
  return buildUrl(ALGOLIA_URL, path)
}
