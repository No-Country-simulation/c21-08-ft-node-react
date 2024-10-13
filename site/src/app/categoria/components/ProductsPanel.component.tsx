'use client'

import { Product } from '@/app/types/Product.type'
import Card from '@/app/components/Card/Card.component'
import { useSearchParams } from 'next/navigation'
import { strParseOut } from '@/app/utils/functions.utils'
import { useRouter } from 'next/navigation'
import Icon from '@/app/components/Icon/Icon.component'

type ProductsPanel = {
  products: Product[]
}

const ProductsPanel = ({ products }: ProductsPanel) => {
  const searchParams = useSearchParams()
  const currentCategory = strParseOut(searchParams.get('name') || 'unknown category')
  const router = useRouter()

  return (
    <div className='flex w-3/4 w-full flex-col gap-10'>
      <div className='flex flex-col gap-2'>
        <span className='flex cursor-pointer items-center gap-1' onClick={() => router.back()}>
          <Icon iconType='chev' style='rotate-180 h-5' />
          <button>Página de inicio</button>
        </span>
        <h3 className='text-4xl font-bold'>{currentCategory}</h3>
      </div>
      <span>Mostrando 16 productos</span>
      {/* <div>...</div> */}
      <div className='inline-grid w-full grid-cols-3 justify-between gap-10'>
        {products.map((p, idx) => (
          <Card key={`card-${idx}`} title={p.name} category={p.categoryID} price={p.price} />
        ))}
      </div>
    </div>
  )
}

export default ProductsPanel
