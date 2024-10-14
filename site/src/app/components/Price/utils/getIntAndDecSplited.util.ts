export const getIntAndDecSplited = (price: number) => {
  const [int, dec = "00"] = String(price).split(".")

  const formatedDec = dec.padEnd(2, "0").slice(0, dec.length - 1)

  return { int, dec: formatedDec }
}
