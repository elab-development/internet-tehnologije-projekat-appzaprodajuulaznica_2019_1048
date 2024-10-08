import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NavBar from "./pages/NavBar";
import EventsPage from "./pages/EventsPage";
import MyTicketsPage from "./pages/MyTicketsPage";
import HomePage from "./pages/HomePage";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [events, setEvents] = useState(null);
  const [tickets, setTickets] = useState(null);
  //const [userID, setUserID] = useState(null);


  /*const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/hello";
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL);
      result.json().then(json => {
        console.log(json);
      })
      //setProducts(response.data.products);
    }
    fetchData();
  }, [])*/

  const [ticketData, setTicketData] = useState({
    type: "",
    event_id: "",
    //user_id: "",
  });

  useEffect(() => {

    if (events == null) {
      axios.get("api/events").then((response) => {
        console.log(response.data);
        setEvents(response.data.events);
      });
    }
    if (tickets == null) {
      axios.get("api/tickets").then((response) => {
        console.log(response.data);
        setTickets(response.data.tickets);
      });
    }

  }, [tickets, events]);




  function buyTicket(ticketType, eventID) {
    setTicketData([{ type: ticketType, event_id: eventID }]);
    console.log(ticketData);
    axios({
      method: "post",
      url: "api/tickets",
      data: {
        type: ticketType,
        event_id: eventID,
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

  function deleteEvent(eventID) {
    axios({
      method: "delete",
      url: "api/events/" + eventID,
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

  /*const bookEvent = (id) => {
    events.map((event) => {
      const eventId = id;
      if (event.id === id) {
        if (event.booked === 0) {
          event.booked = 1;

          console.log("Ticket for the event is bought! ");
          console.log(event);
          console.log(events);
          axios({
            method: "put",
            url: "api/events/" + eventId,
            data: {
              title: event.title,
              description: event.description,
              artist_id: event.artist.id,
              venue_id: event.venue.id,
              booked: event.booked,
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
  };*/

  /*const cancelEvent = (id) => {
    events.map((event) => {
      const eventId = id;
      if (event.id === id) {
        if (event.booked === 1) {
          event.booked = 0;
          setEventData(event);
          console.log("Event is canceled!");
          console.log(event);
          console.log(events);
          axios({
            method: "put",
            url: "api/events/" + eventId,
            data: {
              title: event.title,
              description: event.description,
              artist_id: event.artist.id,
              venue_id: event.venue.id,
              booked: event.booked,
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
  };*/

  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/"
          element={
            <div>
              <NavBar />
              <HomePage />
            </div>
          }
        />

        <Route
          path="events"
          element={
            <div>
              <NavBar />
              <EventsPage events={events} buyTicket={buyTicket} deleteEvent={deleteEvent} />
            </div>
          }
        />
        <Route
          path="mytickets"
          element={
            <div>
              <NavBar />
              <MyTicketsPage tickets={tickets} />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
