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
import { FilterPanelProps } from "../types/page.types"

const priceOptions = [1000, 1500, 3000]
const MAX_PRICE = 99999

const FilterPanel = ({
  setFormValues,
  formValues,
  currentCategory,
  source,
}: FilterPanelProps) => {
  const [brands, setBrands] = useState<string[]>([])
  const [checkedPrice, setCheckedPrice] = useState(formValues.price)
  const [filterSwitchers, setFilterSwitchers] = useState<FilterSwitchers>({
    marca: true,
    ofertas: true,
    precio: true,
  })

  useEffect(() => {
    const sourceBrands = source.map((p) => p.brand)
    const uniqueBrands = [...new Set(sourceBrands)]
    setBrands([...uniqueBrands])
  }, [source])

  useEffect(() => {
    console.log("brands: ", brands)
  }, [brands])

  useEffect(() => {
    setCheckedPrice(MAX_PRICE)
  }, [currentCategory])

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

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({ ...prev, price: Number(e.target.value) }))
    setCheckedPrice(Number(e.target.value))
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
          {/* this needs conditional rendering because we need to know when 'brand' array is populated */}
          {/* otherwise if the 'brands' array is empty the JSX corresponding to the brands will not be rendered*/}
          {/* the first time, therefore the useToggleDimensions hook will get the height of this part as if there*/}
          {/* were not brand rendered effectively have a lesser height than it should have */}
          {brands.length ? (
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
              {brands.map((brand, idx) => (
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
          ) : (
            ""
          )}
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
            {priceOptions.map((op, idx) => (
              <div key={`price-option-${idx}`} className="flex gap-2">
                <input
                  id="price-3"
                  type="radio"
                  name="price"
                  checked={checkedPrice === op}
                  value={op}
                  onChange={handlePriceChange}
                />
                <label htmlFor="price-3">Hasta ${op}</label>
              </div>
            ))}
            <div className="flex gap-2">
              <input
                id="price-3"
                type="radio"
                name="price"
                checked={checkedPrice === MAX_PRICE}
                value={MAX_PRICE}
                onChange={handlePriceChange}
              />
              <label htmlFor="price-3">Todo</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default FilterPanel
