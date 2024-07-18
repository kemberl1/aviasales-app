/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialTabsState = {
  cheapest: false,
  fastest: false,
  optimal: true,
}

const tabsSlice = createSlice({
  name: 'tabs',
  initialState: initialTabsState,
  reducers: {
    toggleCheapest(state) {
      state.cheapest = !state.cheapest
      if (state.cheapest) {
        state.fastest = false
        state.optimal = false
      }
    },
    toggleFastest(state) {
      state.fastest = !state.fastest
      if (state.fastest) {
        state.cheapest = false
        state.optimal = false
      }
    },
    toggleOptimal(state) {
      state.optimal = !state.optimal
      if (state.optimal) {
        state.cheapest = false
        state.fastest = false
      }
    },
  },
})

export const { toggleCheapest, toggleFastest, toggleOptimal } = tabsSlice.actions
export default tabsSlice.reducer
