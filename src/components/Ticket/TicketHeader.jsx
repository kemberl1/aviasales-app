

export default function TicketHeader({ price, airline }) {
  return (
    <header className="ticket-header">
      <div className="ticket-header__price">{price} P</div>
      <img className="ticket-header__logo" src={airline.logo} alt={airline.name} />
    </header>
  )
}
