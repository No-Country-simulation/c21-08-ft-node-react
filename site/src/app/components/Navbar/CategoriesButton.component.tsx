import Icon from "../Icon/Icon.component"
import { CategoriesButtonProps } from "./types/CategoriesButtonProps.type"

const CategoriesButton = ({
  changeCategoriesVisibility,
}: CategoriesButtonProps) => {
  return (
    <button onClick={changeCategoriesVisibility} className="mx-2 flex gap-2">
      <Icon iconType="category" />
      <span className="xs:block sm:hidden">Categorías</span>
    </button>
  )
}

export default CategoriesButton