import { Link } from 'react-router-dom'
import avatar from '../../../../assets/avatar.png'
import { InformationContainer, ProfileContainer, ProfileContentInformation } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import { faArrowUpRightFromSquare, faUserGroup } from '@fortawesome/free-solid-svg-icons'

export function Profile() {
    return (
        <ProfileContainer>
            <img src={avatar} alt="" />
            <ProfileContentInformation>
                <div>
                    <h1>Cameron Williamson</h1>
                    <div>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        <Link to="#">GITHUB</Link>
                    </div>
                </div>
                <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
                <div>
                    <InformationContainer>
                        <FontAwesomeIcon icon={faGithub} />
                        <span>CameronWll</span>
                    </InformationContainer>

                    <InformationContainer>
                        <FontAwesomeIcon icon={faBuilding} />
                        <span>Rocketseat</span>
                    </InformationContainer>

                    <InformationContainer>
                        <FontAwesomeIcon icon={faUserGroup} />
                        <span>32 seguidores</span>
                    </InformationContainer>
                </div>
            </ProfileContentInformation>
        </ProfileContainer>
    )
}