"use client"

import { useRouter } from "next/navigation"
import React, { useState, useContext } from "react"
import { CartContext } from "@/app/contexts/cart.context"

const RegisterPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const { productsInCart } = useContext(CartContext)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = { name, email, password }
    console.log(data)
    try {
      const response = await fetch(`http://localhost:3170/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      const responseData = await response.json()
      console.log("DATA", responseData)
      if (response.ok) {
        console.log("Registro correcto!!!")
        if (!productsInCart) {
          router.push("/profile")
        }
        router.push("/finalizar-compra")
      } else {
        console.error(responseData.message)
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-md">
        <h2 className="text-center text-2xl font-bold">Crear Cuenta</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                console.log(name)
              }}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                console.log(email)
              }}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                console.log(password)
              }}
            />
          </div>
          <button
            type="submit"
            className="mt-4 w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Registrarse
          </button>
        </form>
        <div className="mt-4 flex justify-center">
          <p className="text-sm">
            ¿Ya tienes una cuenta?{" "}
            <a href="/auth/login" className="text-blue-600 hover:underline">
              Iniciar sesión
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
