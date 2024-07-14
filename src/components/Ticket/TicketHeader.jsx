import PropTypes from 'prop-types'

export default function TicketHeader({ price, carrier }) {
  const logoUrl = `https://pics.avs.io/1110/360/${carrier}.png`

  return (
    <header className="ticket-header">
      <div className="ticket-header__price">{price} P</div>
      <img className="ticket-header__logo" src={logoUrl} alt={carrier} />
    </header>
  )
}

TicketHeader.propTypes = {
  price: PropTypes.number.isRequired,
  carrier: PropTypes.string.isRequired,
}
