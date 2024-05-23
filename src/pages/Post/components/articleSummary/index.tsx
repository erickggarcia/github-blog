import { Link } from "react-router-dom";
import { ArticleContainer, ArticleContentInformation, InformationContainer } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDay, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";

export function ArticleSummary() {
    return (
        <ArticleContainer>
            <ArticleContentInformation>
                <nav>
                    <span>
                        <FontAwesomeIcon icon={faChevronLeft} />
                        <Link to="/">VOLTAR</Link>
                    </span>
                    <span>
                        <Link to="/">VER NO GITHUB</Link>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </span>
                </nav>

                <h1>JavaScript data types and data structures</h1>
                <div>
                    <InformationContainer>
                        <FontAwesomeIcon icon={faGithub} />
                        <span>CameronWll</span>
                    </InformationContainer>

                    <InformationContainer>
                        <FontAwesomeIcon icon={faCalendarDay} />
                        <span>Há 1 dias</span>
                    </InformationContainer>

                    <InformationContainer>
                        <FontAwesomeIcon icon={faComment} />
                        <span>5 comentários</span>
                    </InformationContainer>
                </div>
            </ArticleContentInformation>
        </ArticleContainer>
    )
}