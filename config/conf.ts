import { HnStoryType } from "@/lib/hn-types"

export const storyNavConfig = [
  {
    name: "Top",
    link: "/top",
    type: HnStoryType.topstories,
  },
  {
    name: "New",
    link: "/new",
    type: HnStoryType.newstories,
  },
  {
    name: "Best",
    link: "/best",
    type: HnStoryType.beststories,
  },
  {
    name: "Jobs",
    link: "/jobs",
    type: HnStoryType.jobstories,
  },
]

export const showStoryNav = (pathname: string) => {
  return !["/login", "/signup"].includes(pathname)
}