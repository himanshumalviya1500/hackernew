export enum HnItemType {
  job = "job",
  story = "story",
}

export enum HnStoryType {
  topstories = "topstories",
  newstories = "newstories",
  beststories = "beststories",
  jobstories = "jobstories",
}

export interface HnItem {
  id: number
  deleted?: boolean
  type?: HnItemType
  by?: string
  time: number
  text?: string
  dead?: boolean
  parent?: number
  poll?: number
  kids?: number[]
  url?: string
  score: number
  title?: string
  parts?: number[]
  descendants: number
}

export interface HnComment extends HnItem {
  comments: HnComment[]
}

export interface HnSearchItem {
  author: string
  comment_text: string
  created_at: string
  created_at_i: number
  objectID: string
  parent_id: string
  points?: number
  story_id: number
  story_title: string
  story_url?: string
  updated_at: string
}
