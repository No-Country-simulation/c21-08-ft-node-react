"use client"

import Image from "next/image"
import KramyBtn from "../components/KramyBtn/KramyBtn.component"
import Overlay from "../components/Overlay/Overlay.component"
import { useState, useEffect } from "react"
import Icon from "../components/Icon/Icon.component"

const submitQuery = async (query: string) => {
  const res = await fetch(`/api/recipe?recipequery=${query}`)
  const kramyResponse = await res.json()
  console.log("kramyResponse: ", kramyResponse)
}

const Kramy = () => {
  const [showPopup, setShowPopup] = useState(false)
  const [query, setQuery] = useState("")

  const toggleDisplay = () => {
    setShowPopup((prev) => !prev)
    setQuery("")
  }

  return (
    <>
      <Overlay isVisible={showPopup} changeVisibility={toggleDisplay} />
      {showPopup && (
        <div className="pointer-events-none fixed z-50 flex h-full w-full items-center justify-center">
          <div className="pointer-events-auto flex max-w-[750px] flex-col gap-5 rounded-lg bg-gray100 p-8 shadow-xl lg:mx-10 sm:p-5 xs:mx-4">
            <div className="flex items-start justify-between gap-10 sm:gap-5">
              <div className="flex items-end justify-between gap-5">
                <Image
                  alt="Asistenta virtual kramy saludando y esperando una consulta"
                  src="/images/kramy/kramy-waiting_transparent_small-size.png"
                  width={122}
                  height={200}
                  className="h-full w-16"
                />
                <h2 className="flex flex-col gap-5 text-xl md:gap-4 sm:gap-1 sm:text-lg xs:text-base">
                  <span className="text-2xl font-bold leading-3 sm:text-xl xs:text-lg">
                    Hola! Soy Kramy,
                  </span>
                  <span className="leading-4">
                    en qué te puedo ayudar hoy? :)
                  </span>
                </h2>
              </div>
              <button onClick={toggleDisplay}>
                <Icon
                  iconType="plus"
                  style="rotate-45 scale-[2] xs:scale-[1.4]"
                />
              </button>
            </div>
            <div className="space-between items-between flex gap-10 sm:flex-col sm:gap-5">
              <input
                type="text"
                name="recipe-query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 rounded-lg border-[1px] border-solid border-gray400 px-5 py-2"
                placeholder="Escríbelo aquí..."
              />
              <button
                className="rounded-lg bg-krOrange px-5 py-2 font-bold text-white"
                onClick={() => submitQuery(query)}
              >
                ¿Cómo lo preparo?
              </button>
            </div>
            {/* <div></div> */}
            {/* <h3></h3> */}
            {/* <div></div> */}
          </div>
        </div>
      )}
      <KramyBtn clickFn={toggleDisplay} />
    </>
  )
}

export default Kramy
