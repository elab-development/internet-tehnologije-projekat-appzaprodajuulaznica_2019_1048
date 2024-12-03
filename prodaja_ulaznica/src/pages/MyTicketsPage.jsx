import React from 'react'
import MyTicket from './MyTicket'
import { useState } from "react";

const MyTicketsPage = ({ tickets }) => {

    return (

        <div>
            <h1 style={{
                textAlign: "center",
                marginTop: 5 + "rem",
            }}>Your tickets:</h1>
            {tickets == null ? <></> : tickets.map((ticket) => (

                < MyTicket ticket={ticket} key={ticket.id} />


            ))}
        </div>
    )

}

export default MyTicketsPage