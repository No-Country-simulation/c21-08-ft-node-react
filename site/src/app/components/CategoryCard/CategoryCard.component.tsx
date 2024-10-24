import Link from "next/link"

type CategoryCardProps = {
  name: string
  link: string
  icon: React.ReactNode
}

const CategoryCard = ({ name, icon, link }: CategoryCardProps) => {
  return (
    <Link
      className="flex w-full flex-col items-center justify-center gap-3 rounded-2xl border-[1px] border-solid border-gray1000 bg-gray100 py-8 md:gap-1 md:py-6"
      href={link}
    >
      {icon}
      <h2 className="w-[60%] text-center text-2xl font-semibold text-gray1000 lg:text-xl md:w-[80%] md:text-lg sm:text-base xs:w-[90%]">
        {name}
      </h2>
    </Link>
  )
}

export default CategoryCard
