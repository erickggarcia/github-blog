import { ArticleContent } from "./components/articleContent";
import { ArticleSummary } from "./components/articleSummary";
import { PostContainer, PostContent } from "./styles";

export function Post() {
    return (
        <PostContainer>
            <PostContent>
                <ArticleSummary />
                <ArticleContent/>
            </PostContent>
        </PostContainer>
    )
}