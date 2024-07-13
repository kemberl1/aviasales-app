function FilterOption({ id, label, checked, onToggle }) {
  return (
    <li className="filter__option">
      <input className="filter__checkbox" type="checkbox" checked={checked} id={id} onChange={() => onToggle(id)}/>
      <label className="filter__description" htmlFor={id}>{label}</label>
    </li>
  )
}

export default FilterOption
