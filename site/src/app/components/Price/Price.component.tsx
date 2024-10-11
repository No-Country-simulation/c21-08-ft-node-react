import { PriceProps } from "./types/PriceProps.type"
import { getIntAndDecSplited } from "./utils/getIntAndDecSplited.util"

const Price = ({price, size} : PriceProps) => {

    const {int, dec} = getIntAndDecSplited(price)

    return (
        <p>
            <span className={`${ size === "L" ? 'text-[32px]' : 'text-[20px]' }`}>${int}</span>
            <span className={`${ size === "L" ? 'text-[16px]' : 'text-[12px]' } `}>{dec}</span>
        </p>
    ) 
}

export default Price