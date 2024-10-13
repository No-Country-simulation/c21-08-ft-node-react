'use client'

import { useState, useRef } from 'react'
import { useToggleDimensions } from '@/app/hooks/useToggleDimensions.hook'
import Icon from '@/app/components/Icon/Icon.component'
import { strParseOut } from '../../utils/functions.utils'
import FilterHeader from './FilterHeader.component'
import { FilterSwitchers } from '../types/page.types'

const brandsMock = ['beltran', 'mustela', 'eco-origen', 'nua']

const FilterPanel = () => {
  const [filterSwitchers, setFilterSwitchers] = useState<FilterSwitchers>({
    marca: true,
    ofertas: true,
    precio: true,
  })

  const marcaRef = useRef<HTMLDivElement>(null)
  useToggleDimensions(marcaRef, filterSwitchers['marca'])

  const ofertasRef = useRef<HTMLDivElement>(null)
  useToggleDimensions(ofertasRef, filterSwitchers['ofertas'])

  const precioRef = useRef<HTMLDivElement>(null)
  useToggleDimensions(precioRef, filterSwitchers['precio'])

  return (
    <aside className='flex w-1/4 flex-col gap-9'>
      <h2 className='text-2xl font-bold'>Filtros</h2>
      <div className='flex flex-col gap-7'>
        <div className='flex flex-col gap-4'>
          <FilterHeader
            filterId='marca'
            filterSwitchers={filterSwitchers}
            setFilterSwitchers={setFilterSwitchers}
          />
          <div
            ref={marcaRef}
            className={
              'flex flex-col gap-4 overflow-hidden transition-all duration-200 ease-in-out'
            }
          >
            <div className='relative flex items-center'>
              <input type='text' className='h-10 w-full rounded border border-gray-300' />
              <div className='absolute end-0'>
                <Icon iconType='search' />
              </div>
            </div>
            {brandsMock.map((brand, idx) => (
              <div key={`brand-filter-${idx}`} className='flex items-center gap-2'>
                <input type='checkbox' />
                <label htmlFor=''>{strParseOut(brand)}</label>
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-col gap-7 border-t-2 border-solid pt-7'>
          <FilterHeader
            filterId='ofertas'
            filterSwitchers={filterSwitchers}
            setFilterSwitchers={setFilterSwitchers}
          />
          <div
            ref={ofertasRef}
            className={
              'flex items-center gap-2 overflow-hidden transition-all duration-200 ease-in-out'
            }
          >
            <input type='checkbox' />
            <label htmlFor=''>Descuento</label>
          </div>
        </div>

        <div className='border-t-2 border-solid pt-7'>
          <FilterHeader
            filterId='precio'
            filterSwitchers={filterSwitchers}
            setFilterSwitchers={setFilterSwitchers}
          />
          <div
            ref={precioRef}
            className={'overflow-hidden transition-all duration-200 ease-in-out'}
          >
            <input type='range' id='price' name='price' min='0' max='100' step='20' />
          </div>
        </div>
      </div>
    </aside>
  )
}

export default FilterPanel
