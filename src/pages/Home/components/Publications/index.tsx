import { useEffect, useState } from 'react'
import { ArticlesContainer, PublicationsContainer, SearchForm } from './style'
import Markdown from 'react-markdown'
import {formatDistanceToNow } from 'date-fns/formatDistanceToNow'
import { ptBR } from 'date-fns/locale/pt-BR'
import { api } from '../../../../lib/axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

interface ArticlesProps {
  incomplete_results: boolean
  items: any[]
  total_count: number
}

export function Publications() {
  const [queryParams, setQueryParams] = useState<string>('')
  const [articles, setArticles] = useState<ArticlesProps>()
  const navigate = useNavigate()

  function handleSearchArticles(data: any) {
    setQueryParams(data.search)
  }

  const {register, handleSubmit} = useForm()

  async function fetchArticles() {
    try {
      const response = await api.get(`/search/issues?q=${queryParams} repo:erickggarcia/github-blog`);
      const data = response.data
      setArticles(data)
    } catch (error) {
      console.error('Erro ao buscar artigos:', error);
    }
  }

  useEffect(() => {
    fetchArticles()
    console.log(queryParams)
  }, [queryParams])

  function truncateText(text: string, wordLimit: number): string {
    if (!text) {
      return ''
    }
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...'
    }

    return text
  }

  return (
    <PublicationsContainer>
      <div>
        <h2>Publicações</h2>
        <span>{articles?.total_count} publicações</span>
      </div>

      <SearchForm onSubmit={handleSubmit(handleSearchArticles)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('search')}
        />
      </SearchForm>

      <ArticlesContainer>
        {articles &&
          articles.items.map((article, index) => (
            <article key={index}
             id={article.number}
             onClick={() => navigate(`/post/${article.number}`)}
            >
              <div>
                <h3>{article.title}</h3>
                <span>{formatDistanceToNow(new Date(article.updated_at), {
                  addSuffix: true,
                  locale: ptBR
                }) }</span>
              </div>
              <div className='description'>
                <Markdown>
                  {truncateText(article.body, 30)}
                </Markdown>
              </div>
            </article>
          ))}
      </ArticlesContainer>
    </PublicationsContainer>
  )
}
