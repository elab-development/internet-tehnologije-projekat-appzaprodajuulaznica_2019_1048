import React from "react";
import Ticket from "./Ticket";


const TicketsPage = ({ tickets, bookTicket }) => {
    return (
        <div>
            <h1>Choose event and book your ticket!</h1>
            {tickets == null ? <></> : tickets.map((ticket) => (
                <Ticket ticket={ticket} key={ticket.id} bookTicket={bookTicket} />
            ))}
        </div>
    );
};

export default TicketsPage;
