import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { LandPageStyle } from './styled'

export function LayoutProvider() {
  return (
    <LandPageStyle>
      <Header />
      <Outlet />
    </LandPageStyle>
  )
}
