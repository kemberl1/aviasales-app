import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  all: true,
  none: true,
  one: true,
  two: true,
  three: true,
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleFilter(state, action) {
      const { filter } = action.payload
      let newState = { ...state }

      if (filter === 'all') {
        const allState = !newState.all
        newState = {
          all: allState,
          none: allState,
          one: allState,
          two: allState,
          three: allState,
        }
      } else {
        newState[filter] = !newState[filter]
        if (newState[filter] === false && newState.all) {
          newState.all = false
        } else if (newState.none && newState.one && newState.two && newState.three && newState.all) {
          newState.all = true
        }
      }
      return newState
    },
  },
})

export const { toggleFilter } = filtersSlice.actions
export default filtersSlice.reducer
