import Image, { ImageProps } from "next/image"

type CategoryCardProps = {
  name: string
} & ImageProps

const CategoryCard = ({ name, alt, src, width, height }: CategoryCardProps) => {
  return (
    <div className="relative w-full">
      <Image
        alt={alt}
        src={src || "/images/product-placeholder.webp"}
        width={width}
        height={height}
        className="-z-50 border border-solid border-gray1000 opacity-10"
      />
      <h2 className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform px-4 text-center text-2xl font-bold">
        {name}
      </h2>
    </div>
  )
}

export default CategoryCard
