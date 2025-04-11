import { getSearchApiUrl } from "@/config/endpoints"

export const fetchSearchResults = async ({
  query,
  page,
  pageSize,
  tags,
  sort,
}: {
  query: string
  page: number
  pageSize: number
  tags?: string
  sort?: string
}) => {
  const queryParams = new URLSearchParams()
  queryParams.append("query", query)
  queryParams.append("page", (page ? page - 1 : 0).toString())
  queryParams.append("hitsPerPage", pageSize.toString())
  if (tags) {
    queryParams.append("tags", tags)
  }

  const url = getSearchApiUrl(
    `/${sort === "byDate" ? "search_by_date" : "search"}?${queryParams.toString()}`
  )

  const resp = await fetch(url, {
    next: {
      revalidate: 1800,
    },
  })

  const json = await resp.json()

  return json
}
