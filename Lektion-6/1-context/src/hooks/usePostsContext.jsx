import { useContext } from "react"
import { PostsContext } from "../contexts/PostsContext"

export const usePostsContext = () => {
  const context = useContext(PostsContext)

  if(!context) throw new Error('usePostsContext must be inside a PostsContextProvder')

  return context
}