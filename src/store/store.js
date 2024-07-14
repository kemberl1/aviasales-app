import { configureStore } from '@reduxjs/toolkit'

import filterSlice from './filtersSlice'
import ticketsSlice from './ticketsSlice'

const store = configureStore({
  reducer: {
    filters: filterSlice,
		tickets: ticketsSlice,
  },
})

export default store
