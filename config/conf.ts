import { FeedCategory } from "@/utils/types"

export const storyNavConfig = [
  {
    name: "top",
    link: "/top",
    type: FeedCategory.top,
  },
  {
    name: "best",
    link: "/best",
    type: FeedCategory.best,
  },
  {
    name: "new",
    link: "/new",
    type: FeedCategory.latest,
  },
  {
    name: "jobs",
    link: "/jobs",
    type: FeedCategory.jobs,
  },
]
