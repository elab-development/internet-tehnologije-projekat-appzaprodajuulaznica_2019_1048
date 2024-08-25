import React from "react";
import axios from "axios";
import Ticket from "./Ticket";
import { useState, useEffect } from "react";

const TicketsPage = () => {
    const [tickets, setTickets] = useState();

    useEffect(() => {
        if (tickets == null) {
            axios.get("api/tickets").then((response) => {
                console.log(response.data);
                setTickets(response.data.tickets);
            });
        }
    }, [tickets]);


    return (
        <div>
            <h1>Choose event and book your ticket!</h1>
            {tickets == null ? <></> : tickets.map((ticket) => (
                <Ticket ticket={ticket} key={ticket.id} />
            ))}
        </div>
    );
};

export default TicketsPage;
