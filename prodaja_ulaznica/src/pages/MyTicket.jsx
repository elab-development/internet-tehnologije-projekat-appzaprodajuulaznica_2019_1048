const MyTicket = ({ ticket, userID }) => {


    return (

        <div>

            <div className="card border-dark text-primary text-dark" style={{
                margin: "auto",
                marginTop: 3 + "rem",

                width: 25 + "rem",

            }}>
                <div className="card-header border-dark text-dark">{ticket.type}</div>
                <div className="card-body">
                    <h5 className="card-title">{ticket.event.title}</h5>
                    <p className="card-text">{ticket.event.artist.about}</p>
                </div>
            </div>


        </div>
    );

};

export default MyTicket;
