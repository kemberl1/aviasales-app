function FilterOption({ id, label }) {
  return (
    <li className="filter__option">
      <input className="filter__checkbox" type="checkbox" id={id} />
      <label className="filter__description" htmlFor={id}>{label}</label>
    </li>
  )
}

export default FilterOption
