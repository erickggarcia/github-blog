import { PublicationsContainer, SearchForm } from "./style";

export function Publications() {
    return (
        <PublicationsContainer>
            <div>
                <h2>Publicações</h2>
                <span>6 publicações</span>
            </div>

            <SearchForm>
                <input type="text" placeholder="Buscar conteúdo" />
            </SearchForm>

        </PublicationsContainer >
    )
}