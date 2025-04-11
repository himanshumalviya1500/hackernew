import { getHnApiUrl } from "@/config/urls"

import { FeedCategory, FeedItem } from "./types"

async function loadData(endpoint: string) {
  const response = await fetch(getHnApiUrl(`${endpoint}.json`), {
    next: {
      revalidate: 120,
    },
  })

  if (response.status !== 200) {
    throw new Error(`Status ${response.status}`)
  }

  return response.json()
}

export async function getStoryIds(category: FeedCategory) {
  const ids = await loadData(category)
  return ids ? (ids as number[]) : []
}

export async function getItemById(id: number) {
  const itemData = await loadData(`item/${id}`)
  return normalizeItem(itemData)
}

export function normalizeItem(item: FeedItem) {
  if (item) {
    item.url = item.url || ""
    item.kids = item.kids || []
    item.descendants = item.descendants || 0
    return item
  }
  return null
}

export async function getMultipleItems(ids: number[]) {
  const results = await Promise.all(ids.map((id) => getItemById(id)))
  return results.filter(Boolean) as FeedItem[]
}

export function getComments(ids: number[]) {
  return Promise.all(
    ids.map(async (id) => {
      const data = await loadData(`item/${id}`)
      data.comments =
        data.kids && data.kids.length > 0 ? await getComments(data.kids) : []
      return normalizeItem(data)
    })
  )
}
