import styled from 'styled-components'

export const PublicationsContainer = styled.section`
  margin-top: 40px;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 24px;
      font-weight: bold;
    }

    span {
      color: ${(props) => props.theme['base-span']};
      font-size: 14px;
    }
  }
`

export const SearchForm = styled.form`
  margin-top: 20px;

  input {
    width: 100%;
    min-height: 30px;
    padding: 20px;
    background: ${(props) => props.theme['base-input']};
    border: 0;
    border-radius: 6px;
    color: ${(props) => props.theme['base-text']};
    font-size: 16px;

    &:focus {
      box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
    }

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const ArticlesContainer = styled.section`
  margin: 2rem 0 4rem 0;
  display: grid;
  grid-gap: 1.75rem;
  grid-template-columns: repeat(2, 1fr);

  article {
    background: ${(props) => props.theme['base-post']};
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 10px;

    p {
      color: ${(props) => props.theme['base-text']};
    }
  }
`
