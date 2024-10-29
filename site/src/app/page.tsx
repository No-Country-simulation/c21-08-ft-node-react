import Discounts from "./sections/Discounts.section"
import Categories from "./sections/Categories.section"
import CustomerSteps from "./sections/CustomerSteps.section"
import Hero from "./sections/Hero.section"
import KramyInput from "./kramy/components/KramyPrompt"
import { Suspense } from "react"

export default async function Home() {
  return (
    <main className="mt-24 flex flex-col gap-20 md:gap-8 xs:gap-10">
      <Hero />
      <Categories />
      <Discounts />
      <CustomerSteps />
      <Suspense>
        <KramyInput mode="popup" />
      </Suspense>
    </main>
  )
}
