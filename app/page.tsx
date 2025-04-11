import { FeedCategory } from "@/utils/types"

import { FeedContent } from "./components/feed-content"

export default function Page({
  searchParams,
}: {
  searchParams: { page: number }
}) {
  return (
    <FeedContent
      pathname={""}
      storyType={FeedCategory.top}
      currentPage={searchParams.page || 1}
    />
  )
}
