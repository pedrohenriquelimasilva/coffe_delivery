import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyleComponent } from './style/global'
import { lightTheme } from './style/themes/lightTheme'
import { CoffeDeliveryProvider } from './Context/ContextProvider'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CoffeDeliveryProvider>
        <BrowserRouter>
          <Router />
          <ToastContainer />
        </BrowserRouter>
      </CoffeDeliveryProvider>
      <GlobalStyleComponent />
    </ThemeProvider>
  )
}
