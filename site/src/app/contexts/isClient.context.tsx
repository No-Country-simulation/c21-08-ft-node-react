"use client"
import { createContext, useState, useEffect } from "react"
import { ChildrenProviderProps } from "../types/ChildrenProviderProps.type"

export const IsClient = createContext(false)

export const IsClientProvider = ({ children }: ChildrenProviderProps) => {
  const [isClientCtx, setIsClientCtx] = useState<boolean>(false)
  useEffect(() => {
    setIsClientCtx(true)
  }, [])
  console.log("contexto del cliente", isClientCtx)

  return <IsClient.Provider value={isClientCtx}>{children}</IsClient.Provider>
}
