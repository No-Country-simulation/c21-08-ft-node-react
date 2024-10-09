import Image, { ImageProps } from 'next/image'

type CategoryCardProps = {
  name: string
} & ImageProps


const CategoryCard = ({ name, alt, src, width, height }: CategoryCardProps) => {
  return (
    <div className='w-full h-44'>
      <Image 
        alt={ alt } 
        src={ src || '/images/product-placeholder.webp' } 
        width={width} 
        height={height}
        className='-z-50'
      />
      <h2 className='-mt-20 text-center'>{ name }</h2>
    </div>
  )
}

export default CategoryCard;
