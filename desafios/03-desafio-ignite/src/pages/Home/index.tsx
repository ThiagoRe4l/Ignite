import { useContext } from 'react'
import { PostsContext } from '../../context/PostsContext'
import { HomeContainer, PostList } from './styles'
import { SearchForm } from './components/SearchForm'
import { Profile } from './components/Profile'
import { Post } from './components/Post'

export function Home() {
  const { posts } = useContext(PostsContext)

  return (
    <HomeContainer>
      <Profile />
      <SearchForm />
      <PostList>
        {posts.map((post) => {
          return <Post key={post.number} post={post} />
        })}
      </PostList>
    </HomeContainer>
  )
}
