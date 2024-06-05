import { Article } from './components/articleSummary'
import { PostContainer, PostContent } from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostContent>
        <Article />
      </PostContent>
    </PostContainer>
  )
}
