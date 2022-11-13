import { Routes, Route } from 'react-router-dom'
import { LayoutProvider } from './LayoutProvider'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Success } from './pages/Success'

export function Router() {
  return (
    <Routes>
      <Route element={<LayoutProvider />} path="/">
        <Route element={<Home />} path="/" />
        <Route element={<Checkout />} path="/checkout" />
        <Route element={<Success />} path="/success" />
      </Route>
    </Routes>
  )
}
