"use client"
import React, { useEffect } from "react"
import ProfileRoute from "./components/ProfileRoute"
import { useAuth } from "../contexts/auth.context"
import { useRouter } from "next/navigation"

const AdminPage = () => {
  const { user, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      // Si hay un usuario autenticado, redirige al perfil
      router.push("/")
    }
  }, [user, router])

  return (
    <ProfileRoute>
      <div>
        <h1>Página de Perfil</h1>
        <h2>Hola, {user?.name}. Bienvenido ! </h2>
        <a onClick={logout}> Cerrar sesión</a>
      </div>
    </ProfileRoute>
  )
}

export default AdminPage
