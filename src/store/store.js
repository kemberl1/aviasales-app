import { configureStore } from '@reduxjs/toolkit'

import filterSlice from './filtersSlice'
import ticketsSlice from './ticketsSlice'
import tabsSlice from './tabsSlice'

const store = configureStore({
  reducer: {
    filters: filterSlice,
    tickets: ticketsSlice,
    tabs: tabsSlice,
  },
})

export default store
