import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Container } from './styles'

export function DefaultLayout() {
  return (
    <Container>
      <Header />
      {/* Aqui serão posicionados os outros elementos */}
      <Outlet />
    </Container>
  )
}
