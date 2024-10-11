import FilterPanel from "./components/FilterPanel.component"
import ProductsPanel from "./components/ProductsPanel.component"
import Link from "next/link"
// import { useRouter } from "next/navigation"
import { products } from "@/mocks/products.mock"

// const router = useRouter();

export default function CategoriaPage() {
  return (
    <div className="w-full pt-24">
      <div className="max-w-[1000px] flex mx-auto gap-20 pt-20">
        <FilterPanel />
        <div className="flex-1">
          {/* <button onClick={ () => router.back() }>Página de inicio</button> */}
          <ProductsPanel products={ products } />
        </div>

      </div>
    </div>
  )
}
