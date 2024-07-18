/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { fetchSearchId as apiFetchSearchId, fetchTicketsApi } from '../API/fetchTickets'

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    status: null,
    error: null,
    errorCount: 0,
    fetchError: null,
    searchId: null,
  },
  reducers: {
    appendTickets: (state, action) =>
      produce(state, (draftState) => {
        if (!Array.isArray(draftState.tickets)) {
          draftState.tickets = []
        }
        draftState.tickets = draftState.tickets.concat(action.payload)
      }),
    incrementErrorCount: (state) =>
      produce(state, (draftState) => {
        draftState.errorCount += 1
      }),
    resetErrorCount: (state) =>
      produce(state, (draftState) => {
        draftState.errorCount = 0
      }),
    setFetchError: (state, action) =>
      produce(state, (draftState) => {
        draftState.fetchError = action.payload
      }),
    setSearchId: (state, action) =>
      produce(state, (draftState) => {
        draftState.searchId = action.payload
      }),
    fetchTicketsPending: (state) =>
      produce(state, (draftState) => {
        draftState.status = 'pending'
        draftState.error = null
        draftState.fetchError = null
      }),
    fetchTicketsSuccess: (state) =>
      produce(state, (draftState) => {
        draftState.status = 'resolved'
      }),
    fetchTicketsFailed: (state, action) =>
      produce(state, (draftState) => {
        draftState.status = 'rejected'
        draftState.error = action.payload
      }),
  },
})

export const {
  appendTickets,
  incrementErrorCount,
  resetErrorCount,
  setFetchError,
  setSearchId,
  fetchTicketsPending,
  fetchTicketsSuccess,
  fetchTicketsFailed,
} = ticketsSlice.actions

export const fetchTickets = (searchId) => async (dispatch, getState) => {
  dispatch(resetErrorCount())
  const fetchTicketsRecursive = async () => {
    if (getState().tickets.errorCount >= 4) {
      dispatch(setFetchError('Не удалось получить информацию о всех билетах'))
      dispatch(fetchTicketsFailed('Failed to fetch all tickets'))
      return
    }

    try {
      const data = await fetchTicketsApi(searchId)
      if (data.tickets.length > 0) {
        dispatch(appendTickets(data.tickets))
      }
      if (!data.stop) {
        fetchTicketsRecursive()
      } else {
        dispatch(fetchTicketsSuccess())
      }
    } catch (error) {
      dispatch(incrementErrorCount())
      fetchTicketsRecursive()
    }
  }

  fetchTicketsRecursive()
}

export const fetchSearchId = () => async (dispatch) => {
  dispatch(fetchTicketsPending())
  try {
    const searchId = await apiFetchSearchId()
    dispatch(setSearchId(searchId))
    dispatch(fetchTickets(searchId))
  } catch (error) {
    dispatch(fetchTicketsFailed(error.message))
  }
}

export default ticketsSlice.reducer
