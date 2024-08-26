import React from 'react'
import MyTicket from './MyTicket'

const MyTicketsPage = ({ myTickets }) => {
    return (
        <div>
            <h1>Your tickets:</h1>
            {myTickets == null ? "You have no booked tickets." : myTickets.map((myTicket) => (
                <MyTicket myTicket={myTicket} key={myTicket.id} />
            ))}
        </div>
    )
}

export default MyTicketsPage