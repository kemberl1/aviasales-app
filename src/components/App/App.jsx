import Tabs from '../Tabs/Tabs'
import Header from '../Header/Header'
import Filter from '../Filter/Filter'
import TicketList from '../TicketList/TicketList'
import Footer from '../Footer/Footer'

export default function App() {
  return (
    <div className="aviasales-app">
      <Header />
      <main className="main-content">
        <Filter />
        <section className="tickets-section">
          <Tabs />
          <TicketList />
          <Footer />
        </section>
      </main>
    </div>
  )
}
