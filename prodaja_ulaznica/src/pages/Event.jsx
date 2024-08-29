const Event = ({ event, buyTicket }) => {
    return (
        <div
            className="card"
            style={{
                marginTop: 5 + "rem",

                margin: "auto",
                width: 30 + "rem",
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
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text" style={{
                    marginBottom: 2 + "rem",
                    textAlign: "center",
                }}>{event.artist.about}</p>
                <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={() => buyTicket("standard", event.id)}
                    style={{
                        paddingLeft: 2.5 + "rem",
                        paddingRight: 2.5 + "rem",
                        backgroundColor: "green",

                        textAlign: "center",
                    }}
                >
                    Buy Standard
                </button>
                <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={() => buyTicket("vip", event.id)}
                    style={{
                        paddingLeft: 2.5 + "rem",
                        paddingRight: 2.5 + "rem",
                        backgroundColor: "red",
                        marginLeft: 2 + "rem",
                        textAlign: "center",
                    }}
                >
                    Buy VIP
                </button>
            </div>
            <div
                className="card-footer "
                style={{
                    backgroundColor: "white",
                    color: "black",
                    textAlign: "center",
                }}
            >
                {event.artist.genre}
            </div>
        </div>
    );
};

export default Event;
