import { Link, Wrapper } from './Navigation.styled'

export function Navigation() {
  return (
      <Wrapper>
          <Link to="/">Home</Link>
          <Link to="/contacts">Contacts</Link>
    </Wrapper>
  )
}