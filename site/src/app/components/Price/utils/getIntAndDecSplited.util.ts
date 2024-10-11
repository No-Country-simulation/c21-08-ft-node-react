export const getIntAndDecSplited = (price: number) => {
    const [int, dec] = String(price).split('.')

    return {int, dec: dec ? dec : '00'}
}