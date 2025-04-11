import { fetchStories, fetchStoryIds } from "@/lib/hn-api-fetcher"
import { HnStoryType } from "@/lib/hn-types"
import ItemList from "@/components/item-list"

export default async function TypeStories({
  pathname,
  storyType,
  page = 1,
}: {
  page?: number | string
  storyType: HnStoryType
  pathname: string
}) {
  const currentPage = typeof page === "string" ? parseInt(page, 10) : page
  const pageSize = 10 

  const storyIds = await fetchStoryIds(storyType)
  const totalPages = Math.ceil(storyIds.length / pageSize)

  const offset = (currentPage - 1) * pageSize
  const showStoryIds = storyIds.slice(offset, offset + pageSize)
  const stories = await fetchStories(showStoryIds)

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
