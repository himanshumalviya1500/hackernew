import { UserRound } from "lucide-react"

export default function StoryBy({ by }: { by?: string }) {
  return (
    <div className="flex items-center justify-center truncate">
      <UserRound size={12} className="mr-0.5" />
      {by}
    </div>
  )
}
