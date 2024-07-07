import TicketHeader from './TicketHeader'
import TicketInfo from './TicketInfo'

function Ticket({ ticketData }) {
  return (
    <div className="ticket">
      <TicketHeader price={ticketData.price} airline={ticketData.airline}/>
      <TicketInfo segment={ticketData.segments}/>
    </div>
  )
}

export default Ticket
