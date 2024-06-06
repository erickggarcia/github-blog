import { Link, useParams } from 'react-router-dom'
import {
  ArticleContainer,
  ArticleContentInformation,
  InformationContainer,
} from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCalendarDay, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare'
import {useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import { api } from '../../../../lib/axios'
import {formatDistanceToNow } from 'date-fns/formatDistanceToNow'
import { ptBR } from 'date-fns/locale/pt-BR'

interface ArticleProps {
  title: string
  body: string
  user: {
    login : string
  }
  updated_at: string
  comments: string
}


export function Article() {
  const [article, setArticle] = useState<ArticleProps>({
    title: '',
    body: '',
    user: {
      login : ''
    },
    updated_at: '',
    comments: ''
  })
  const {id} = useParams()

  async function fetchArticle() {
    try {
      const response = await api.get(`/repos/erickggarcia/github-blog/issues/${id}`)
      const data = response.data
      console.log(data)
      setArticle(data)
    } catch (error) {
      console.error('Erro ao carregar artigo:', error);
    }
  }

  useEffect(() => {
    fetchArticle()
  }, [])

  return (
    <ArticleContainer>
      <ArticleContentInformation>
        {
          article &&
          <>
            <nav>
            <span>
              <FontAwesomeIcon icon={faChevronLeft} />
              <Link to="/">VOLTAR</Link>
            </span>
            <span>
              <Link target='_blank' to={`https://github.com/erickggarcia/github-blog/issues/${id}`}>VER NO GITHUB</Link>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </span>
          </nav>

          <h1>{article.title}</h1>
            <Markdown className='markdown'>
              {article.body}
            </Markdown>
          <div>
            <InformationContainer>
              <FontAwesomeIcon icon={faGithub} />
              <span>{article.user.login}</span>
            </InformationContainer>

            <InformationContainer>
              <FontAwesomeIcon icon={faCalendarDay} />
              <span>{article.updated_at && formatDistanceToNow(new Date(article.updated_at), {
                  addSuffix: true,
                  locale: ptBR
                }) } </span>
            </InformationContainer>

            <InformationContainer>
              <FontAwesomeIcon icon={faComment} />
              <span>{article.comments} comentários</span>
            </InformationContainer>
          </div>
        </>
        }
      </ArticleContentInformation>
    </ArticleContainer>
  )
}
