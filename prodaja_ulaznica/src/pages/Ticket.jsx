const Ticket = ({ ticket, bookTicket, cancelTicket }) => {
    return (
        <div
            className="card"
            style={{
                marginTop: 5 + "rem",
                marginBottom: 5 + "rem",
                marginLeft: 30 + "rem",
                marginRight: 30 + "rem",
                backgroundColor: "black",
                color: "white",
            }}
        >
            <div
                className="card-body"
                style={{
                    marginTop: 2 + "rem",
                    marginBottom: 2 + "rem",
                    backgroundColor: "black",
                    textAlign: "center",
                }}
            >
                <h5 className="card-title">{ticket.title}</h5>
                <p className="card-text">{ticket.artist.about}</p>
                {ticket.booked === 0 ? (
                    <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        onClick={() => bookTicket(ticket.id)}
                        style={{
                            paddingLeft: 2.5 + "rem",
                            paddingRight: 2.5 + "rem",
                            backgroundColor: "green",
                            textAlign: "center",
                        }}
                    >
                        Book
                    </button>
                ) : (
                    <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        onClick={() => cancelTicket(ticket.id)}
                        style={{
                            paddingLeft: 2.5 + "rem",
                            paddingRight: 2.5 + "rem",
                            backgroundColor: "red",
                            textAlign: "center",
                        }}
                    >
                        Booked
                    </button>
                )}
            </div>
            <div
                className="card-footer "
                style={{
                    backgroundColor: "white",
                    color: "black",
                    textAlign: "center",
                }}
            >
                {ticket.artist.genre}
            </div>
        </div>
    );
};

export default Ticket;
