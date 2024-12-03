import React from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";

const NavBar = () => {
    function logoutUser() {
        axios
            .post("api/logout", undefined, {
                headers: {
                    Authorization: "Bearer" + window.sessionStorage.getItem("auth_token"),
                },
            })
            .then((response) => {
                console.log(JSON.stringify(response.data));
                window.sessionStorage.setItem("auth_token", null);
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return (
        <div>
            <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        TicketPass
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarDark"
                        aria-controls="navbarDark"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse show" id="navbarDark">
                        <ul className="navbar-nav me-auto mb-2 mb-xl-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/events">
                                    Events
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/mytickets">
                                    My Tickets
                                </a>
                            </li>
                            {window.sessionStorage.getItem("auth_token") == null ? (
                                <li className="nav-item">
                                    <a className="nav-link" href="/login">
                                        Login
                                    </a>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <a className="nav-link" href="/login" onClick={logoutUser}>
                                        Logout
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
};

export default NavBar;
