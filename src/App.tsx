import './App.css'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defaultTheme'
import { GlobalStyle } from './styles/globalStyle'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { OrderContextProvider } from './contexts/OrderContext'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <OrderContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </OrderContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
