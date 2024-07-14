import { useState } from 'react'

import Header from '../Header/Header'
import FilterContainer from '../../containers/FilterContainer'
import TicketListContainer from '../../containers/TicketListContainer'
import TabsContainer from '../../containers/TabsContainer'

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
          <TabsContainer />
          <TicketListContainer visibleTickets={visibleTickets} loadMoreTickets={loadMoreTickets} />
        </section>
      </main>
    </div>
  )
}
