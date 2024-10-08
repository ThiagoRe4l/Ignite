import {
    createContext,
    ReactNode,
    useCallback,
    useEffect,
    useState,
  } from 'react'
  import { api } from '../lib/axios'
  
  export interface IPost {
    number: number
    title: string
    body: string
    created_at: string
  }
  
  interface PostsContextType {
    posts: IPost[]
    fetchPosts: (query?: string) => {}
  }
  
  interface PostsProviderProps {
    children: ReactNode
  }
  
  export const PostsContext = createContext({} as PostsContextType)
  
  export function PostsProvider({ children }: PostsProviderProps) {
    const [posts, setPosts] = useState<IPost[]>([])
  
    const fetchPosts = useCallback(async (query = '') => {
      const response = await api.get('/search/issues', {
        params: {
          q: `repo:eduhaag/github-blog ${query}`,
        },
      })
      setPosts(response.data.items)
    }, [])
  
    useEffect(() => {
      fetchPosts()
    }, [fetchPosts])
  
    return (
      <PostsContext.Provider value={{ posts, fetchPosts }}>
        {children}
      </PostsContext.Provider>
    )
  }
  