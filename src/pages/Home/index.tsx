import { Profile } from "../../components/Profile";
import { Publications } from "../../components/Publications";
import { HomeContainer, HomeContent } from "./style";

export function Home() {
    return (
        <HomeContainer>
            <HomeContent>
                <Profile />
                <Publications />
            </HomeContent>
        </HomeContainer>
    )
}