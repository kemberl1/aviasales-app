import PropTypes from 'prop-types'

import TicketHeader from './TicketHeader'
import TicketInfo from './TicketInfo'

function Ticket({ ticket }) {
  return (
    <div className="ticket">
      <TicketHeader price={ticket.price} carrier={ticket.carrier} />
      <TicketInfo segments={ticket.segments} />
    </div>
  )
}

Ticket.propTypes = {
  ticket: PropTypes.shape({
    price: PropTypes.number.isRequired,
    carrier: PropTypes.string.isRequired,
    segments: PropTypes.arrayOf(
      PropTypes.shape({
        origin: PropTypes.string.isRequired,
        destination: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        stops: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    ).isRequired,
  }).isRequired,
}

export default Ticket
