import { ReactNode, useState, useEffect } from "react"

import { auth } from "../services/firebaseConnection"
import { onAuthStateChanged } from "firebase/auth"

import { Navigate } from "react-router-dom"

interface PrivateProps {
  children: ReactNode
}

export function Private({ children }: PrivateProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isSigned, setIsSigned] = useState(false)

  useEffect(() => {
    async function checkLogin() {
      const unsub = onAuthStateChanged(auth, (user) => {
        if (user) {
          const userData = {
            uid: user.uid,
            email: user.email,
          }

          localStorage.setItem("@detailUser", JSON.stringify(userData))
          setIsLoading(false)
          setIsSigned(true)
        } else {
          setIsLoading(false)
          setIsSigned(false)
        }
      })
    }

    checkLogin()
  }, [])

  if (isLoading) {
    return <div></div>
  }

  if (!isSigned) {
    return <Navigate to="/login" />
  }

  return <>{children}</>
}
