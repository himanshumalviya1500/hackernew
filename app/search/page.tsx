import { Suspense } from "react"
import { notFound } from "next/navigation"
import { fetchSearchResults } from "@/utils/fetch-search-results"
import { FeedItemType } from "@/utils/types"

import ItemList from "@/components/item-list"
import Loading from "@/components/loading"

type Props = {
  searchParams: { query?: string; sort?: string; page?: string }
}

export default async function Page({ searchParams }: Props) {
  const query = searchParams.query
  if (!query) notFound()

  const page = parseInt(searchParams.page || "1")
  const pageSize = 10

  return (
    <Suspense key={`${query}_${page}_${pageSize}`} fallback={<Loading />}>
      <SearchResult
        query={query}
        sort={searchParams.sort}
        page={page}
        pageSize={pageSize}
        searchParams={searchParams}
      />
    </Suspense>
  )
}

async function SearchResult({
  query,
  sort,
  page,
  pageSize,
  searchParams,
}: {
  query: string
  sort?: string
  page: number
  pageSize: number
  searchParams: { [key: string]: string | undefined }
}) {
  const result = await fetchSearchResults({
    query,
    page,
    pageSize,
    tags: "story",
    sort,
  })

  const totalHits = result?.nbHits || 0
  const totalPages = Math.ceil(totalHits / pageSize)

  const searchItemList = result.hits.map((item: any) => ({
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
      stories={searchItemList}
      offset={(page - 1) * pageSize}
      currentPage={page}
      totalPages={totalPages}
      pathname="search"
      searchParams={searchParams}
    />
  )
}
