"use client"

import Image from "next/image"
import KramyBtn from "../components/KramyBtn/KramyBtn.component"
import Overlay from "../components/Overlay/Overlay.component"
import { ChangeEvent, useState } from "react"
import Icon from "../components/Icon/Icon.component"
import { useCallback } from "react"
import { strForDisplay } from "../utils/strFormatting.util"
import { splitIngredients } from "../utils/kramy.util"

type ResponseKeys = "allIngredients" | "owned" | "instructions"

type Response = {
  [key in ResponseKeys]: string[]
}

type FinalResponse = Omit<Response, "allIngredients"> & {
  allIngredients: string[][]
}
const Kramy = () => {
  const [showPopup, setShowPopup] = useState(false)
  const [query, setQuery] = useState("")
  const [response, setResponse] = useState<FinalResponse>()

  const submitQuery = useCallback(async (query: string) => {
    const res = await fetch(`/api/recipe?recipequery=${query}`)
    const kramyResponse: Response = await res.json()
    const splittedIngredients = splitIngredients(kramyResponse.allIngredients)
    const finalResponse = {
      ...kramyResponse,
      allIngredients: splittedIngredients,
    }
    console.log("finalResponse: ", finalResponse)
    setResponse(finalResponse)
  }, [])

  const handleOnChange = (e: ChangeEvent) => {
    setResponse(undefined)
    setQuery((e.target as HTMLInputElement).value)
  }

  const toggleDisplay = () => {
    setShowPopup((prev) => !prev)
    setQuery("")
    setResponse(undefined)
  }

  return (
    <>
      <Overlay isVisible={showPopup} changeVisibility={toggleDisplay} />
      {showPopup && (
        <div className="pointer-events-none fixed z-50 mt-10 flex h-full w-full items-start justify-center">
          <div className="pointer-events-auto flex w-[750px] flex-col gap-5 rounded-lg bg-gray100 p-8 shadow-xl lg:mx-10 sm:p-5 xs:mx-4">
            <div className="flex items-start justify-between gap-10 sm:gap-5">
              <div className="flex items-end justify-between gap-5">
                {!response ? (
                  <Image
                    alt="Asistenta virtual kramy saludando y esperando una consulta"
                    src="/images/kramy/kramy-waiting_transparent_small-size.png"
                    width={122}
                    height={200}
                    className="h-full w-16"
                  />
                ) : (
                  <Image
                    alt="Asistenta virtual kramy mostrando los ingredientes, instrucciones de preparación y los productos que tiene para ofrecer"
                    src="/images/kramy/kramy-response_transparent_small-size.png"
                    width={102}
                    height={200}
                    className="h-full w-16"
                  />
                )}
                <h2 className="flex flex-col gap-5 text-xl md:gap-4 sm:gap-1 sm:text-lg xs:text-base">
                  {!response ? (
                    <>
                      <span className="text-2xl font-bold leading-3 sm:text-xl xs:text-lg">
                        Hola! Soy Kramy,
                      </span>
                      <span className="leading-4">
                        en qué te puedo ayudar hoy? :)
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="leading-4">
                        Esto es lo que necesitas para preparar
                      </span>
                      <span className="text-2xl font-bold leading-3 sm:text-xl xs:text-lg">
                        {strForDisplay(query)}
                      </span>
                    </>
                  )}
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
                onChange={(e) => handleOnChange(e)}
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
            {response && (
              <div>
                <div className="flex w-full gap-5">
                  <div className="flex-1">
                    <h3>Ingredientes:</h3>
                    <div className="flex gap-5">
                      {response.allIngredients.map((row, rowIdx) => (
                        <ul key={`ingredient-row-${rowIdx}`}>
                          {row.map((i, ingIdx) => (
                            <li
                              key={`ingredient-${rowIdx}-{${ingIdx}}`}
                              className="ml-4 list-disc"
                            >
                              {strForDisplay(i)}
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3>Preparación:</h3>
                    <ul>
                      {response.instructions.map((i, idx) => (
                        <li
                          key={`ingredient-{${idx}}`}
                          className="list-decimal"
                        >
                          {strForDisplay(i)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <h2>Te podemos ofrecer:</h2>
                  <ul className="flex-1">
                    {response.owned.map((i, idx) => (
                      <li key={`ingredient-{${idx}}`} className="list-disc">
                        {strForDisplay(i)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <KramyBtn clickFn={toggleDisplay} />
    </>
  )
}

export default Kramy
