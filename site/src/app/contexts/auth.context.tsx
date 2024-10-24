"use client"
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react"

import { jwtDecode } from "jwt-decode"
import { useRouter } from "next/navigation"

// Define el tipo del usuario
interface User {
  email: string
  name: string
  role: "client" | "admin"
  userId: string
}

interface DecodedToken {
  user: User // Estructura del token decodificado
  iat: number
  exp: number
}

// Define el tipo del contexto
interface AuthContextType {
  user: User | null
  login: (token: string) => void
  logout: () => void
}

// Crea el contexto y establece un valor inicial
export const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Define el tipo de las props del proveedor
interface AuthProviderProps {
  children: ReactNode
}

// Proveedor de autenticación
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  console.log("contexto usuario", user)
  useEffect(() => {
    const token = window.localStorage.getItem("token")
    console.log(token)
    if (token) {
      try {
        const decodedToken = jwtDecode<DecodedToken>(token)
        setUser(decodedToken.user) // Puedes almacenar el token decodificado
      } catch (error) {
        console.error("Error decoding token:", error)
        setUser(null) // Si hay un error en la decodificación, no se establece el usuario
      }
    }
  }, [])

  const login = (token: string) => {
    localStorage.setItem("token", token)
    const decodedToken = jwtDecode<DecodedToken>(token)
    setUser(decodedToken.user) // Actualiza el estado del usuario con el token decodificado
  }

  const logout = () => {
    localStorage.removeItem("token")
    router.push("/")
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// Hook para usar el contexto
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
