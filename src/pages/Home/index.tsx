import { useEffect, useState } from "react"

import {
  getDocs,
  collection,
  orderBy,
  query,
  doc,
  getDoc,
} from "firebase/firestore"
import { db } from "../../services/firebaseConnection"

import { Social } from "../../Components/Social"

import { Container, ContainerLink, LinkArea, SocialContainer } from "./styles"

import { FacebookLogo, InstagramLogo, YoutubeLogo } from "phosphor-react"

interface LinksProps {
  id: string
  bg: string
  color: string
  createdAt?: Date
  name: string
  url: string
}

interface SocialProps {
  facebook: string
  instagram: string
  youtube: string
}

export function Home() {
  const [links, setLinks] = useState<LinksProps[]>([])
  const [socialLinks, setSocialLinks] = useState<SocialProps>({
    facebook: "",
    instagram: "",
    youtube: "",
  })

  useEffect(() => {
    function loadLinks() {
      const linksRef = collection(db, "links")
      const queryRef = query(linksRef, orderBy("createdAt", "asc"))

      getDocs(queryRef).then((snapshot) => {
        let list: LinksProps[] = []

        snapshot.forEach((doc) => {
          list.push({
            id: doc.id,
            bg: doc.data().bg,
            color: doc.data().color,
            name: doc.data().name,
            url: doc.data().url,
            createdAt: doc.data().createdAt,
          })
        })

        setLinks(list)
      })
    }

    loadLinks()
  }, [])

  useEffect(() => {
    function SocialLinks() {
      const docRef = doc(db, "social", "link")

      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setSocialLinks({
            facebook: snapshot.data()!.facebook,
            instagram: snapshot.data()!.instagram,
            youtube: snapshot.data()!.youtube,
          })
        }
      })
    }

    SocialLinks()
  }, [])

  console.log(socialLinks)
  return (
    <Container>
      <h1>William</h1>
      <span>Veja meus links: </span>

      <ContainerLink>
        {links.map((link) => (
          <LinkArea
            style={{ backgroundColor: link.bg, color: link.color }}
            key={link.id}
          >
            <a href={link.url} target="_blank">
              <p>{link.name}</p>
            </a>
          </LinkArea>
        ))}
      </ContainerLink>

      {links.length !== 0 && Object.keys(socialLinks).length !== 0 && (
        <SocialContainer>
          <Social url={socialLinks?.facebook}>
            <FacebookLogo size={34} color="#fff" />
          </Social>
          <Social url={socialLinks?.instagram}>
            <InstagramLogo size={34} color="#fff" />
          </Social>
          <Social url={socialLinks?.youtube}>
            <YoutubeLogo size={34} color="#fff" />
          </Social>
        </SocialContainer>
      )}
    </Container>
  )
}
