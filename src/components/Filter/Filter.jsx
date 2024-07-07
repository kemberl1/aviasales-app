import FilterHeader from './FilterHeader'
import FilterOption from './FilterOptions'

function Filter() {
  return (
    <aside className="filter">
      <FilterHeader title="Количество пересадок" />
      <ul className='filter__list'>
        <FilterOption id="all" label="Все" />
        <FilterOption id="none" label="Без пересадок" />
        <FilterOption id="one" label="1 пересадка" />
        <FilterOption id="two" label="2 пересадки" />
        <FilterOption id="three" label="3 пересадки" />
      </ul>
    </aside>
  )
}

export default Filter
