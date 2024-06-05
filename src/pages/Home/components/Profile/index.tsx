import { Link } from 'react-router-dom'
import {
  InformationContainer,
  ProfileContainer,
  ProfileContentInformation,
} from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import {
  faArrowUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { BlogContext } from '../../../../contexts/BlogContext'

export function Profile() {
  const { profile } = useContext(BlogContext)
  console.log(profile)

  if (!profile) {
    return <div>Loading...</div> // Ou qualquer outra indicação de carregamento
  }

  return (
    <ProfileContainer>
      <img className="avatar" src={profile.avatar_url} alt="" />
      <ProfileContentInformation>
        <div className="profileMainInformation">
          <h1>{profile.name}</h1>
          <div>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            <Link to={profile.html_url}>GITHUB</Link>
          </div>
        </div>
        <p>{profile.bio}</p>
        <div className="summary">
          <InformationContainer>
            <FontAwesomeIcon icon={faGithub} />
            <span>{profile.login}</span>
          </InformationContainer>

          <InformationContainer>
            <FontAwesomeIcon icon={faBuilding} />
            <span>{profile.company}</span>
          </InformationContainer>

          <InformationContainer>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{profile.followers} seguidores</span>
          </InformationContainer>
        </div>
      </ProfileContentInformation>
    </ProfileContainer>
  )
}
