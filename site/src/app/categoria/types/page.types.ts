export type Filters = 'marca' | 'ofertas' | 'precio'

export type FilterSwitchers = {
  [key in Filters]: boolean
}
