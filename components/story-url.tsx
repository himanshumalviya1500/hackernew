import Link from "next/link"
import { extractHost } from "@/utils/feed-utils"
import { LinkIcon } from "lucide-react"

export default function StoryUrl({ url }: { url?: string }) {
  return (
    <div className="flex items-center justify-center truncate">
      <LinkIcon size={12} className="mr-0.5" />
      <Link
        rel="noreferrer nofollow"
        href={`/search?query=${extractHost(url)}&sort=byDate`}
      >
        {extractHost(url)}
      </Link>
    </div>
  )
}
