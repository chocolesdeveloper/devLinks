import { FormEvent, useEffect, useState } from "react"

import { Plus } from "phosphor-react"

import { db } from "../../services/firebaseConnection"
import { setDoc, doc, getDoc } from "firebase/firestore"

import { Header } from "../../Components/Header"
import { Input } from "../../Components/Input"

import { Container, Form } from "./styles"
import { toast } from "react-toastify"

export function Networks() {
  const [facebook, setFacebook] = useState("")
  const [instagram, setInstagram] = useState("")
  const [youtube, setYoutube] = useState("")

  useEffect(() => {
    async function loadLinks() {
      const docRef = doc(db, "social", "link")
      await getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setFacebook(snapshot.data()!.facebook)
          setInstagram(snapshot.data()!.instagram)
          setYoutube(snapshot.data()!.youtube)
        }
      })
    }

    loadLinks()
  }, [])

  async function handleSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    await setDoc(doc(db, "social", "link"), {
      facebook: facebook,
      instagram: instagram,
      youtube: youtube,
    })
      .then(() => {
        toast.success("Está salvo no nosso banco de dados!")
      })
      .catch((error) => {
        console.log("Error:" + error)
        toast.error(
          "Não conseguimos salvar seus dados, tente novamente a alguns momentos!"
        )
      })
  }

  return (
    <Container>
      <Header />

      <h1>Suas redes sociais</h1>

      <Form onSubmit={handleSave}>
        <label htmlFor="facebook">Link do facebook</label>
        <Input
          id="facebook"
          placeholder="https://facebook.com/your_user"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />
        <label htmlFor="instagram">Link do instagram</label>
        <Input
          id="instagram"
          placeholder="https://instagram.com/your_user"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />
        <label htmlFor="youtube">Link do youtube</label>
        <Input
          id="youtube"
          placeholder="https://youtube.com/your_user"
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
        />

        <button>
          <p>Salvar</p> <Plus size={18} weight="bold" color="#fff" />
        </button>
      </Form>
    </Container>
  )
}
