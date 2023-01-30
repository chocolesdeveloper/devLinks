import { ReactNode } from "react"
import { Container } from "./styles"

interface SocialProps {
  url?: string
  children: ReactNode
}

export function Social({ url, children }: SocialProps) {
  return (
    <Container>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Container>
  )
}
