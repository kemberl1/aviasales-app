import PropTypes from 'prop-types'

export default function Button({ description, onClick, active = false }) {
  return (
    <button onClick={onClick} className={`button ${active ? 'button--active' : ''}`} type="button">
      {description}
    </button>
  )
}

Button.propTypes = {
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
