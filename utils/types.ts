export interface webStoryType {
  id: number
  rank?: string
  title: string
  url: string
  sitestr: string
  score: string
  by: string
  age: string
  time: number
  comments: string
  dead: boolean
}

export enum FeedItemType {
  job = "job",
  story = "story",
}

export enum FeedCategory {
  top = "topstories",
  latest = "newstories",
  best = "beststories",
  jobs = "jobstories",
}

export interface FeedItem {
  id: number
  type?: FeedItemType
  by?: string
  time: number
  text?: string
  dead?: boolean
  parent?: number
  kids?: number[]
  url?: string
  score: number
  title?: string
  parts?: number[]
  descendants: number
}
