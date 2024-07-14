import PropTypes from 'prop-types'
import { format, parseISO, addMinutes } from 'date-fns'
import { v4 as uuidv4 } from 'uuid' // Import uuidv4 from uuid package

import ticket from './Ticket.module.scss'

const formatDuration = (duration) => {
  const hours = Math.floor(duration / 60)
  const minutes = duration % 60
  return `${hours}ч ${minutes}м`
}

const formatDateRange = (date, duration) => {
  const startDate = parseISO(date)
  const endDate = addMinutes(startDate, duration)
  return `${format(startDate, 'HH:mm')} – ${format(endDate, 'HH:mm')}`
}

const getStopsLabel = (stopsCount) => {
  if (stopsCount === 0) return 'ПЕРЕСАДОК'
  if (stopsCount === 1) return 'ПЕРЕСАДКА'
  return 'ПЕРЕСАДКИ'
}

function TicketInfo({ segments }) {
  return (
    <div className="ticket-info">
      {segments.map((segment) => {
        const segmentKey = uuidv4() // Generate unique key using uuidv4
        return (
          <div key={segmentKey} className="ticket-info__segment">
            <div className="ticket-info__route">
              <span className={ticket.title}>
                {segment.origin} - {segment.destination}
              </span>
              <span className={ticket.description}>{formatDateRange(segment.date, segment.duration)}</span>
            </div>
            <div className="ticket-info__duration">
              <span className={ticket.title}>В пути</span>
              <span className={ticket.description}>{formatDuration(segment.duration)}</span>
            </div>
            <div className="ticket-info__stops">
              <span className={ticket.title}>
                {segment.stops.length} {getStopsLabel(segment.stops.length)}
              </span>
              <span className={ticket.description}>{segment.stops.join(', ')}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

TicketInfo.propTypes = {
  segments: PropTypes.arrayOf(
    PropTypes.shape({
      origin: PropTypes.string.isRequired,
      destination: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
      stops: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
}

export default TicketInfo
