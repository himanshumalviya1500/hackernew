import { FeedCategory } from "@/utils/types"

import TypePage from "@/app/[type]/components/type-page"

export default function Page({
  searchParams,
}: {
  searchParams: { page: number }
}) {
  return (
    <TypePage
      pathname={""}
      storyType={FeedCategory.top}
      currentPage={searchParams.page || 1}
    />
  )
}
