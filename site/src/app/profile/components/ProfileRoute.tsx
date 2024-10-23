"use client"
import React, { PropsWithChildren } from "react"
import { useAuth } from "../../contexts/auth.context" // Ajusta la ruta según tu estructura

const ProfileRoute = ({ children }: PropsWithChildren) => {
  const { user } = useAuth()
  if (!user) {
    // Redirigir a la página de inicio de sesión o mostrar un mensaje
    return (
      <div>
        <p>
          No tienes acceso a esta página. Por favor,{" "}
          <a href="/auth/login">inicia sesión</a>.
        </p>
        <h3>Andá pa&apos; allá bobo</h3>
      </div>
    )
  }

  return children
}

export default ProfileRoute
