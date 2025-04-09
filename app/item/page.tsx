import { Suspense } from "react"

import Loading from "@/components/loading"

import ItemWithComment from "./components/item-with-comment"

type Props = {
  searchParams: { id: number }
}

export default async function Page({ searchParams }: Props) {
  return (
    <Suspense key={searchParams.id} fallback={<Loading />}>
      <ItemWithComment id={searchParams.id} />
    </Suspense>
  )
}
