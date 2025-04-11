import { notFound } from "next/navigation"

import { navigationConfig } from "@/config/navigation"
import TypePage from "@/app/[type]/components/type-page"

type Props = {
  params: { type: string }
  searchParams: { [key: string]: string | string[] | undefined }
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
    <TypePage
      pathname={pathname}
      storyType={storyType}
      currentPage={currentPage}
    />
  )
}
