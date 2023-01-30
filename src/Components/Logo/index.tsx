import { Link } from "react-router-dom"

import { Container } from "./styles"

export function Logo() {
  return (
    <Container>
      <Link to="/">
        <p>
          Dev<strong>Link</strong>
        </p>
      </Link>
    </Container>
  )
}
