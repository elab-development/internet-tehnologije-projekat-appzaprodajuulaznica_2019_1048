import React from "react";

const Ticket = ({ ticket }) => {
    return (
        <div className="card">
            <div className="card-header">Featured</div>
            <div className="card-body">
                <h5 className="card-title">{ticket.title}</h5>
                <p className="card-text">
                    {ticket.artist.about}
                </p>
                <a href="#" className="btn btn-primary">
                    Book Ticket
                </a>
            </div>
            <div className="card-footer text-muted">{ticket.artist.genre}</div>
        </div>
    );
};

export default Ticket;
