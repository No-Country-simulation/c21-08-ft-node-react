import Icon from '../Icon/Icon.component'
import Category from './Category.component'
import { CategoriesPanelProps } from './types/CategoriesPanelProps.type'
import Overlay from '../Overlay/Overlay.component'

const CategoriesPanel = ({ changeCategoriesVisibility, isCategoriesVisible }: CategoriesPanelProps) => {
  return (
    <>
      <Overlay isVisible={isCategoriesVisible} changeVisibility={changeCategoriesVisibility} />
      <div className='fixed left-0 top-[96px] h-[332px] w-full bg-white'>
        <nav className='mx-auto grid h-full max-w-[1000px] grid-cols-4 grid-rows-2 gap-5 py-5'>
          <Category name='Almacén' route='/categoria?name=almacén'><Icon iconType='category' /></Category>
          <Category name='Congelados' route='/categoria?name=congelados'><Icon iconType='category' /></Category>
          <Category name='Librería' route='/categoria?name=librería'><Icon iconType='category' /></Category>
          <Category name='Vinoteca' route='/categoria?name=vinoteca'><Icon iconType='category' /></Category>
          <Category name='Limpieza' route='/categoria?name=limpieza'><Icon iconType='category' /></Category>
          <Category name='Bebidas sin alcohol' route='/categoria?name=bebidas-sin-alcohol'><Icon iconType='category' /></Category>
          <Category name='Bebidas con alcohol' route='/categoria?name=bebidas-con-alcohol'><Icon iconType='category' /></Category>
          <Category name='Variados' route='/categoria?name=variados'><Icon iconType='category' /></Category>
        </nav>
      </div>
    </>
  )
}

export default CategoriesPanel
