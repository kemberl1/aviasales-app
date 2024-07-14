import Button from '../Button/Button'

export default function LoadMoreButton({ loadMoreTickets }) {
  return (
    <section className="button-show--more">
      <Button description="Показать еще 5 билетов!" onClick={loadMoreTickets} />
    </section>
  )
}
