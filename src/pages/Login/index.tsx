import { FormEvent, useState } from "react"

import { useNavigate } from "react-router-dom"

import { auth } from "../../services/firebaseConnection"
import { signInWithEmailAndPassword } from "firebase/auth"

import { Logo } from "../../Components/Logo"
import { Input } from "../../Components/Input"

import { Container, ContainerInput } from "./styles"

import { toast } from "react-toastify"
export function Login() {
  const [isEmail, setIsEmail] = useState("")
  const [isPassword, setIsPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isEmail === "" || isPassword === "") {
      toast.error("Preencha todos os campos!")
      return
    }

    setIsLoading(true)

    signInWithEmailAndPassword(auth, isEmail, isPassword)
      .then(() => {
        toast.success("Bem vindo de volta!")
        navigate("/admin", { replace: true })
      })
      .catch(() => {
        toast.error("Login inválido")
      })

    setIsLoading(false)
  }

  return (
    <Container>
      <Logo />
      <ContainerInput onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Digite seu e-mail"
          value={isEmail}
          onChange={(event) => setIsEmail(event.target.value)}
        />
        <Input
          type="password"
          placeholder="*********"
          value={isPassword}
          onChange={(event) => setIsPassword(event.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          Acesar a conta
        </button>
      </ContainerInput>
    </Container>
  )
}
