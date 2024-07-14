import PropTypes from 'prop-types'

import Ticket from '../Ticket/Ticket'

function TicketList({ tickets }) {
  const generateKey = () => `${Math.random().toString(36)}`

  return (
    <div className="ticket-list">
      {tickets.map((ticket) => (
        <Ticket key={generateKey()} ticket={ticket} />
      ))}
    </div>
  )
}

TicketList.propTypes = {
  tickets: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
}

export default TicketList
