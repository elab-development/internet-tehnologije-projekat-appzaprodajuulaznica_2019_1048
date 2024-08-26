import React from 'react'
import MyTicket from './MyTicket'

const MyTicketsPage = ({ tickets }) => {
    return (
        <div>
            <h1>Your tickets:</h1>

            {tickets == null ? <></> : tickets.map((ticket) => (

                < MyTicket ticket={ticket} key={ticket.id} />



            ))}

        </div>
    )
}

export default MyTicketsPage