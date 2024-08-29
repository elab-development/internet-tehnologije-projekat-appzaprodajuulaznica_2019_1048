import React from "react";
import Event from "./Event";

const EventsPage = ({ events, buyTicket }) => {
    return (
        <div>
            <h1 style={{
                textAlign: "center",
                marginTop: 5 + "rem",
            }}>Choose event and book your event!</h1>
            {events == null ? <></> : events.map((event) => (
                < Event event={event} key={event.id} buyTicket={buyTicket} />
            ))}
        </div>
    );
};

export default EventsPage;
