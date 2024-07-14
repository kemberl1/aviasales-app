import { useEffect, useMemo } from 'react'
import { Empty } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchSearchId, fetchTickets } from '../store/ticketsSlice'
import TicketList from '../components/TicketList/TicketList'
import Loader from '../components/Loader/Loader'
import ErrorIndicator from '../components/ErrorIndicator/ErrorIndicator'

import LoadMoreButtonContainer from './LoadMoreButtonContainer'


const selectTickets = (state) => state.tickets
const selectTabs = (state) => state.tabs
const selectFilters = (state) => state.filters

function TicketListContainer({ visibleTickets, loadMoreTickets }) {
  const dispatch = useDispatch()
  const { tickets, status, error } = useSelector(selectTickets)
  const { cheapest, fastest } = useSelector(selectTabs)
  const filters = useSelector(selectFilters)

  useEffect(() => {
    const loadTickets = async () => {
      try {
        const resultAction = await dispatch(fetchSearchId()).unwrap()
        await dispatch(fetchTickets(resultAction)).unwrap()
      } catch (err) {
        throw new Error('Failed to load tickets')
      }
    }
    loadTickets()
  }, [dispatch])

  const filteredTickets = useMemo(() => {
    let filtered = tickets.slice()

    if (!filters.all) {
      filtered = filtered.filter((ticket) => {
        const stopsCount = ticket.segments.reduce((acc, segment) => acc + segment.stops.length, 0)
        if (filters.none && stopsCount === 0) return true
        if (filters.one && stopsCount === 1) return true
        if (filters.two && stopsCount === 2) return true
        if (filters.three && stopsCount === 3) return true
        return false
      })
    }

    if (cheapest) {
      filtered.sort((a, b) => a.price - b.price)
    } else if (fastest) {
      filtered.sort((a, b) => {
        const durationA = a.segments.reduce((acc, segment) => acc + segment.duration, 0)
        const durationB = b.segments.reduce((acc, segment) => acc + segment.duration, 0)
        return durationA - durationB
      })
    }

    return filtered
  }, [tickets, filters, cheapest, fastest])

  const filtersSelected = Object.values(filters).some((filter) => filter)

  if (status === 'pending' && tickets.length === 0) {
    return <Loader />
  }

  if (status === 'rejected' && tickets.length === 0) {
    return <ErrorIndicator message={error.message} />
  }

  if (status === 'fulfilled' && filteredTickets.length === 0) {
    return <Empty description="Рейсов, подходящих под заданные фильтры, не найдено" />
  }

  if (!filtersSelected) {
    return <div>Задайте параметры поиска билетов по фильтрам</div>
  }

  const visibleFilteredTickets = filteredTickets.slice(0, visibleTickets)

  return (
    <>
      {status === 'pending' && <Loader />}
      {filteredTickets.length > 0 && (
        <>
          <TicketList tickets={visibleFilteredTickets} />
          <LoadMoreButtonContainer
            loadMoreTickets={loadMoreTickets}
            hasMoreTickets={visibleFilteredTickets.length < filteredTickets.length}
          />
        </>
      )}
    </>
  )
}

TicketListContainer.propTypes = {
  visibleTickets: PropTypes.number.isRequired,
  loadMoreTickets: PropTypes.func.isRequired,
}

export default TicketListContainer
