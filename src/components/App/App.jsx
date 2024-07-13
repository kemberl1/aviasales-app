import Tabs from '../Tabs/Tabs'
import Header from '../Header/Header'
import TicketList from '../TicketList/TicketList'
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton'
import FilterContainer from '../../containers/FilterContainer'

export default function App() {
  return (
    <div className="aviasales-app">
      <Header />
      <main className="main-content">
        <FilterContainer />
        <section className="tickets-section">
          <Tabs />
          <TicketList />
          <LoadMoreButton />
        </section>
      </main>
    </div>
  )
}
