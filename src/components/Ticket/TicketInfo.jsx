import ticket from './Ticket.module.scss'

export default function TicketInfo({ segment }) {
  return (
    <div className="ticket-info">
      {segment.map((ticketInfo, index) => (
        <div key={index} className="ticket-info__segment">
          <div key={index} className="ticket-info__route">
            <span className={ticket.title}>
              {ticketInfo.origin} - {ticketInfo.destination}
            </span>
            <span className={ticket.description}>
              {ticketInfo.departureTime} - {ticketInfo.arrivalTime}
            </span>
          </div>
          <div className="ticket-info__duration">
            <span className={ticket.title}>В пути</span>
            <span className={ticket.description}>{ticketInfo.duration}</span>
          </div>
          <div className="ticket-info__stops">
            <span className={ticket.title}>{ticketInfo.stops} ПЕРЕСАДКИ</span>
            <span className={ticket.description}>{ticketInfo.stopLocations.join(', ')}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
