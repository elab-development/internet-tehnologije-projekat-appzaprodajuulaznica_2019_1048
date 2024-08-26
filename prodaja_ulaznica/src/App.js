import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NavBar from "./pages/NavBar";
import TicketsPage from "./pages/TicketsPage";
import MyTicketsPage from "./pages/MyTicketsPage";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [myTickets, setMyTickets] = useState();
  const [tickets, setTickets] = useState();
  const [ticketData, setTicketData] = useState({
    title: "",
    description: "",
    artist_id: "",
    venue_id: "",
    booked: 0,
  });

  useEffect(() => {
    if (tickets == null) {
      axios.get("api/tickets").then((response) => {
        console.log(response.data);
        setTickets(response.data.tickets);
      });
    }
  }, [tickets]);

  const bookTicket = (id) => {
    tickets.map((ticket) => {
      const ticketId = id;
      if (ticket.id === id) {
        if (ticket.booked === 0) {
          ticket.booked = 1;
          setTicketData(ticket);
          console.log("Ticket is booked!");
          console.log(ticket);

          axios({
            method: "put",
            url: "api/tickets/" + ticketId,
            data: {
              title: ticket.title,
              description: ticket.description,
              artist_id: ticket.artist_id,
              venue_id: ticket.venue_id,
              booked: ticket.booked,
            },
            headers: {
              "Content-Type": "application/json; charset=UTF-8",
              Authorization:
                "Bearer " + window.sessionStorage.getItem("auth_token"),
            },
          })
            .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    });
  };

  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<NavBar />}>
          <Route
            path="tickets"
            element={<TicketsPage tickets={tickets} bookTicket={bookTicket} />}
          />
          <Route
            path="mytickets"
            element={<MyTicketsPage myTickets={myTickets} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
