import styled from "styled-components"

export const Container = styled.header`
  width: 100%;
  max-width: 720px;
  margin-top: 0.875rem;
  padding: 0 0.875rem;
`

export const ContainerMenu = styled.nav`
  width: 100%;
  background-color: #fff;
  height: 48px;
  display: flex;
  align-items: center;

  border-radius: 8px;

  button {
    background: transparent;
    border: none;
    margin-right: 1.5rem;
    margin-left: 0.5rem;
  }

  a {
    margin-right: 0.875rem;
    color: #21242d;

    transition: all 0.3s;

    :hover {
      color: #eda617;
    }
  }
`
