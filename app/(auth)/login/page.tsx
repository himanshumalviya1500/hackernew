import { Metadata } from "next"

import AuthPage from "../components/auth-page"

export default function Page({
  searchParams,
}: {
  searchParams: { goto?: string }
}) {
  return <AuthPage page={"login"} searchParams={searchParams} />
}
