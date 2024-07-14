import { useSelector } from 'react-redux'
import LoadMoreButton from '../components/LoadMoreButton/LoadMoreButton'

function LoadMoreButtonContainer({ loadMoreTickets }) {
  const tickets = useSelector((state) => state.tickets.tickets)

  return tickets.length > 0 && <LoadMoreButton loadMoreTickets={loadMoreTickets} />
}

export default LoadMoreButtonContainer
