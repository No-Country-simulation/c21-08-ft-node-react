export const FormDelivery = () => {
  return (
    <div className="my-1 flex gap-4">
      <div id="Formulario-direcciones">
        <label className="block" htmlFor="city">
          Ciudad
        </label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Ciudad"
          className="mb-2 max-w-[120px] rounded-md border border-gray1000 p-1"
          required
        />
        <label className="block" htmlFor="address">
          Direccion
        </label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Direccion"
          className="max-w-[120px] rounded-md border border-gray1000 p-1"
          required
        ></input>
      </div>
      <div className="">
        <div className="mb-2 block">
          <label htmlFor="cp" className="block">
            Codigo postal
          </label>
          <input
            type="number"
            name="cp"
            id="cp"
            className="max-w-[80px] rounded-md border border-gray1000 p-1"
            placeholder="C.P."
            required
          />
        </div>
        <div className="flex gap-2">
          <div className="">
            <label htmlFor="number" className="block">
              Numero
            </label>
            <input
              type="number"
              id="number"
              name="number"
              className="max-w-[50px] rounded-md border border-gray1000 p-1"
              placeholder="Numero"
              required
            />
          </div>
          <div className="">
            <label htmlFor="floor" className="block">
              Piso
            </label>
            <input
              type="number"
              name="floor"
              id="floor"
              className="max-w-[50px] rounded-md border border-gray1000 p-1"
              placeholder="Piso"
            />
          </div>
          <div className="">
            <label htmlFor="dpto" className="block">
              Depto
            </label>
            <input
              type="text"
              name="dpto"
              id="dpto"
              className="max-w-[50px] rounded-md border border-gray1000 p-1"
              placeholder="Dpto."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormDelivery
