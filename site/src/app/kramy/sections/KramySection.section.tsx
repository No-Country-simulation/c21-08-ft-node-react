"use client"

import { strForDisplay } from "@/app/utils/strFormatting.util"
import { KramySectionProps } from "../kramy.types"

const KramySection = ({ response }: KramySectionProps) => {
  return response ? (
    <div className="flex flex-col gap-10">
      <div className="flex w-full gap-10 md:gap-5 sm:flex-col">
        <div className="flex flex-1 flex-col gap-5 rounded-xl border-[1px] border-solid border-gray400 p-5">
          <h3>Ingredientes:</h3>
          <div className="flex gap-10 md:gap-4">
            {response.allIngredients.map((row, rowIdx) => (
              <ul key={`ingredient-row-${rowIdx}`}>
                {row.map((i, ingIdx) => (
                  <li
                    key={`ingredient-${rowIdx}-{${ingIdx}}`}
                    className="ml-4 list-disc"
                  >
                    {strForDisplay(i)}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-5 rounded-xl border-[1px] border-solid border-gray400 p-5">
          <h3>Preparación:</h3>
          <ul>
            {response.instructions.map((i, idx) => (
              <li key={`ingredient-{${idx}}`} className="ml-4 list-decimal">
                {strForDisplay(i)}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h3>Te podemos ofrecer:</h3>
        <ul className="flex-1">
          {response.owned.map((i, idx) => (
            <li key={`ingredient-{${idx}}`} className="list-disc">
              {strForDisplay(i)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    ""
  )
}

export default KramySection
