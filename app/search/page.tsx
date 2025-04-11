import { Suspense } from "react"
import { notFound } from "next/navigation"
import { fetchSearchResults } from "@/utils/fetch-search-results"
import { FeedItemType } from "@/utils/types"

import Loading from "@/components/ui/loading"
import ItemList from "@/components/stories/item-list"

type Props = {
  searchParams: { query?: string; sort?: string; page?: string }
}

export default async function SearchPage({ searchParams }: Props) {
  const { query, sort, page: rawPage } = searchParams
  if (!query) notFound()

  const page = parseInt(rawPage || "1")
  const limit = 10

  return (
    <Suspense key={`${query}_${page}_${limit}`} fallback={<Loading />}>
      <SearchContent
        query={query}
        sort={sort}
        page={page}
        limit={limit}
        searchParams={searchParams}
      />
    </Suspense>
  )
}

async function SearchContent({
  query,
  sort,
  page,
  limit,
  searchParams,
}: {
  query: string
  sort?: string
  page: number
  limit: number
  searchParams: { [key: string]: string | undefined }
}) {
  const data = await fetchSearchResults({
    query,
    page,
    pageSize: limit,
    tags: "story",
    sort,
  })

  const total = data?.nbHits || 0
  const pages = Math.ceil(total / limit)

  const stories = data.hits.map((item: any) => ({
    id: item.story_id || item.objectID,
    deleted: false,
    type: FeedItemType.story,
    by: item.author,
    time: item.created_at_i,
    text: item.story_text,
    dead: false,
    parent: item.parent_id,
    url: item.url,
    score: item.formatPoints,
    title: item.title,
    descendants: item.num_comments,
  }))

  return (
    <ItemList
      stories={stories}
      offset={(page - 1) * limit}
      currentPage={page}
      totalPages={pages}
      pathname="search"
      searchParams={searchParams}
    />
  )
}
