import { ArticlesContainer, PublicationsContainer, SearchForm } from './style'

const MOCK_PUBLICATIONS = [
  {
    id: 1,
    title: 'JavaScript data types and data structures',
    date: 'Há 1 dia',
    description:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ',
  },
  {
    id: 2,
    title: 'JavaScript data types and data structures',
    date: 'Há 1 dia',
    description:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ',
  },
  {
    id: 3,
    title: 'JavaScript data types and data structures',
    date: 'Há 1 dia',
    description:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ',
  },
  {
    id: 4,
    title: 'JavaScript data types and data structures',
    date: 'Há 1 dia',
    description:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ',
  },
  {
    id: 5,
    title: 'JavaScript data types and data structures',
    date: 'Há 1 dia',
    description:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ',
  },
  {
    id: 6,
    title: 'JavaScript data types and data structures',
    date: 'Há 1 dia',
    description:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ',
  },
]

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

      <ArticlesContainer>
        {MOCK_PUBLICATIONS.map((article) => (
          <article key={article.id}>
            <div>
              <h3>{article.title}</h3>
              <span>{article.date}</span>
            </div>
            <p>{article.description}</p>
          </article>
        ))}
      </ArticlesContainer>
    </PublicationsContainer>
  )
}
