"use client"
import { useState } from "react"
import Login from "./components/Login.component"
import Register from "./components/Register.component"
import Toggle from "./components/Toggle.component"
import LoginInvite from "./components/LoginInvite.component"
import RegisterInvite from "./components/RegisterInvite.component"

const LoginComponent = () => {
  const [active, setActive] = useState(false)
  const handleActive = () => {
    setActive((prev) => !prev)
  }
  console.log(active)
  return (
    <div
      className="shadow-custom relative mx-auto mt-32 min-h-[480px] w-[768px] max-w-[100%] overflow-hidden rounded-xl bg-gray-300"
      id="container-profile"
    >
      <Login active={active} handleActive={handleActive}></Login>
      <Register active={active} handleActive={handleActive}></Register>
      <Toggle active={active}></Toggle>
      <LoginInvite active={active} handleActive={handleActive}></LoginInvite>
      <RegisterInvite
        active={active}
        handleActive={handleActive}
      ></RegisterInvite>
    </div>
  )
}

export default LoginComponent
