import { Product } from "@/app/types/Product.type";
import Card from "@/app/components/Card/Card.component";

type ProductsPanel = {
  products: Product[]
}

const ProductsPanel = ({ products }: ProductsPanel) => {
  return (
    <div className="w-full">
      <h3>Bebidas sin alcohol</h3>
      <span>Mostrando 16 productos</span>
      <div>...</div>
      <div className="w-full inline-grid grid-cols-3 justify-between">
        {
          products.map(p => (
            <Card title={ p.name } category={ p.categoryID } price={ p.price } />
          ))
        }
      </div>
    </div>
  )
}

export default ProductsPanel;
