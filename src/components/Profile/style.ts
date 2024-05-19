import styled from "styled-components";

export const ProfileContainer = styled.section`
    gap: 9rem;
    background: ${props => props.theme['base-profile']};
    position: relative;
    z-index: 2;
    margin-top: -120px;
    border-radius: 10px;
    display: flex;
    padding: 20px;
    gap: 2rem;
`

export const ProfileContentInformation = styled.article`
    display: flex ;
    flex-direction: column;
    gap: 2rem;
    div:first-of-type {
            h1 {
                font-size: 24px;
                font-weight: bold;
            }
            
            a {
                text-decoration: none;
                color: ${props => props.theme.blue};
                font-size: 12px;
                font-weight: bold;
            }

            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
    p {
        color: ${props => props.theme['base-text']};
    }

    div:last-of-type {
            display: flex;
            gap: 2rem;
    }

`

