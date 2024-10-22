import Icon from "../Icon/Icon.component"
import { CategoriesButtonProps } from "./types/CategoriesButtonProps.type"

const CategoriesButton = ({
  changeCategoriesVisibility,
}: CategoriesButtonProps) => {
  return (
    <button onClick={changeCategoriesVisibility} className="flex gap-2">
      <Icon iconType="category" />
      <span className="sm:hidden xs:inline">Categorías</span>
    </button>
  )
}

export default CategoriesButton
