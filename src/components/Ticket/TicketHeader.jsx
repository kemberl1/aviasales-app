

export default function TicketHeader({ price, carrier }) {
	const logoUrl = `https://pics.avs.io/110/36/${carrier}.png`

  return (
    <header className="ticket-header">
      <div className="ticket-header__price">{price} P</div>
      <img className="ticket-header__logo" src={logoUrl} alt={carrier} />
    </header>
  )
}
