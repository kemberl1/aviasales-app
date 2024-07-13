import Ticket from '../Ticket/Ticket'

import ticketsDataTest from './ticketsDataTest'

const ticketsData = ticketsDataTest

function TicketList(props) {
  const { data } = props
  return (
    <div className="tickets">
      {ticketsData.map((dataItem, index) => (
        <Ticket key={index} ticketData={dataItem} />
      ))}
    </div>
  )
}

export default TicketList
