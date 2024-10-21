import Icon from "../Icon/Icon.component"
import Category from "./Category.component"
import { CategoriesPanelProps } from "./types/CategoriesPanelProps.type"
import Overlay from "../Overlay/Overlay.component"
import {
  cleanStr,
  strForData,
  strForDisplay,
} from "@/app/utils/strFormatting.util"
import { IconProps } from "../Icon/types/IconProps.type"
/*mx-auto grid h-full w-full max-w-[1000px] grid-cols-2 gap-2 py-5 md:grid-cols-4 md:gap-5*/
const CategoriesPanel = ({
  changeCategoriesVisibility,
  isCategoriesVisible,
  categories,
}: CategoriesPanelProps) => {
  return (
    <>
      <Overlay
        isVisible={isCategoriesVisible}
        changeVisibility={changeCategoriesVisibility}
      />
      <div
        className={`${isCategoriesVisible ? "block" : "hidden"} z-30 fixed left-0 top-[96px] h-[332px] w-full bg-white`}
      >
        <nav className="mx-auto grid h-full max-w-[1000px] grid-cols-4 grid-rows-2 gap-5 py-5 md:w-full md:grid-cols-2 md:grid-rows-4 md:gap-2 md:gap-x-10 md:px-10 sm:gap-x-1 xs:gap-y-6 xs:px-1">
          {categories.map((c, idx) => {
            const cleanedName = cleanStr(c.categoryName)
            const displayName = strForDisplay(cleanedName)
            const dataName = strForData(cleanedName) as IconProps["iconType"]
            return (
              <Category
                key={`category-${idx}`}
                name={displayName}
                route={`/categoria/${dataName}?categoryId=${c.categoryId}`}
              >
                <Icon iconType={dataName} />
              </Category>
            )
          })}
        </nav>
      </div>
    </>
  )
}

export default CategoriesPanel
