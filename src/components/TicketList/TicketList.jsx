import Ticket from '../Ticket/Ticket'

import Logo from './Logo.png'

const ticketsData = [
  {
    price: '13 400',
    airline: {
      name: 'S7 Airlines',
      logo: Logo,
    },
    segments: [
      {
        origin: 'MOW',
        destination: 'NKT',
        departureTime: '10:45',
        arrivalTime: '08:00',
        duration: '21ч 15м',
        stops: 2,
        stopLocations: ['HKG', 'JNB'],
      },
      {
        origin: 'MOW',
        destination: 'NKT',
        departureTime: '11:20',
        arrivalTime: '00:50',
        duration: '13ч 30м',
        stops: 1,
        stopLocations: ['HKG'],
      },
    ],
  },
  {
    price: '13 400',
    airline: {
      name: 'S7 Airlines',
      logo: Logo,
    },
    segments: [
      {
        origin: 'MOW',
        destination: 'NKT',
        departureTime: '10:45',
        arrivalTime: '08:00',
        duration: '21ч 15м',
        stops: 2,
        stopLocations: ['HKG', 'JNB'],
      },
      {
        origin: 'MOW',
        destination: 'NKT',
        departureTime: '11:20',
        arrivalTime: '00:50',
        duration: '13ч 30м',
        stops: 1,
        stopLocations: ['HKG'],
      },
    ],
  },
	{
    price: '13 400',
    airline: {
      name: 'S7 Airlines',
      logo: Logo,
    },
    segments: [
      {
        origin: 'MOW',
        destination: 'NKT',
        departureTime: '10:45',
        arrivalTime: '08:00',
        duration: '21ч 15м',
        stops: 2,
        stopLocations: ['HKG', 'JNB'],
      },
      {
        origin: 'MOW',
        destination: 'NKT',
        departureTime: '11:20',
        arrivalTime: '00:50',
        duration: '13ч 30м',
        stops: 1,
        stopLocations: ['HKG'],
      },
    ],
  },
  {
    price: '13 400',
    airline: {
      name: 'S7 Airlines',
      logo: Logo,
    },
    segments: [
      {
        origin: 'MOW',
        destination: 'NKT',
        departureTime: '10:45',
        arrivalTime: '08:00',
        duration: '21ч 15м',
        stops: 2,
        stopLocations: ['HKG', 'JNB'],
      },
      {
        origin: 'MOW',
        destination: 'NKT',
        departureTime: '11:20',
        arrivalTime: '00:50',
        duration: '13ч 30м',
        stops: 1,
        stopLocations: ['HKG'],
      },
    ],
  },
	{
    price: '13 400',
    airline: {
      name: 'S7 Airlines',
      logo: Logo,
    },
    segments: [
      {
        origin: 'MOW',
        destination: 'NKT',
        departureTime: '10:45',
        arrivalTime: '08:00',
        duration: '21ч 15м',
        stops: 2,
        stopLocations: ['HKG', 'JNB'],
      },
      {
        origin: 'MOW',
        destination: 'NKT',
        departureTime: '11:20',
        arrivalTime: '00:50',
        duration: '13ч 30м',
        stops: 1,
        stopLocations: ['HKG'],
      },
    ],
  },
  {
    price: '13 400',
    airline: {
      name: 'S7 Airlines',
      logo: Logo,
    },
    segments: [
      {
        origin: 'MOW',
        destination: 'NKT',
        departureTime: '10:45',
        arrivalTime: '08:00',
        duration: '21ч 15м',
        stops: 2,
        stopLocations: ['HKG', 'JNB'],
      },
      {
        origin: 'MOW',
        destination: 'NKT',
        departureTime: '11:20',
        arrivalTime: '00:50',
        duration: '13ч 30м',
        stops: 1,
        stopLocations: ['HKG'],
      },
    ],
  },
]

function TicketList() {
  return (
    <div className="tickets">
      {ticketsData.map((ticketData, index) => (
        <Ticket key={index} ticketData={ticketData} />
      ))}
    </div>
  )
}

export default TicketList
