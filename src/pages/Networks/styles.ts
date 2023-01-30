import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #fff;
    margin: 1rem auto;
  }
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

  input {
    margin-bottom: 1.2rem;
  }

  button {
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
  }
`
