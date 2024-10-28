"use client"
import { useRouter } from "next/navigation"
import { useAuth } from "@/app/contexts/auth.context"
import React, { useEffect, useState } from "react"
import { API_BASE_URL } from "@/app/consts/api.consts"
import { PropsComponents } from "../types/propsComponents.types"

const Login = ({ active }: PropsComponents) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { user } = useAuth()
  const router = useRouter()

  const { login } = useAuth()

  useEffect(() => {
    if (user) {
      router.push("/profile")
    }
  }, [user, router])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = { email, password }
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      const responseData = await response.json()
      if (response.ok) {
        login(responseData.token)
      } else {
        console.error(responseData.message)
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }
  const style = active
    ? "w-1/2 h-full flex absolute z-30 justify-center items-center top-0 left-0 translate-x-full opacity-100"
    : "w-1/2 h-full flex absolute z-10 justify-center items-center top-0 left-0 opacity-0"

  return (
    <div
      className={`h-full w-1/2 bg-gray300 transition-all duration-500 ease-in-out ${style}`}
      id="Login"
    >
      <div className="">
        <h2 className="text-center text-2xl font-bold">Iniciar Sesión</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
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
              }}
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full rounded-md bg-krOrange py-2 text-black focus:outline-none"
          >
            Iniciar Sesión
          </button>
        </form>
        <div className="mt-4 flex flex-col justify-between">
          <a
            href="/auth/register"
            className="font-bold text-krOrange shadow-sm hover:underline"
          >
            Crear una cuenta
          </a>
          <a
            href="/#"
            className="font-bold text-krOrange shadow-sm hover:underline"
          >
            Olvidé mi contraseña
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login
