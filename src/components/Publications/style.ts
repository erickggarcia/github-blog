import styled from "styled-components";

export const PublicationsContainer = styled.section`
    margin-top: 40px;

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export const SearchForm = styled.form`
    margin-top: 20px;

    input {
        width: 100%;
        min-height: 30px;
        padding: 20px;
        background: ${props => props.theme['base-input']};
        border: 0;
        border-radius: 6px;
        color: ${props => props.theme['base-text']};
        font-size: 16px;

        &:focus {
            box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
        }

        &::placeholder {
            color: ${props => props.theme['base-label']};
        }
    }

`
