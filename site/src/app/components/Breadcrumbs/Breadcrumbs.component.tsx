"use client"

import Icon from "../Icon/Icon.component"
import { useRouter, usePathname } from "next/navigation"
import { strForDisplay } from "@/app/utils/strFormatting.util"

const Breadcrumbs = () => {
  const router = useRouter()
  const params = usePathname()
  const pages = params.split("/")
  const crumbs = pages.slice(2, pages.length - 1).reverse()
  console.log("crumbs: ", crumbs)

  return (
    <div className="flex">
      <span
        className="flex cursor-pointer items-center gap-1"
        onClick={() => router.back()}
      >
        <Icon iconType="chev" style="-rotate-90 h-5" />
        <button>Página de inicio</button>
      </span>
      {crumbs.map((c, idx) => (
        <span
          key={`crumb-${idx}`}
          className="flex cursor-pointer items-center gap-1"
          onClick={() => window.history.go((idx + 1) * -1)}
        >
          <Icon iconType="chev" style="-rotate-90 h-5" />
          <button>{strForDisplay(c)}</button>
        </span>
      ))}
    </div>
  )
}

export default Breadcrumbs
