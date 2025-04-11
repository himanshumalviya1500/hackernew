import { notFound } from "next/navigation"

import { navigationConfig } from "@/config/navigation"

import { FeedContent } from "../components/feed-content"

type Props = {
  params: any
  searchParams: any
}

export default async function Page({ searchParams, params }: Props) {
  const currentPage = Number(searchParams?.page) || 1
  const pathname = params.type || "top"
  const navItem = navigationConfig.filter(
    (navItem) => navItem.name.toLowerCase() === pathname
  )
  const storyType = navItem && navItem.length === 1 ? navItem[0].type : null
  if (!storyType) {
    notFound()
  }
  return (
    <FeedContent
      pathname={pathname}
      storyType={storyType}
      currentPage={currentPage}
    />
  )
}
