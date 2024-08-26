import React from "react";
import Ticket from "./Ticket";


const TicketsPage = ({ tickets, bookTicket, cancelTicket }) => {
    return (
        <div>
            <h1 style={{
                textAlign: "center",
                marginTop: 5 + "rem",
            }}>Choose event and book your ticket!</h1>
            {tickets == null ? <></> : tickets.map((ticket) => (
                <Ticket ticket={ticket} key={ticket.id} bookTicket={bookTicket} cancelTicket={cancelTicket} />
            ))}
        </div>
    );
};

export default TicketsPage;
