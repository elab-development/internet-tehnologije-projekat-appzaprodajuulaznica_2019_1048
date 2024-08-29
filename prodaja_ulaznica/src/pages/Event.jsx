const Event = ({ event, buyTicket }) => {
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
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text">{event.artist.about}</p>
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
