import { Link } from "react-router-dom"

import { Container } from "./styles"

import { Logo } from "../../Components/Logo"

export function NotFound() {
  return (
    <Container>
      <Logo />
      <h1>Página não encontrada!</h1>
      <h3>A página não existe!</h3>
      <Link className="button-home" to="/">
        Voltar para Home
      </Link>
    </Container>
  )
}
