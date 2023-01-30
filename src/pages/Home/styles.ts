import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 0.75rem 0;

  gap: 1rem;
  min-height: 100vh;
  width: 100%;
  color: #fff;

  h1 {
    @media screen and (max-width: 550px) {
      font-size: 1.5rem;
      text-align: center;
    }

    @media screen and (max-width: 360px) {
      font-size: 1.3rem;
      text-align: center;
    }
  }
`

export const ContainerLink = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  width: 90%;
`

export const LinkArea = styled.section`
  width: 100%;
  text-align: center;
  padding: 0.4rem 0;
  border-radius: 4px;
  user-select: none;

  transition: transform 0.5s;

  :hover {
    transform: scale(1.04);
  }

  a {
    font-size: 1.25rem;
    line-height: 150%;
    color: #fff;

    p {
      @media screen and (max-width: 550px) {
        font-size: 1rem;
      }
    }
  }
`

export const SocialContainer = styled.footer`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
`
