import { FormEvent, useEffect, useState } from "react"

import { DotsSixVertical, Link as LinkSVG, Trash } from "phosphor-react"

import { Header } from "../../Components/Header"
import { Input } from "../../Components/Input"
import { Logo } from "../../Components/Logo"

import {
  ButtonSubmit,
  Container,
  ContainerColors,
  ContainerLinks,
  Form,
  Links,
  Preview,
} from "./styles"

import { db } from "../../services/firebaseConnection"
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  deleteDoc,
} from "firebase/firestore"

import { toast } from "react-toastify"

interface LinksProps {
  id: string
  bg: string
  color: string
  createdAt?: Date
  name: string
  url: string
}

export function Admin() {
  const [nameInput, setNameInput] = useState("")
  const [urlInput, setUrlInput] = useState("")
  const [backgroundColorInpunt, setBackgroundColorInpunt] = useState("#f1f1f1")
  const [textColorInpunt, setTextColorInpunt] = useState("#000")

  const [links, setLinks] = useState<LinksProps[]>([])

  useEffect(() => {
    const linksRef = collection(db, "links")
    const queryRef = query(linksRef, orderBy("createdAt", "asc"))

    onSnapshot(queryRef, (snapshot) => {
      let list: LinksProps[] = []

      snapshot.forEach((doc) => {
        list.push({
          id: doc.id,
          name: doc.data().name,
          url: doc.data().url,
          bg: doc.data().bg,
          color: doc.data().color,
          createdAt: doc.data().createdAt,
        })
      })

      setLinks(list)
    })
  }, [])

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!nameInput) {
      return toast.warn("Digite um nome para o seu link!")
    }

    if (!urlInput) {
      return toast.warn("Digite uma url!")
    }

    addDoc(collection(db, "links"), {
      name: nameInput,
      url: urlInput,
      bg: backgroundColorInpunt,
      color: textColorInpunt,
      createdAt: new Date(),
    })
      .then(() => {
        setNameInput("")
        setUrlInput("")
        toast.success("Sucesso, guardamos seu link!")
      })
      .catch((error) => {
        console.log("Error:" + error)
        toast.error("Infelizmente não conseguimos realizar o cadastro!")
      })
  }

  async function handleDeleteLink(id: string) {
    const docRef = doc(db, "links", id)
    await deleteDoc(docRef)
      .then(() => {
        toast.success("Deletado com sucesso!")
      })
      .catch((error) => {
        console.log("Error:" + error)
        toast.error(
          "Alguma coisa deu errado, tente novamente daqui alguns momentos!"
        )
      })
  }

  return (
    <Container>
      <Header />
      <Logo />

      <Form onSubmit={handleRegister}>
        <label htmlFor="nomeDoLink">Nome do link</label>
        <Input
          placeholder="Youtube Channel"
          id="nomeDoLink"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <label htmlFor="link">Url do link</label>
        <Input
          placeholder="https://exemple.com"
          type="url"
          id="link"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />

        <ContainerColors>
          <div>
            <label htmlFor="color1"> Fundo do Link</label>
            <input
              type="color"
              id="color1"
              value={backgroundColorInpunt}
              onChange={(e) => setBackgroundColorInpunt(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="color2"> Cor da letra</label>
            <input
              type="color"
              id="color2"
              value={textColorInpunt}
              onChange={(e) => setTextColorInpunt(e.target.value)}
            />
          </div>
        </ContainerColors>

        {nameInput.trim() !== "" && (
          <Preview>
            <h3>Veja como está ficando:</h3>

            <Links
              style={{
                backgroundColor: `${backgroundColorInpunt}`,
                color: `${textColorInpunt}`,
              }}
            >
              <p>{nameInput}</p>
            </Links>
          </Preview>
        )}

        <ButtonSubmit type="submit">
          Cadastrar <LinkSVG size={24} color="#fff" />
        </ButtonSubmit>
      </Form>

      <ContainerLinks>
        <h2>Meus links</h2>

        {links.map((link) => (
          <Links
            key={link.id}
            style={{ backgroundColor: `${link.bg}`, color: `${link.color}` }}
          >
            <p>{link.name}</p>
            <div>
              <button onClick={() => handleDeleteLink(link.id)}>
                <Trash size={18} weight="bold" color="#fff" />
              </button>
            </div>
          </Links>
        ))}
      </ContainerLinks>
    </Container>
  )
}
