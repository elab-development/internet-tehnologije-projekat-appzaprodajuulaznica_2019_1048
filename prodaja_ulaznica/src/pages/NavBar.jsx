import React from "react";
import axios from "axios";

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
        <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar
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
                            <a className="nav-link active" aria-current="page" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Your Concerts
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Gallery
                            </a>
                        </li>
                        {window.sessionStorage.getItem("auth_token") == null ? (
                            <li className="nav-item">
                                <a className="nav-link" href="/login" onClick={logoutUser}>
                                    Login
                                </a>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Logout
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
