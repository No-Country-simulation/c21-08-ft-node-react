import { CardProps } from './types/CardProps.type';
import Icon from "../Icon/Icon.component";
import Image from "next/image";

//cambiar la prop imgURl cuando tengamos acceso a los enpoint (quitar el ? a la propiedad)
const Card = ({ title, category, price, promotion }: CardProps) => {
    const discountedPrice = promotion? price-(price*promotion) : null
   const discount = promotion? promotion * 100:null
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
      <h4 className='ms-1'>{category}</h4>
      
      {!promotion ? (<div className="flex justify-between my-2 mx-1">
        <span>{`$${price}`}</span>
        </div>):(<div className="flex justify-between items-center my-2 mx-1">
          <div className='flex-col'>
          <div className="line-through text-xs">${price}</div>
          <div className='font-bold text-base'>${discountedPrice}</div>
          </div>
          <div className='flex items-center bg-gray300 ps-2 rounded-xl font-bold'>{`%${discount}`}<Icon style={"h-4 rotate-90"} iconType='rightArrow'></Icon></div>
          </div>)}
      <button className="w-40 mx-auto bg-gray1000 text-white rounded-full font-bold py-1 px-2">
        Agregar al carrito
      </button>
    </div>
  );
};

export default Card;
