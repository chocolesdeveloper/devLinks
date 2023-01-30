import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ContainerInput = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 90%;
  max-width: 600px;

  button {
    padding: 0.5rem 0.3rem;
    border: none;
    border-radius: 8px;
    background-color: #3366ff;
    font-size: 1.1rem;
    color: #fff;

    transition: all 0.8s;

    :hover {
      opacity: 0.8;
    }

    :disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }
`
