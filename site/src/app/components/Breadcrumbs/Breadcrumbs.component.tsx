"use client"

import Icon from "../Icon/Icon.component"
import { useRouter } from "next/navigation"
import { strForDisplay } from "@/app/utils/strFormatting.util"
import { BreadcrumbsProps } from "./Breadcrumbs.types"
import { APP_BASE_URL } from "@/app/consts/api.consts"

const Breadcrumbs = ({ crumbs }: BreadcrumbsProps) => {
  const router = useRouter()
  return (
    <div className="flex">
      <span
        className="flex cursor-pointer items-center gap-1"
        onClick={() => router.push(APP_BASE_URL)}
      >
        <Icon iconType="chev" style="-rotate-90 h-5" />
        <button>Página de inicio</button>
      </span>
      {crumbs
        ? crumbs.map((c, idx) => (
            <span
              key={`crumb-${idx}`}
              className="flex cursor-pointer items-center gap-1"
              onClick={() => router.push(c.path)}
            >
              <Icon iconType="chev" style="-rotate-90 h-5" />
              <button>{strForDisplay(decodeURIComponent(c.label))}</button>
            </span>
          ))
        : ""}
    </div>
  )
}

export default Breadcrumbs
