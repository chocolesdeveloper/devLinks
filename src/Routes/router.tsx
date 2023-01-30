import { Routes, Route } from "react-router-dom"

import { Admin } from "../pages/Admin"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Networks } from "../pages/Networks"
import { NotFound } from "../pages/NotFound"

import { Private } from "./PrivateAdmin"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/admin"
        element={
          <Private>
            <Admin />
          </Private>
        }
      />
      <Route
        path="/admin/social"
        element={
          <Private>
            <Networks />
          </Private>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
