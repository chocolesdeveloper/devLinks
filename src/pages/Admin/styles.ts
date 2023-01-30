import styled, { keyframes } from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;

  padding-bottom: 0.825rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 90%;
  max-width: 720px;

  color: white;

  label {
    margin-top: 1rem;
    margin-bottom: 0.3rem;
  }
`

export const ContainerColors = styled.section`
  display: flex;
  justify-content: space-around;

  margin: 0.875rem 0;

  label {
    margin-right: 0.75rem;
  }
`

export const ButtonSubmit = styled.button`
  width: 100%;
  margin-top: 0.875rem;
  padding: 0.5rem;

  border-radius: 8px;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-size: 1rem;

  background-color: blue;
  color: white;
`

export const ContainerLinks = styled.div`
  color: #fff;
  width: 90%;
  max-width: 720px;

  display: flex;
  flex-direction: column;

  h2 {
    margin: 1rem auto;
  }
`
const Animate = keyframes`
  from { opacity: 0; transform: scale(0.7, 0.7); }
  to { opacity:1; transform: scale(1, 1); }
`

export const Links = styled.article`
  margin: 0.4rem auto;
  width: 100%;
  padding: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: green;
  border-radius: 8px;
  border: 0;

  opacity: 0.7;

  animation: ${Animate} 1s ease-in-out;
  transition: all 0.5s;

  :hover {
    transform: scale(1.05);
    opacity: 1;
  }

  button {
    background-color: transparent;
    border: 0;
  }
`

export const Preview = styled.div`
  padding: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.6);

  h3 {
    margin: 0.8rem 0;
    text-align: center;
  }
`
