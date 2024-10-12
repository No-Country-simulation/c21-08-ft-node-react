import { PriceProps } from "./types/PriceProps.type"
import { getIntAndDecSplited } from "./utils/getIntAndDecSplited.util"

const Price = ({price, size} : PriceProps) => {

    const {int, dec} = getIntAndDecSplited(price)

    return (
        <p className={`flex items-center ${ size === "L" ? 'leading-8' : 'leading-4'}`}>
            <span className={`${ size === "L" ? 'text-[32px]' : 'text-[20px]' }`}>${int}</span>
            <span className={`${ size === "L" ? 'text-[16px] leading-4' : 'text-[12px] leading-3' }`}>{dec}</span>
        </p>
    ) 
}

export default Price