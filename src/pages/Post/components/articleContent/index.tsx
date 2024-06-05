import { PostArticleContainer } from "./styles";

export function ArticleContent () {
    return (
        <PostArticleContainer>
            <article>
                <p>
                    <strong>Programming languages all have built-in data structures, but these often differ from one language to another.</strong> This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
                </p>

                <p>
                    <div><u>Dynamic typing</u></div>
                    JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
                </p>
            </article>

            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </PostArticleContainer>
    )
}