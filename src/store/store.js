import { configureStore } from '@reduxjs/toolkit'

import filterSlice from './filtersSlice'

const store = configureStore({
  reducer: {
    filters: filterSlice,
  },
})

export default store
