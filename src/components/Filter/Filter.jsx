import FilterHeader from './FilterHeader'
import FilterOption from './FilterOptions'

function Filter({filters, onToggle}) {
  return (
    <aside className="filter">
      <FilterHeader title="Количество пересадок" />
      <ul className='filter__list'>
        <FilterOption id="all" label="Все" checked={filters.all}  onToggle={onToggle}/>
        <FilterOption id="none" label="Без пересадок" checked={filters.none}  onToggle={onToggle} />
        <FilterOption id="one" label="1 пересадка" checked={filters.one}  onToggle={onToggle}/>
        <FilterOption id="two" label="2 пересадки" checked={filters.two}  onToggle={onToggle}/>
        <FilterOption id="three" label="3 пересадки" checked={filters.three}  onToggle={onToggle}/>
      </ul>
    </aside>
  )
}

export default Filter
