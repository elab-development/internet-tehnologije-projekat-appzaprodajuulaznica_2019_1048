import React from 'react'
import MyTicket from './MyTicket'

const MyTicketsPage = ({ tickets, userID }) => {
    return (
        <div>
            <h1 style={{
                textAlign: "center",
                marginTop: 5 + "rem",
            }}>Your tickets:</h1>
            {tickets == null ? <></> : tickets.map((ticket) => (

                < MyTicket ticket={ticket} key={ticket.id} userID={userID} />

            ))}
        </div>
    )
}

export default MyTicketsPage