import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface BlogContextProviderProps {
  children: ReactNode
}

interface BlogContextType {
  profile: any
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogContextProvider({ children }: BlogContextProviderProps) {
  const [profile, setProfile] = useState()

  async function fetchData() {
    try {
      const response = await api.get('/users/erickggarcia')
      const data = response.data
      setProfile(data)
    } catch (error) {
      console.log('Erro ao buscar dados do perfil:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <BlogContext.Provider value={{ profile }}>{children}</BlogContext.Provider>
  )
}
