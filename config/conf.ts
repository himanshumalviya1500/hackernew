import { HnStoryType } from "@/lib/hn-types"

export const storyNavConfig = [
  {
    name: "top",
    link: "/top",
    type: HnStoryType.topstories,
  },
  {
    name: "best",
    link: "/best",
    type: HnStoryType.beststories,
  },
  {
    name: "new",
    link: "/new",
    type: HnStoryType.newstories,
  },
  {
    name: "jobs",
    link: "/jobs",
    type: HnStoryType.jobstories,
  },
]

export const showStoryNav = (pathname: string) => {
  return !["/login", "/signup"].includes(pathname)
}
