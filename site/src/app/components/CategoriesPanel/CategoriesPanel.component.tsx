import Icon from '../Icon/Icon.component'
import Category from './Category.component'
import { CategoriesPanelProps } from './types/CategoriesPanelProps.type'

const CategoriesPanel = ({ changeCategoriesVisibility }: CategoriesPanelProps) => {
  return (
    <>
      <div
        onClick={changeCategoriesVisibility}
        className='fixed left-0 top-[96px] z-[-1000] h-dvh w-dvw bg-black opacity-30'
      />
      <div className='fixed left-0 top-[96px] h-[332px] w-full bg-white'>
        <nav className='mx-auto grid h-full max-w-[1000px] grid-cols-4 grid-rows-2 gap-5 py-5'>
          <Category name='Almacén' route='/categoria?cat=almacén'><Icon iconType='category' /></Category>
          <Category name='Congelados' route='/categoria?cat=congelados'><Icon iconType='category' /></Category>
          <Category name='Librería' route='/categoria?cat=librería'><Icon iconType='category' /></Category>
          <Category name='Vinoteca' route='/categoria?cat=vinoteca'><Icon iconType='category' /></Category>
          <Category name='Limpieza' route='/categoria?cat=limpieza'><Icon iconType='category' /></Category>
          <Category name='Bebidas sin alcohol' route='/categoria?cat=bebidas-sin-alcohol'><Icon iconType='category' /></Category>
          <Category name='Bebidas con alcohol' route='/categoria?cat=bebidas-con-alcohol'><Icon iconType='category' /></Category>
          <Category name='Variados' route='/categoria?cat=variados'><Icon iconType='category' /></Category>
        </nav>
      </div>
    </>
  )
}

export default CategoriesPanel
