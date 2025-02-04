import PropTypes from 'prop-types'

import Button from '../Button/Button'

export default function LoadMoreButton({ loadMoreTickets }) {
  return (
    <section className="button-show--more">
      <Button description="Показать еще 5 билетов!" onClick={loadMoreTickets} />
    </section>
  )
}

LoadMoreButton.propTypes = {
  loadMoreTickets: PropTypes.func.isRequired,
}
