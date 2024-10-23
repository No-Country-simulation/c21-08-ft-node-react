"use client"
import React from "react"
import ProfileRoute from "./components/ProfileRoute"
import { useAuth } from "../contexts/auth.context"

const AdminPage = () => {
  const { user, logout } = useAuth()

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
