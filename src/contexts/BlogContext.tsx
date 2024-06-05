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
    const response = await api.get('/users/erickggarcia')
    const data = response.data
    setProfile(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <BlogContext.Provider value={{ profile }}>{children}</BlogContext.Provider>
  )
}
