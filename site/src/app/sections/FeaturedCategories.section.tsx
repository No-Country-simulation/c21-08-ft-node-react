import CategoryCard from "../components/CategoryCard/CategoryCard.component"
import { Category } from "@/app/types/Category.type"
import { API_BASE_URL } from "@/app/consts/api.consts"
import {
  removeAccents,
  strForData,
  strForDisplay,
} from "../../app/utils/strFormatting.util"

const getFeaturedCategories = async () => {
  const res = await fetch(`${API_BASE_URL}/category`, {
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  })
  const categories: Category[] = await res.json()
  const featured = categories.filter((c) => c.featured)
  const withImages = featured.map((c) => {
    if (
      removeAccents(strForData(decodeURIComponent(c.categoryName))) ===
      "almacen"
    ) {
      return {
        ...c,
        imgUrl: "/images/almacen-featured-img.png",
      }
    }

    if (strForData(decodeURIComponent(c.categoryName)) === "vinoteca") {
      return {
        ...c,
        imgUrl: "/images/vinoteca-featured-img.png",
      }
    }

    if (
      strForData(decodeURIComponent(c.categoryName)) === "bebidas-sin-alcohol"
    ) {
      return {
        ...c,
        imgUrl: "/images/bebidas-sin-alcohol-featured-img.png",
      }
    }
    return c
  })
  return withImages
}

const FeaturedCategories = async () => {
  const featuredCategories = await getFeaturedCategories()
  return (
    <section className="-mt-36 w-full md:mt-0">
      <div className="mx-auto flex max-w-[1072px] items-start items-center gap-10 rounded-[28px] bg-gray100 p-9 md:gap-0 md:gap-2 md:px-0 xs:gap-1 xs:px-1">
        {featuredCategories.map((c, idx) => (
          <CategoryCard
            key={`featured-category-${idx}`}
            name={strForDisplay(c.categoryName)}
            alt={c.categoryName}
            link={`/categoria/${strForData(c.categoryName)}?categoryid=${c.categoryId}`}
            src={c.imgUrl}
            width={480}
            height={480}
          />
        ))}
      </div>
    </section>
  )
}

export default FeaturedCategories
