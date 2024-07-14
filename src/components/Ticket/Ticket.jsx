import TicketHeader from './TicketHeader'
import TicketInfo from './TicketInfo'

function Ticket({ ticket }) {
  return (
    <div className="ticket">
      <TicketHeader price={ticket.price} carrier={ticket.carrier}/>
      <TicketInfo segment={ticket.segments}/>
    </div>
  )
}

export default Ticket
