import { Clock, Scroll } from 'phosphor-react'
import { Container } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <Container>
      <span>Logo</span>
      <nav>
        <NavLink to="/">
          <Clock size={24} />
        </NavLink>
        <NavLink to="/history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </Container>
  )
}
