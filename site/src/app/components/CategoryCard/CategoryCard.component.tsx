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
      <div className="h-[200px] overflow-hidden rounded-[24px] shadow-xl md:rounded-[0px]">
        <Image
          alt={alt}
          src={src || "/images/product-placeholder.webp"}
          layout="responsive"
          width={width}
          height={height}
        />
      </div>
      <h2 className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform px-5 text-center text-3xl font-bold text-white md:static md:left-0 md:top-0 md:translate-x-0 md:translate-y-0 md:transform-none md:px-0 md:text-sm md:font-medium">
        {name}
      </h2>
    </Link>
  )
}

export default CategoryCard
