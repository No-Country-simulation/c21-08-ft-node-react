"use client"

import Icon from "@/app/components/Icon/Icon.component";
import { strParseOut } from "@/app/utils/getProductImageAlt.util";

const brandsMock = [ 'beltran', 'mustela', 'eco-origen', 'nua' ];

const FilterPanel = () => {
  return (
    <aside className="flex flex-col gap-9">
      <h2 className="text-2xl font-bold">Filtros</h2>
      <div className="flex flex-col gap-9">

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Marca</h3>
          <div className="relative flex items-center">
            <input type="text" className="w-full h-10 rounded border border-gray-300" />
            <div className="absolute end-0">
              <Icon iconType="search"/>
            </div>
          </div>
          {
            brandsMock.map(brand => (
              <div className="flex gap-2 items-center">
                <input type="checkbox" />
                <label htmlFor="">{ strParseOut(brand) }</label>
              </div>
            ))
          }
        </div>
        
        <div className="border border-t-gray100">
          <h3 className="text-xl font-semibold">Ofertas</h3>
          <div className="flex gap-2 items-center">
            <input type="checkbox" />
            <label htmlFor="">Descuento</label>
          </div>
        </div>

        <div className="border border-t-gray100">
          <h3 className="text-xl font-semibold">Precio</h3>
          <div>
            <input type="range" id="price" name="price" min="0" max="100" step="20" />
          </div>
        </div>
      </div>
    </aside>
  )
};

export default FilterPanel;
