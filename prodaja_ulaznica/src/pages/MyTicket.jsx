import React from 'react'

const MyTicket = ({ myTicket }) => {
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
                <h5 className="card-title">{myTicket.title}</h5>
                <p className="card-text">{myTicket.artist.about}</p>
            </div>
            <div
                className="card-footer "
                style={{
                    backgroundColor: "white",
                    color: "black",
                    textAlign: "center",
                }}
            >
                {myTicket.artist.genre}
            </div>
        </div >
    )
}

export default MyTicket