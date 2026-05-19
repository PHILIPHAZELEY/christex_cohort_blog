export type Profile = {
  id: string
  email: string | null
  created_at: string
}

export type Post = {
  id: string
  title: string
  content: string
  image_url: string | null
  user_id: string
  created_at: string
  profiles?: { email: string | null }
}
