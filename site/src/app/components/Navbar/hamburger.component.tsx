import Icon from "../Icon/Icon.component"
import CategoriesButton from "./CategoriesButton.component"
import { HamburgerProps } from "./types/hamburgerTypes"

export const HamburgerButton = ({
  changeMenuVisibility,
  isMenuVisible,
}: HamburgerProps) => {
  return (
    <div
      className={`xs:block relative md:hidden ${!isMenuVisible ? "hidden" : "block"}`}
    >
      <button onClick={changeMenuVisibility} className="p-2">
        <Icon iconType="hamburger" />
      </button>

      <ul
        className={`${!isMenuVisible ? "hidden" : "flex"} absolute left-0 top-[200%] mt-2 flex-col gap-2 bg-gray-300 p-2 md:gap-4`}
      >
        <li className="flex gap-2">
          <CategoriesButton
            changeCategoriesVisibility={changeMenuVisibility} // Cambiar visibilidad del menú en móvil
          />
        </li>
        <li className="flex gap-2">
          <Icon iconType="user" />
          <span>Joel</span>
        </li>
      </ul>
    </div>
  )
}
