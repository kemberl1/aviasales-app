import { useSelector, useDispatch } from 'react-redux'

import Tabs from '../components/Tabs/Tabs'
import { toggleCheapest, toggleFastest, toggleOptimal } from '../store/tabsSlice'

const selectTabs = (state) => state.tabs

function TabsContainer() {
  const dispatch = useDispatch()
  const { cheapest, fastest, optimal } = useSelector(selectTabs)

  const handleCheapestClick = () => {
    dispatch(toggleCheapest())
  }

  const handleFastestClick = () => {
    dispatch(toggleFastest())
  }

  const handleOptimalClick = () => {
    dispatch(toggleOptimal())
  }

  return (
    <Tabs
      cheapest={cheapest}
      fastest={fastest}
      optimal={optimal}
      onCheapestClick={handleCheapestClick}
      onFastestClick={handleFastestClick}
      onOptimalClick={handleOptimalClick}
    />
  )
}

export default TabsContainer
