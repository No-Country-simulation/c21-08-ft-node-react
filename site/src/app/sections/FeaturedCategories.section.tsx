import CategoryCard from "../components/CategoryCard/CategoryCard.component"
import { IconProps } from "../components/Icon/types/IconProps.type"
import { Category } from "@/app/types/Category.type"
import { API_BASE_URL } from "@/app/consts/api.consts"
import Icon from "../components/Icon/Icon.component"
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

    if (
      strForData(decodeURIComponent(c.categoryName)) === "bebidas-con-alcohol"
    ) {
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
    <section className="md:-mt- relative z-40 -mt-36 w-full lg:-mt-48 md:mt-0 xs:hidden">
      <div className="mx-auto flex max-w-[1000px] justify-between gap-10 lg:gap-6 lg:px-10 md:px-5 sm:gap-3">
        {featuredCategories.map((c, idx) => (
          <CategoryCard
            key={`featured-category-${idx}`}
            icon={
              <Icon
                iconType={`${c.categoryName}-md-color` as IconProps["iconType"]}
                style="md:w-7"
              />
            }
            name={strForDisplay(c.categoryName)}
            link={`/categoria/${strForData(c.categoryName)}?categoryid=${c.categoryId}`}
          />
        ))}
      </div>
    </section>
  )
}

export default FeaturedCategories
