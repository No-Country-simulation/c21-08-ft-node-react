"use client"
import Cart from "../components/Cart/Cart.component"
import CardAddress from "./components/CardAddress.component"
import Delivery from "./components/Delivery.component"
import { useEffect, useState } from "react"
import { CardAddressProp } from "./types/cardAddressProp.types"
const Checkout = () => {
  const addresses = [
    {
      address: "Dirección registrada 1",
      number: 123123,
      cp: 123123,
      floor: 1,
      dpto: 2,
    },
    {
      address: "Dirección registrada 2",
      number: 456456,
      cp: 123123,
      floor: 1,
      dpto: 2,
    },
    { address: "laPampa", number: 456456, cp: 123123, floor: 1, dpto: 2 },
  ]
  const [delivery, setDelivery] = useState(false)
  const [address, setAddress] = useState<CardAddressProp["address"] | null>(
    null,
  )
  console.log("address: ", address)
  const [selectedAddress, setSelectedAddress] = useState(0)

  useEffect(() => {
    console.log(selectedAddress)
  }, [selectedAddress])

  return (
    <div className="w-max-[1000px] mx-auto mt-24 bg-red-50">
      <h1 className="block">Confirma tus datos</h1>
      <div className="flex w-full sm:flex-col">
        <form className="bg-red block h-full w-1/2 p-2">
          <h2>informacion personal</h2>
          <div
            id="GridImputs"
            className="grid grid-cols-2 gap-2 sm:grid-cols-1" /* xl, lg, md, sm, xs */
          >
            <div>
              <label htmlFor="name" className="block">
                Nombre
              </label>
              <input type="text" name="name" id="name" placeholder="Nombre" />
            </div>
            <div>
              <label htmlFor="last-name" className="block">
                Apellido
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                placeholder="Apellido"
              />
            </div>
            <div>
              <label htmlFor="email" className="block">
                Email
              </label>
              <input type="text" name="email" id="email" placeholder="Email" />
            </div>
            <div>
              <label htmlFor="phone" className="block">
                Telefono
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Telefono"
              />
            </div>
          </div>
          <Delivery onSelect={setDelivery}></Delivery>
          {delivery ? (
            <div id="Datos de entrega">
              <h2>Datos de entrega</h2>
              {addresses
                ? addresses.map((address, index) => (
                    <CardAddress
                      key={index}
                      address={address}
                      checked={index === selectedAddress}
                      setAddress={setAddress}
                      setSelectedAddress={setSelectedAddress}
                      index={index}
                    ></CardAddress>
                  ))
                : null}
              <label>Cargar una nueva Direccion</label>
            </div>
          ) : null}
        </form>
        <Cart
          isCartVisible={true}
          changeCartVisibility={() => {}}
          style={"static"}
        ></Cart>
      </div>
    </div>
  )
}

export default Checkout
