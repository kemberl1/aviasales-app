import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSearchId, fetchTickets } from '../store/ticketsSlice'
import TicketList from '../components/TicketList/TicketList'

const TicketListContainer = ({ visibleTickets }) => {
  const dispatch = useDispatch()
  const { tickets, status, error } = useSelector((state) => state.tickets)

  useEffect(() => {
    const loadTickets = async () => {
      try {
        const resultAction = await dispatch(fetchSearchId()).unwrap()
        await dispatch(fetchTickets(resultAction)).unwrap()
      } catch (error) {
        console.error('Failed to load tickets:', error.message)
        throw new Error('Failed to load tickets')
      }
    }
    loadTickets()
  }, [dispatch])

  if (status === 'pending' && tickets.length === 0) {
    return <div>Loading...</div>
  }

  if (status === 'rejected' && tickets.length === 0) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      {status === 'pending' && <div>Loading...</div>}
      {tickets.length > 0 && <TicketList tickets={tickets.slice(0, visibleTickets)} />}
    </div>
  )
}

export default TicketListContainer
