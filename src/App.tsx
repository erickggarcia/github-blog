import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './themes/defaultTheme'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { BlogContextProvider } from './contexts/BlogContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BlogContextProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Router />
        </BrowserRouter>
      </BlogContextProvider>
    </ThemeProvider>
  )
}
