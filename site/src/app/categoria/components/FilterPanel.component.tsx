"use client"

import {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  HTMLInputTypeAttribute,
} from "react"
import { useToggleDimensions } from "@/app/hooks/useToggleDimensions.hook"
import Icon from "@/app/components/Icon/Icon.component"
import { strParseOut } from "../../utils/functions.utils"
import FilterHeader from "./FilterHeader.component"
import { FilterSwitchers } from "../types/page.types"

const brandsMock = ["beltran", "mustela", "eco-origen", "nua"]

type Fields = {
  brand: string[]
  discount: boolean
  price: number
}

const FilterPanel = () => {
  const [filterSwitchers, setFilterSwitchers] = useState<FilterSwitchers>({
    marca: true,
    ofertas: true,
    precio: true,
  })

  const [formValues, setFormValues] = useState<Fields>({
    price: 9999,
    brand: [],
    discount: false,
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    fieldType?: HTMLInputTypeAttribute,
  ) => {
    if (fieldType === "checkbox") {
      const newVal = {
        [e.target.name]: e.target.checked,
      }
      setFormValues((prev) => ({ ...prev, ...newVal }))
    } else {
      const newVal = {
        [e.target.name]: e.target.value,
      }
      setFormValues((prev) => ({ ...prev, ...newVal }))
    }
  }

  const handleBrandToggle = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setFormValues((prev) => ({
        ...prev,
        brand: [...prev.brand, e.target.name],
      }))
    } else {
      setFormValues((prev) => {
        const remainingBrands = prev.brand.filter((b) => b !== e.target.name)
        return { ...prev, brand: remainingBrands }
      })
    }
  }

  useEffect(() => {
    console.log("updated form values: ", formValues)
  }, [formValues])

  const marcaRef = useRef<HTMLDivElement>(null)
  useToggleDimensions(marcaRef, filterSwitchers["marca"])

  const ofertasRef = useRef<HTMLDivElement>(null)
  useToggleDimensions(ofertasRef, filterSwitchers["ofertas"])

  const precioRef = useRef<HTMLDivElement>(null)
  useToggleDimensions(precioRef, filterSwitchers["precio"])

  return (
    <aside className="flex w-1/4 flex-col gap-9">
      <h2 className="text-2xl font-bold">Filtros</h2>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-4">
          <FilterHeader
            filterId="marca"
            filterSwitchers={filterSwitchers}
            setFilterSwitchers={setFilterSwitchers}
          />
          <div
            ref={marcaRef}
            className={
              "flex flex-col gap-4 overflow-hidden transition-all duration-200 ease-in-out"
            }
          >
            <div className="relative flex items-center">
              <input
                type="text"
                className="h-10 w-full rounded border border-gray-300"
              />
              <div className="absolute end-0">
                <Icon iconType="search" />
              </div>
            </div>
            {brandsMock.map((brand, idx) => (
              <div
                key={`brand-filter-${idx}`}
                className="flex items-center gap-2"
              >
                <input
                  type="checkbox"
                  name={brand}
                  onChange={handleBrandToggle}
                />
                <label htmlFor={brand}>{strParseOut(brand)}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-7 border-t-2 border-solid pt-7">
          <FilterHeader
            filterId="ofertas"
            filterSwitchers={filterSwitchers}
            setFilterSwitchers={setFilterSwitchers}
          />
          <div
            ref={ofertasRef}
            className={
              "flex items-center gap-2 overflow-hidden transition-all duration-200 ease-in-out"
            }
          >
            <input
              type="checkbox"
              name="discount"
              onChange={(e) => {
                handleChange(e, "checkbox")
              }}
            />
            <label htmlFor="discount">Descuento</label>
          </div>
        </div>

        <div className="border-t-2 border-solid pt-7">
          <FilterHeader
            filterId="precio"
            filterSwitchers={filterSwitchers}
            setFilterSwitchers={setFilterSwitchers}
          />
          <div
            ref={precioRef}
            className={
              "overflow-hidden transition-all duration-200 ease-in-out"
            }
          >
            <div className="flex gap-2">
              <input
                id="price-1"
                type="radio"
                name="price"
                value={2500}
                onChange={handleChange}
              />
              <label htmlFor="price-1">Hasta $2500</label>
            </div>
            <div className="flex gap-2">
              <input
                id="price-2"
                type="radio"
                name="price"
                value={5000}
                onChange={handleChange}
              />
              <label htmlFor="price-2">Hasta $5000</label>
            </div>
            <div className="flex gap-2">
              <input
                id="price-3"
                type="radio"
                name="price"
                value={7500}
                onChange={handleChange}
              />
              <label htmlFor="price-3">Hasta $7500</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default FilterPanel
