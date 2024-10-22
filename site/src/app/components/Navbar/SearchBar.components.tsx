import Icon from "../Icon/Icon.component"

const SearchBar = () => {
  return (
    <div className="flex items-center">
      <input
        className="py-1 pl-1"
        type="text"
        name=""
        id=""
        placeholder="Busca en Kramer..."
      />
      <button className="bg-white py-1 pr-1">
        <Icon iconType="search" />
      </button>
    </div>
  )
}

export default SearchBar
