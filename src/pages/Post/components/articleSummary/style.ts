import styled from "styled-components";

export const ArticleContainer = styled.section`
    gap: 9rem;
    background: ${props => props.theme['base-profile']};
    position: relative;
    z-index: 2;
    margin-top: -120px;
    border-radius: 10px;
    padding: 20px;
    gap: 2rem;
`

export const ArticleContentInformation = styled.article`
    display: flex ;
    flex-direction: column;
    gap: 2rem;

    nav {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        font-weight: bold;
        color: ${props => props.theme.blue};
        
        span {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            border-bottom: 1px solid transparent;
            cursor: pointer;

            &:hover {
                border-bottom-color: ${props => props.theme.blue};
                transition: 0.5s ease;
            }
        }

        a {
            text-decoration: none;
            color: ${props => props.theme.blue};
        }
    }

    h1 {
        font-size: 24px;
        font-weight: bold;
    }

    div {
        display: flex;
        gap: 1rem;
    }
`

export const InformationContainer = styled.article`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 16px;
    color: ${props => props.theme['base-span']} ;
`
