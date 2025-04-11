import { FeedCategory } from "@/utils/types"

import { FeedContent } from "./components/feed-content"

export default function Page({ searchParams }: { searchParams: any }) {
  return (
    <FeedContent
      pathname={""}
      storyType={FeedCategory.top}
      currentPage={searchParams.page || 1}
    />
  )
}
