import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchSearchId = createAsyncThunk('tickets/fetchSearchId', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('https://aviasales-test-api.kata.academy/search')
    if (!response.ok) {
      throw new Error('Failed to fetch search ID')
    }
    const data = await response.json()
    return data.searchId
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const fetchTickets = createAsyncThunk(
  'tickets/fetchTickets',
  async (searchId, { rejectWithValue, dispatch }) => {
    try {
      let stop = false
      while (!stop) {
        try {
          const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
          if (!response.ok) {
            throw new Error('Failed to fetch tickets')
          }
          const data = await response.json()
          if (data.tickets.length > 0) {
            dispatch(appendTickets(data.tickets))
          }
          stop = data.stop
        } catch (error) {
          console.error('Error fetching tickets, retrying...', error)
          await new Promise((resolve) => setTimeout(resolve, 1000))
        }
      }
      return
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const setError = (state, action) => {
  state.status = 'rejected'
  state.error = action.payload
}

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    status: null,
    error: null,
  },
  reducers: {
    appendTickets: (state, action) => {
      if (!Array.isArray(state.tickets)) {
        state.tickets = []
      }
      state.tickets = state.tickets.concat(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchId.pending, (state) => {
        state.status = 'pending'
        state.error = null
      })
      .addCase(fetchSearchId.fulfilled, (state) => {
        state.status = 'resolved'
      })
      .addCase(fetchSearchId.rejected, setError)
      .addCase(fetchTickets.pending, (state) => {
        state.status = 'pending'
        state.error = null
      })
      .addCase(fetchTickets.fulfilled, (state) => {
        state.status = 'resolved'
      })
      .addCase(fetchTickets.rejected, setError)
  },
})

export const { appendTickets } = ticketsSlice.actions

export default ticketsSlice.reducer
