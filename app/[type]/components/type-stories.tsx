import { getMultipleItems, getStoryIds } from "@/utils/fetch-data"
import { FeedCategory } from "@/utils/types"

import ItemList from "@/components/item-list"

export default async function TypeStories({
  pathname,
  storyType,
  page = 1,
}: {
  page?: number | string
  storyType: FeedCategory
  pathname: string
}) {
  const currentPage = typeof page === "string" ? parseInt(page, 10) : page
  const pageSize = 10

  const storyIds = await getStoryIds(storyType)
  const totalPages = Math.ceil(storyIds.length / pageSize)

  const offset = (currentPage - 1) * pageSize
  const showStoryIds = storyIds.slice(offset, offset + pageSize)
  const stories = await getMultipleItems(showStoryIds)

  return (
    <ItemList
      stories={stories}
      offset={offset}
      currentPage={currentPage}
      totalPages={totalPages}
      pathname={pathname}
    />
  )
}
