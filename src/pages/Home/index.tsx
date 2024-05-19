import { Profile } from "../../components/Profile";
import { HomeContainer, HomeContent } from "./style";

export function Home() {
    return (
        <HomeContainer>
            <HomeContent>
                <Profile />
            </HomeContent>
        </HomeContainer>
    )
}