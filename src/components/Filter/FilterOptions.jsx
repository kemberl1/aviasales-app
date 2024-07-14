import PropTypes from 'prop-types'

function FilterOption({ id, label, checked, onToggle }) {
  return (
    <li className="filter__option">
      <input className="filter__checkbox" type="checkbox" checked={checked} id={id} onChange={() => onToggle(id)} />
      <label className="filter__description" htmlFor={id}>
        {label}
      </label>
    </li>
  )
}

FilterOption.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default FilterOption
