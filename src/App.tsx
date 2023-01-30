import { Router } from "./Routes/router"
import { BrowserRouter } from "react-router-dom"
import { GlobalStyled } from "./Styles/global"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function App() {
  return (
    <>
      <ToastContainer autoClose={2000} />

      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyled />
    </>
  )
}
