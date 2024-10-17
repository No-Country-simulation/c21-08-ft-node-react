import Image, { ImageProps } from "next/image"
import Link from "next/link"

type CategoryCardProps = {
  name: string
  link: string
} & ImageProps

const CategoryCard = ({
  name,
  alt,
  src,
  width,
  height,
  link,
}: CategoryCardProps) => {
  return (
    <Link className="relative" href={link}>
      <Image
        alt={alt}
        src={src || "/images/product-placeholder.webp"}
        width={width}
        height={height}
        className="z-50 border border-solid border-gray1000"
      />
      <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-xl font-bold md:static md:left-0 md:top-0 md:translate-x-0 md:translate-y-0 md:transform-none md:px-0 md:text-sm md:font-medium">
        {name}
      </h2>
    </Link>
  )
}

export default CategoryCard
