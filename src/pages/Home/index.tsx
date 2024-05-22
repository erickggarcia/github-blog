import { Profile } from "../Home/components/Profile";
import { Publications } from "../Home/components/Publications";
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