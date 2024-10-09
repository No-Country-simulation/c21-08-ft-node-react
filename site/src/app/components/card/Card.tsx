import { CardProps } from "./types/CardTypes";
import Icon from "../icon/Icon";

import Image from "next/image";
const Card = ({ title, category, price }: CardProps) => {
  // const discountedPrice = promotion? price*promotion : null
  //const discount = promotion? promotion * 10:null
  return (
    <div className="w-56 p-3 bg-gray200 flex flex-col justify-center rounded-lg">
      <Image
        className=""
        src={"/images/product-placeholder.webp"}
        alt={`imagen de ${title}`}
        width={480}
        height={480}
      />
      <div className="flex justify-between items-center  my-2 mx-1">
        <h3 className="font-bold text-lg">{title}</h3>
        <Icon iconType={"heart"}></Icon>
      </div>
      <h4>{category}</h4>
      <div className="flex justify-between my-2 mx-1">
        <span>{`$${price}`}</span>
        {/* <span>descuento</span> */}
      </div>
      <button className="w-40 mx-auto bg-gray1000 text-white rounded-full font-bold py-1 px-2">
        agregar al carrito
      </button>
    </div>
  );
};

export default Card;
