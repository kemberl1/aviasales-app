export const fetchSearchId = async () => {
  const response = await fetch('https://aviasales-test-api.kata.academy/search')
  if (!response.ok) {
    throw new Error('Failed to fetch search ID')
  }
  const data = await response.json()
  return data.searchId
}

export const fetchTicketsApi = async (searchId) => {
  const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
  if (!response.ok) {
    throw new Error('Failed to fetch tickets')
  }
  const data = await response.json()
  return data
}
