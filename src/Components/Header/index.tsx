import { Link } from "react-router-dom"

import { auth } from "../../services/firebaseConnection"

import { signOut } from "firebase/auth"

import { Container, ContainerMenu } from "./styles"

import { SignOut } from "phosphor-react"

export function Header() {
  async function handleLogout() {
    await signOut(auth)
  }

  return (
    <Container>
      <ContainerMenu>
        <button onClick={handleLogout}>
          <SignOut size={28} color="#DB3639" />
        </button>

        <Link to="/admin">Links</Link>
        <Link to="/admin/social">Redes Sociais</Link>
      </ContainerMenu>
    </Container>
  )
}
