import { getMultipleItems, getStoryIds } from "@/utils/fetch-data"
import { FeedCategory } from "@/utils/types"

import ItemList from "@/components/stories/item-list"

export default async function StoriesByCategory({
  pathname,
  storyType,
  page = 1,
}: {
  page?: number | string
  storyType: FeedCategory
  pathname: string
}) {
  const current = typeof page === "string" ? parseInt(page, 10) : page
  const limit = 10

  const allIds = await getStoryIds(storyType)
  const totalPages = Math.ceil(allIds.length / limit)

  const offset = (current - 1) * limit
  const visibleIds = allIds.slice(offset, offset + limit)
  const stories = await getMultipleItems(visibleIds)

  return (
    <ItemList
      stories={stories}
      offset={offset}
      currentPage={current}
      totalPages={totalPages}
      pathname={pathname}
    />
  )
}
