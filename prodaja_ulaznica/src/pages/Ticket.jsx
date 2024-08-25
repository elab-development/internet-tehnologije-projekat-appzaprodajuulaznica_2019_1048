import React from "react";

const Ticket = ({ ticket }) => {
    return (
        <div class="card">
            <div class="card-header">Featured</div>
            <div class="card-body">
                <h5 class="card-title">{ticket.title}</h5>
                <p class="card-text">
                    {ticket.artist.about}
                </p>
                <a href="#" class="btn btn-primary">
                    Book Ticket
                </a>
            </div>
            <div class="card-footer text-muted">{ticket.artist.genre}</div>
        </div>
    );
};

export default Ticket;
