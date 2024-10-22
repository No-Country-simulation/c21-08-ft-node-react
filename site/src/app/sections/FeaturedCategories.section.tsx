import CategoryCard from "../components/CategoryCard/CategoryCard.component"
import { Category } from "@/app/types/Category.type"
import { API_BASE_URL } from "@/app/consts/api.consts"
import { strForData, strForDisplay } from "../../app/utils/strFormatting.util"

const getFeaturedCategories = async () => {
  const res = await fetch(`${API_BASE_URL}/category`, {
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  })
  const categories: Category[] = await res.json()
  const featured = categories.filter((c) => c.featured)
  return featured
}

const FeaturedCategories = async () => {
  const featuredCategories = await getFeaturedCategories()
  return (
    <section className="-mt-48 w-full md:mt-0">
      <div className="mx-auto flex max-w-[1000px] items-start gap-6 md:gap-2 md:px-2 xs:gap-1 xs:px-1">
        {featuredCategories.map((c, idx) => (
          <CategoryCard
            key={`featured-category-${idx}`}
            name={strForDisplay(c.categoryName)}
            alt={c.categoryName}
            link={`/categoria/${strForData(c.categoryName)}?categoryid=${c.categoryId}`}
            src="/images/product-placeholder.webp"
            width={480}
            height={480}
          />
        ))}
      </div>
    </section>
  )
}

export default FeaturedCategories
