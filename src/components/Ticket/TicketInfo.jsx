import React from 'react'
import { format, parseISO, addMinutes } from 'date-fns'
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

export default function TicketInfo({ segment }) {
  return (
    <div className="ticket-info">
      {segment.map((ticketInfo, index) => (
        <div key={index} className="ticket-info__segment">
          <div className="ticket-info__route">
            <span className={ticket.title}>
              {ticketInfo.origin} - {ticketInfo.destination}
            </span>
            <span className={ticket.description}>{formatDateRange(ticketInfo.date, ticketInfo.duration)}</span>
          </div>
          <div className="ticket-info__duration">
            <span className={ticket.title}>В пути</span>
            <span className={ticket.description}>{formatDuration(ticketInfo.duration)}</span>
          </div>
          <div className="ticket-info__stops">
            <span className={ticket.title}>{ticketInfo.stops.length} ПЕРЕСАДКИ</span>
            <span className={ticket.description}>{ticketInfo.stops.join(', ')}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
