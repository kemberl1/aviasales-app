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
  const { cheapest, fastest, optimal } = useSelector(selectTabs)
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

  const passesFilter = (stopsCountOutbound, stopsCountInbound, filter) => {
    if (filter === 'none')
      return (
        (stopsCountOutbound === 0 && stopsCountInbound <= 0) || (stopsCountOutbound <= 0 && stopsCountInbound === 0)
      )
    if (filter === 'one')
      return (
        (stopsCountOutbound === 1 && stopsCountInbound <= 1) || (stopsCountOutbound <= 1 && stopsCountInbound === 1)
      )
    if (filter === 'two')
      return (
        (stopsCountOutbound === 2 && stopsCountInbound <= 2) || (stopsCountOutbound <= 2 && stopsCountInbound === 2)
      )
    if (filter === 'three')
      return (
        (stopsCountOutbound === 3 && stopsCountInbound <= 3) || (stopsCountOutbound <= 3 && stopsCountInbound === 3)
      )
    return false
  }

  const filteredTickets = useMemo(() => {
    let filtered = tickets.slice()

    if (!filters.all) {
      filtered = filtered.filter((ticket) => {
        const stopsCountOutbound = ticket.segments[0].stops.length
        const stopsCountInbound = ticket.segments[1].stops.length

        const filterConditions = [
          filters.none && passesFilter(stopsCountOutbound, stopsCountInbound, 'none'),
          filters.one && passesFilter(stopsCountOutbound, stopsCountInbound, 'one'),
          filters.two && passesFilter(stopsCountOutbound, stopsCountInbound, 'two'),
          filters.three && passesFilter(stopsCountOutbound, stopsCountInbound, 'three'),
        ]

        return filterConditions.some((condition) => condition)
      })
    }

    return filtered
  }, [tickets, filters])

  const sortedTickets = useMemo(() => {
    const sorted = filteredTickets.slice()

    if (cheapest) {
      sorted.sort((a, b) => a.price - b.price)
    } else if (fastest) {
      sorted.sort((a, b) => {
        const durationA = a.segments.reduce((acc, segment) => acc + segment.duration, 0)
        const durationB = b.segments.reduce((acc, segment) => acc + segment.duration, 0)
        return durationA - durationB
      })
    } else if (optimal) {
      sorted.sort((a, b) => {
        const durationA = a.segments.reduce((acc, segment) => acc + segment.duration, 0)
        const durationB = b.segments.reduce((acc, segment) => acc + segment.duration, 0)
        const priceDiff = a.price - b.price
        return priceDiff !== 0 ? priceDiff : durationA - durationB
      })
    }

    return sorted
  }, [filteredTickets, cheapest, fastest, optimal])

  const filtersSelected = Object.values(filters).some((filter) => filter)

  if (status === 'pending' && tickets.length === 0) {
    return <Loader />
  }

  if (status === 'rejected' && tickets.length === 0) {
    return <ErrorIndicator message={error.message} />
  }

  if (status === 'fulfilled' && sortedTickets.length === 0) {
    return <Empty description="Рейсов, подходящих под заданные фильтры, не найдено" />
  }

  if (!filtersSelected) {
    return <div>Задайте параметры поиска билетов по фильтрам</div>
  }

  const visibleSortedTickets = sortedTickets.slice(0, visibleTickets)

  return (
    <>
      {status === 'pending' && <Loader />}
      {sortedTickets.length > 0 && (
        <>
          <TicketList tickets={visibleSortedTickets} />
          <LoadMoreButtonContainer
            loadMoreTickets={loadMoreTickets}
            hasMoreTickets={visibleSortedTickets.length < sortedTickets.length}
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
