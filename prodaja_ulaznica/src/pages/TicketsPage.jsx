import React from "react";

const TicketsPage = () => {
    let tickets;
    return (
        <div>
            <h1>Choose event and book your ticket!</h1>
            {tickets.map((ticket) => (
                <Ticket ticket={ticket} />
            ))}
        </div>
    );
};

export default TicketsPage;