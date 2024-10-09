import Image, { ImageProps } from 'next/image'

type CategoryCardProps = {
  name: string
} & ImageProps


const CategoryCard = ({ name, alt, src, width, height }: CategoryCardProps) => {
  return (
    <div className='relative w-full'>
      <Image 
        alt={ alt } 
        src={ src || '/images/product-placeholder.webp' } 
        width={width} 
        height={height}
        className='-z-50 border'
      />
      <h2 className='absolute text-center left-20 bottom-10'>{ name }</h2>
    </div>
  )
}

export default CategoryCard;
