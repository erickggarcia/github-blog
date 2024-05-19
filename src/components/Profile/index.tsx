import { Link } from 'react-router-dom'
import avatar from '../../assets/avatar.png'
import { ProfileContainer, ProfileContentInformation } from './style'

export function Profile() {
    return (
        <ProfileContainer>
            <img src={avatar} alt="" />
            <ProfileContentInformation>
                <div>
                    <h1>Cameron Williamson</h1>
                    <Link to="#">GITHUB</Link>
                </div>
                <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
                <div>
                    <span>CameronWll</span>
                    <span>Rocketseat</span>
                    <span>32 seguidores</span>
                </div>
            </ProfileContentInformation>
        </ProfileContainer>
    )
}