"use client"

import { useEffect } from "react"
import Image from "next/image"
import KramyBtn from "../../components/KramyBtn/KramyBtn.component"
import Overlay from "../../components/Overlay/Overlay.component"
import { ChangeEvent, useState } from "react"
import Icon from "../../components/Icon/Icon.component"
import { useCallback } from "react"
import { splitIngredients } from "../../utils/kramy.util"
import { useRouter, useSearchParams } from "next/navigation"
import { KramyProps, KramyResponse } from "@/app/kramy/kramy.types"
import { strForDisplay } from "@/app/utils/strFormatting.util"

type KramyState = "greeting" | "waiting" | "thinking" | "answering"

const getRecipe = async (query: string) => {
  // const res = await fetch(`/api/recipe?recipequery=${query}`)
  const res = await fetch(`/kramy?recipequery=${query}`)
  const kramyResponse: KramyResponse = await res.json()
  console.log("kramyResponse: ", kramyResponse)
  const splittedIngredients = splitIngredients(kramyResponse.allIngredients)
  const finalResponse = {
    ...kramyResponse,
    allIngredients: splittedIngredients,
  }

  return finalResponse
}

const KramyPrompt = ({ mode, setResponse, response }: KramyProps) => {
  // console.log("setResponse: ", setResponse)
  // console.log("response: ", response)
  const [showPopup, setShowPopup] = useState(false)
  const [query, setQuery] = useState("")
  const router = useRouter()
  const [kramyState, setKramyState] = useState<KramyState>("greeting")
  const searchParams = useSearchParams()
  const recipeQuery = searchParams.get("recipequery")
  // const isClient = useContext(IsClient)

  const submitQuery = useCallback(
    async (query: string) => {
      setKramyState("thinking")
      console.log("query: ", query)
      if (!recipeQuery) return

      const recipe = await getRecipe(query)

      // after the first request this 'recipequery' search params is not used
      // anymore, but for the sake of having it synchronized with the 'query'
      // state I'm modifying the url here
      router.replace(`/kramy?recipequery=${recipeQuery}`)

      if (setResponse) {
        setKramyState("answering")
        setResponse(recipe)
      }
    },
    [recipeQuery, router, setResponse],
  )

  const handleSubmit = () => {
    if (mode === "page") {
      submitQuery(query)
    } else {
      router.push(`/kramy?recipequery=${query}`)
    }
  }

  useEffect(() => {
    console.log("kramyState: ", kramyState)
  }, [kramyState])

  const handleOnChange = (e: ChangeEvent) => {
    setKramyState("waiting")
    if (setResponse) setResponse(undefined)
    setQuery((e.target as HTMLInputElement).value)
  }

  useEffect(() => {
    const firstQuery = async () => {
      if (!recipeQuery) return
      const recipe = await getRecipe(recipeQuery)
      if (setResponse) setResponse(recipe)
    }

    if (mode !== "page") return
    firstQuery()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleDisplay = () => {
    setShowPopup((prev) => !prev)
    setQuery("")
    if (setResponse) setResponse(undefined)
  }

  return true ? (
    <>
      <Overlay isVisible={showPopup} changeVisibility={toggleDisplay} />
      {(showPopup || mode === "page") && (
        <div
          className={`pointer-events-none ${mode === "popup" ? "fixed" : ""} z-50 mt-10 flex h-full w-full flex-col items-start justify-center`}
        >
          <div
            className={`pointer-events-auto flex ${mode === "popup" ? "w-max-[750px]" : "w-max-[1000px]"} m-auto flex-col gap-5 rounded-lg bg-gray100 ${mode === "popup" ? "px-8 py-8" : "px-0 py-8"} ${mode === "popup" ? "shadow-xl" : ""} sm:p-5`}
          >
            <div className="flex items-start justify-between gap-10 sm:gap-5">
              <div className="flex items-end justify-between gap-5">
                {kramyState === "greeting" ? (
                  <Image
                    alt="Asistenta virtual kramy saludando y esperando una consulta"
                    src="/images/kramy/kramy-waiting_transparent_small-size.png"
                    width={122}
                    height={200}
                    className="h-full w-16"
                  />
                ) : kramyState === "waiting" ? (
                  <Image
                    alt="Asistenta virtual kramy saludando y esperando una consulta"
                    src="/images/kramy/kramy-waiting_transparent_small-size.png"
                    width={122}
                    height={200}
                    className="h-full w-16"
                  />
                ) : kramyState === "thinking" ? (
                  <Image
                    alt="Asistenta virtual kramy mostrando los ingredientes, instrucciones de preparación y los productos que tiene para ofrecer"
                    src="/images/kramy/kramy-response_transparent_small-size.png"
                    width={102}
                    height={200}
                    className="h-full w-16"
                  />
                ) : kramyState === "answering" ? (
                  <Image
                    alt="Asistenta virtual kramy mostrando los ingredientes, instrucciones de preparación y los productos que tiene para ofrecer"
                    src="/images/kramy/kramy-response_transparent_small-size.png"
                    width={102}
                    height={200}
                    className="h-full w-16"
                  />
                ) : (
                  ""
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
                        {strForDisplay(response.recipe)}
                      </span>
                    </>
                  )}
                </h2>
              </div>
              {mode === "popup" ? (
                <button onClick={toggleDisplay}>
                  <Icon
                    iconType="plus"
                    style="rotate-45 scale-[2] xs:scale-[1.4]"
                  />
                </button>
              ) : (
                ""
              )}
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
                onClick={handleSubmit}
              >
                ¿Cómo lo preparo?
              </button>
            </div>
          </div>
        </div>
      )}
      {mode === "popup" ? <KramyBtn clickFn={toggleDisplay} /> : ""}
    </>
  ) : (
    ""
  )
}

export default KramyPrompt
