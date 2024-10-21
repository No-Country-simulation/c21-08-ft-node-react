import { MenuProps } from "./types/MenuProps.type"
import CategoriesButton from "./CategoriesButton.component"
import Icon from "../Icon/Icon.component"

const Menu = ({ isMenuVisible, changeCategoriesVisibility }: MenuProps) => {
  return (
    <div
      className={`${isMenuVisible ? "flex" : "hidden"} fixed left-0 top-[96px] flex-col`}
    >
      <nav>
        <ul className="flex flex-col">
          <li className="flex gap-2">
            <CategoriesButton
              changeCategoriesVisibility={changeCategoriesVisibility}
            />
          </li>
          <li className="flex gap-2">
            <Icon iconType="user" />
            <span>Joel</span>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu
