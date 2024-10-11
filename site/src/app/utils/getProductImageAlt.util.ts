export const getProductImageAlt = (productTitle: string):string =>{
    return `Imagen de ${productTitle}`
}

export const strParseOut = (str: string) => {
  return str.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};
