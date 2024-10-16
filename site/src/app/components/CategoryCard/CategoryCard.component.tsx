import Image, { ImageProps } from "next/image"

type CategoryCardProps = {
  name: string
} & ImageProps

const CategoryCard = ({ name, alt, src, width, height }: CategoryCardProps) => {
  return (
    <div className="relative">
      <Image
        alt={alt}
        src={src || "/images/product-placeholder.webp"}
        width={width}
        height={height}
        className="z-50 border border-solid border-gray1000"
      />
      <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-xl font-bold md:static md:text-sm md:font-medium md:translate-x-0 md:translate-y-0 md:left-0 md:top-0 md:transform-none md:px-0">
        {name}
      </h2>
    </div>
  )
}

export default CategoryCard
