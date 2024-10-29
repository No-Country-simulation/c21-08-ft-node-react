import Icon from "../Icon/Icon.component"
import { CategoriesButtonProps } from "./types/CategoriesButtonProps.type"

const CategoriesButton = ({
  changeCategoriesVisibility,
}: CategoriesButtonProps) => {
  return (
    <button
      onClick={changeCategoriesVisibility}
      className="flex gap-2 rounded-lg border-[1px] border-solid border-krRed px-3 py-2 text-krRed"
    >
      <Icon iconType="category" />
      <span className="sm:hidden">Productos</span>
    </button>
  )
}

export default CategoriesButton
