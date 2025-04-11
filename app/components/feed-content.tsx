import { Suspense } from "react"
import { FeedCategory } from "@/utils/types"

import { ItemSkeleton } from "@/components/ui/item-skeleton"

import StoriesByCategory from "./stories-by-category"

export const FeedContent = ({
  pathname,
  storyType,
  currentPage,
}: {
  pathname: string
  storyType: FeedCategory
  currentPage: number
}) => {
  return (
    <Suspense
      key={`${storyType}-${currentPage}`}
      fallback={<ItemSkeleton length={6} />}
    >
      <StoriesByCategory
        pathname={pathname}
        page={currentPage}
        storyType={storyType}
      />
    </Suspense>
  )
}
