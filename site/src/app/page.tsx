import Discounts from "./sections/Discounts.section"
import FeaturedCategories from "./sections/FeaturedCategories.section"
import CustomerSteps from "./sections/CustomerSteps.section"
import Hero from "./sections/Hero.section"

export default async function Home() {
  return (
    <main className="mt-24 flex flex-col gap-16 md:gap-8 xs:gap-4">
      <Hero />
      <FeaturedCategories />
      <Discounts />
      <CustomerSteps />
    </main>
  )
}
