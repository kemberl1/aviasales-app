import PropTypes from 'prop-types'

import Button from '../Button/Button'

function Tabs({ cheapest, fastest, optimal, onCheapestClick, onFastestClick, onOptimalClick }) {
  return (
    <nav className="tabs">
      <Button description="Самый дешевый" onClick={onCheapestClick} active={cheapest} />
      <Button description="Самый быстрый" onClick={onFastestClick} active={fastest} />
      <Button description="Оптимальный" onClick={onOptimalClick} active={optimal} />
    </nav>
  )
}

Tabs.propTypes = {
  cheapest: PropTypes.bool.isRequired,
  fastest: PropTypes.bool.isRequired,
  optimal: PropTypes.bool.isRequired,
  onCheapestClick: PropTypes.func.isRequired,
  onFastestClick: PropTypes.func.isRequired,
  onOptimalClick: PropTypes.func.isRequired,
}

export default Tabs
