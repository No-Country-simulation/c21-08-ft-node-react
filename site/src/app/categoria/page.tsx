import FilterPanel from './components/FilterPanel.component'
import ProductsPanel from './components/ProductsPanel.component'
// import Link from 'next/link'
import { products } from '@/mocks/products.mock'

// const router = useRouter();

export default function CategoriaPage() {
  return (
    <div className='w-full pt-24'>
      <div className='mx-auto flex max-w-[1000px] justify-between gap-20 pt-20'>
        <FilterPanel />
        <ProductsPanel products={products} />
      </div>
    </div>
  )
}
