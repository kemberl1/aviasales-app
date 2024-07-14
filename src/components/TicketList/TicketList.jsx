import Ticket from '../Ticket/Ticket'

function TicketList({ tickets }) {
  return (
    <div className="tickets">
      {tickets.map((ticket, index) => (
        <Ticket key={index} ticket={ticket} />
      ))}
    </div>
  )
}

export default TicketList
