"use client"

import { useState } from "react"
import KramyPrompt from "./components/KramyPrompt"
import { KramyFinalResponse } from "./kramy.types"
import KramySection from "./sections/KramySection.section"
import { Suspense } from "react"

const KramyPage = () => {
  const [response, setResponse] = useState<KramyFinalResponse>()

  return (
    <div className="w-full">
      <section className="m-auto min-h-[calc(100vh-96px-430px)] max-w-[1000px] lg:px-10 md:px-5">
        <Suspense>
          <KramyPrompt
            mode="page"
            setResponse={setResponse}
            response={response}
          />
          <KramySection response={response} />
        </Suspense>
      </section>
    </div>
  )
}

export default KramyPage
