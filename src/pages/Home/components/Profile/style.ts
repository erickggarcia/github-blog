import styled from 'styled-components'

export const ProfileContainer = styled.section`
  gap: 9rem;
  background: ${(props) => props.theme['base-profile']};
  position: relative;
  z-index: 2;
  margin-top: -120px;
  border-radius: 10px;
  display: flex;
  padding: 20px;
  gap: 2rem;

  .avatar {
    display: block;
    border-radius: 5px;
    max-width: 150px;
    min-width: 150px;
  }
`

export const ProfileContentInformation = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  .profileMainInformation {
    h1 {
      font-size: 24px;
      font-weight: bold;
    }

    div {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      border-bottom: 1px solid transparent;

      svg {
        color: ${(props) => props.theme.blue};
      }

      a {
        text-decoration: none;
        color: ${(props) => props.theme.blue};
        font-size: 12px;
        font-weight: bold;
      }

      padding-bottom: 5px;

      &:hover {
        border-bottom-color: ${(props) => props.theme.blue};
        transition: 0.3s;
      }
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    color: ${(props) => props.theme['base-text']};
  }

  .summary {
    display: flex;
    gap: 2rem;
  }
`

export const InformationContainer = styled.article`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
