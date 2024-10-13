import { Dispatch, SetStateAction } from 'react'
import Icon from '@/app/components/Icon/Icon.component'
import { strParseOut } from '@/app/utils/functions.utils'
import { Filters, FilterSwitchers } from '../types/page.types'

type FilterHeaderProps = {
  filterId: Filters
  filterSwitchers: FilterSwitchers
  setFilterSwitchers: Dispatch<SetStateAction<FilterSwitchers>>
}

const FilterHeader = ({ filterId, filterSwitchers, setFilterSwitchers }: FilterHeaderProps) => {
  return (
    <button
      className='flex w-full cursor-pointer justify-between border-none p-0'
      onClick={() => setFilterSwitchers(prev => ({ ...prev, [filterId]: !prev[filterId] }))}
    >
      <h3 className='text-xl font-semibold'>{strParseOut(filterId)}</h3>
      <Icon
        iconType='chev'
        style={
          (filterSwitchers[filterId] ? 'rotate-0' : 'rotate-180') +
          ' ' +
          'transition-all ease-in-out transform duration-300'
        }
      />
    </button>
  )
}

export default FilterHeader
