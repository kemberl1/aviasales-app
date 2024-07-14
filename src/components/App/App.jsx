import { useState } from 'react'
import Tabs from '../Tabs/Tabs'
import Header from '../Header/Header'
import FilterContainer from '../../containers/FilterContainer'
import TicketListContainer from '../../containers/TicketListContainer'
import LoadMoreButtonContainer from '../../containers/LoadMoreButtonContainer'

export default function App() {

  const [visibleTickets, setVisibleTickets] = useState(5)

  const loadMoreTickets = () => {
    setVisibleTickets((prev) => prev + 5)
  }

  return (
    <div className="aviasales-app">
      <Header />
      <main className="main-content">
        <FilterContainer />
        <section className="tickets-section">
          <Tabs />
          <TicketListContainer visibleTickets={visibleTickets}/>
          <LoadMoreButtonContainer loadMoreTickets={loadMoreTickets}/>
        </section>
      </main>
    </div>
  )
}
