import Link from "next/link"
import Image from "next/image"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center md:hidden">
      <Image
        alt={"logo"}
        src={"/images/logo-final-color.png"}
        width={184.1}
        height={41.741}
      />
    </Link>
  )
}

export default Logo
