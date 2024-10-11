export const getIntAndDecSplited = (price: number) => {
    const [int, dec = '00'] = String(price).split('.')

    const formatedDec = dec.padEnd(2, '0') // Asegura que siempre tenga 2 dígitos.

    return { int, dec: formatedDec }
}