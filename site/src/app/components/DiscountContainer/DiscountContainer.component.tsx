'use client';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { Product } from '../../types/Product.type';
import { useEffect, useState } from 'react';
import { CartContextProvider } from '../../contexts/cart.context';
import Card from '../Card/Card.component';
import { products as productsMocks } from '../../../mocks/products.mock';
//consultar como sabemos los productos por descuento? por que si es un endponit especifico que nos trae
//los productos con descuento aplicado modificar los types para decirle de que tipo es el useEffect, un array
//de productos que tienen promocion

//cambiar el console.log por loggers

const DiscountContainer = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 2,
      spacing: 15,
    },
  });
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchDiscounts = async () => {
      setLoading(true);
      setError(null);
      try {
        await new Promise<void>(resolve =>
          setTimeout(() => {
            const fakeData: Product[] = productsMocks;
            setProducts(fakeData);
            resolve();
          }, 2000),
        );
      } catch (err) {
        console.error('error al cargar los descuentos:', err);
        setError('error al cargar los productos');
      } finally {
        setLoading(false);
      }
    };
    fetchDiscounts();
  }, []);
  if (error) return <p>{error}</p>;
  return (
    <CartContextProvider>
      <div ref={ref} className='keen-slider'>
        {loading ? (
          <p>cargando</p>
        ) : (
          products.map((product, index) => (
            <Card
              styleSlider={`keen-slider__slide number-slice${index + 1}`}
              key={product.productID}
              product={product}
            ></Card>
          ))
        )}
      </div>
    </CartContextProvider>
  );
};

export default DiscountContainer;
