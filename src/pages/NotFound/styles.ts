import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;

  align-items: center;
  justify-content: center;

  color: white;

  gap: 1rem;

  h3 {
    font-style: italic;
    font-weight: lighter;
  }

  .button-home {
    background: rgba(255, 255, 255, 0.7);
    padding: 0.5rem 1.25rem;
    border-radius: 8px;
    color: black;
    text-decoration: none;

    transition: all 1s;

    :hover {
      text-decoration: underline;
      background: rgba(255, 255, 255, 0.9);
      transform: scale(1.05);
    }
  }
`
