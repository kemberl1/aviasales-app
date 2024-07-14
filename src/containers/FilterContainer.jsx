import { useSelector, useDispatch } from 'react-redux'

import Filter from '../components/Filter/Filter'
import { toggleFilter } from '../store/filtersSlice'

function FilterContainer() {
  const selectFilters = (state) => state.filters

  const filters = useSelector(selectFilters)
  const dispatch = useDispatch()

  const handleToggle = (id) => {
    dispatch(toggleFilter({ filter: id }))
  }
  return <Filter filters={filters} onToggle={handleToggle} />
}

export default FilterContainer
