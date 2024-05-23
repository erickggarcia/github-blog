import styled from "styled-components";

export const PostArticleContainer = styled.section`
    padding: 40px;

    article {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        p {
            u {
                display: block;
                color: ${props => props.theme.blue};
                margin-bottom: 20px;
            }

            font-size: 16px;
        }

    }

    ul {
        margin-top: 20px ;
        list-style: none;
        background: ${props => props.theme['base-post']};
        padding: 20px;

        li {
            margin-top: 10px;
        }
    }
`