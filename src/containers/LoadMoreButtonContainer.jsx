import PropTypes from 'prop-types'

import LoadMoreButton from '../components/LoadMoreButton/LoadMoreButton'

function LoadMoreButtonContainer({ loadMoreTickets, hasMoreTickets }) {
  return hasMoreTickets && <LoadMoreButton loadMoreTickets={loadMoreTickets} />
}

LoadMoreButtonContainer.propTypes = {
  loadMoreTickets: PropTypes.func.isRequired,
  hasMoreTickets: PropTypes.bool.isRequired,
}

export default LoadMoreButtonContainer
