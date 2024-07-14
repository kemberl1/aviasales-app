import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {produce} from 'immer'

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
        const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
        if (!response.ok) {
          throw new Error('Failed to fetch tickets')
        }
        const data = await response.json()
        if (data.tickets.length > 0) {
          dispatch(appendTickets(data.tickets))
        }
        stop = data.stop
      }
    } catch (error) {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return rejectWithValue(error.message)
    }
  }
)

const setError = (state, action) =>
  produce(state, (draftState) => {
    draftState.status = 'rejected'
    draftState.error = action.payload
  })

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    status: null,
    error: null,
  },
  reducers: {
    appendTickets: (state, action) =>
      produce(state, (draftState) => {
        if (!Array.isArray(draftState.tickets)) {
          draftState.tickets = []
        }
        draftState.tickets = draftState.tickets.concat(action.payload)
      }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchId.pending, (state) =>
        produce(state, (draftState) => {
          draftState.status = 'pending'
          draftState.error = null
        })
      )
      .addCase(fetchSearchId.fulfilled, (state) =>
        produce(state, (draftState) => {
          draftState.status = 'resolved'
        })
      )
      .addCase(fetchSearchId.rejected, (state, action) => setError(state, action))
      .addCase(fetchTickets.pending, (state) =>
        produce(state, (draftState) => {
          draftState.status = 'pending'
          draftState.error = null
        })
      )
      .addCase(fetchTickets.fulfilled, (state) =>
        produce(state, (draftState) => {
          draftState.status = 'resolved'
        })
      )
      .addCase(fetchTickets.rejected, (state, action) => setError(state, action))
  },
})

export const { appendTickets } = ticketsSlice.actions

export default ticketsSlice.reducer
