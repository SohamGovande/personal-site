export type Post = {
  data: { [key: string]: any }
  content: string
  excerpt?: string
  orig: Buffer
  language: string
  matter: string
}
