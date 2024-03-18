import { Link, Wrapper } from "./AuthNav.styled";

export function AuthNav() {

  return (
      <Wrapper>
          <Link to="/register">Register</Link>
          <Link to="/login">Log in</Link>
    </Wrapper>
  )
}