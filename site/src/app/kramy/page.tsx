"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import KramyPrompt from "./components/KramyPrompt"
import { KramyFinalResponse } from "./kramy.types"
import KramySection from "./sections/KramySection.section"
import { Suspense } from "react"
import Kramy from "../components/Kramy/Kramy.component"
import useFirstQuery from "./hooks/useFirstQuery.hook"

type KramyState = "greeting" | "waiting" | "thinking" | "answering"

const KramyPage = () => {
  const [kramyResponse, setKramyResponse] = useState<KramyFinalResponse>()
  useFirstQuery(setKramyResponse)

  return (
    <div className="w-full">
      <section className="m-auto min-h-[calc(100vh-96px-430px)] max-w-[1000px] lg:px-10 md:px-5">
        <Suspense>
          <Kramy mode="page" setKramyResponse={setKramyResponse} />
          {/* <KramyPrompt */}
          {/*   mode="page" */}
          {/*   setResponse={setResponse} */}
          {/*   response={response} */}
          {/* /> */}
          <KramySection response={kramyResponse} />
        </Suspense>
      </section>
    </div>
  )
}

export default KramyPage
