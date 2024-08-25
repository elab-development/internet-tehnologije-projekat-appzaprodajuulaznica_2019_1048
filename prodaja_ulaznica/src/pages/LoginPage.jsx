import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './css/LoginPage.css';

function LoginPage(addToken) {

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    function handleInput(e) {
        let inputData = userData;
        inputData[e.target.name] = e.target.value;
        console.log(inputData);
        setUserData(inputData);
    }

    let navigate = useNavigate();
    function loginUser(e) {
        e.preventDefault();
        axios
            .post("api/login", userData)
            .then((response) => {
                console.log(response.data);

                if (response.data.success === true) {
                    window.sessionStorage.setItem(
                        "auth_token",
                        response.data.access_token
                    );
                }
                addToken(response.data.access_token);
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <section className="h-100 gradient-form" style={{ backgroundColor: "#282c34" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="card-body p-md-5 mx-md-4">
                                        <div className="text-center">
                                            <img
                                                src="https://media.istockphoto.com/id/1146102903/vector/cinema-tickets-icon-signs-and-symbols-can-be-used-for-web-logo-mobile-app-ui-ux.jpg?s=612x612&w=0&k=20&c=Zu7YLfsqjvlASa5VPGKLswpfLCNaD9kHjZkr5kn30ZA="
                                                style={{ width: 185 }}
                                                alt="logo"
                                            />
                                            <h4 className="mt-1 mb-5 pb-1">Welcome to TicketPass</h4>
                                        </div>
                                        <form onSubmit={loginUser}>
                                            <p>Please login to your account</p>
                                            <div data-mdb-input-init="" className="form-outline mb-4">
                                                <input
                                                    type="email"
                                                    id="form2Example11"
                                                    className="form-control"
                                                    placeholder="Enter email address"
                                                    name="email"
                                                    onInput={handleInput}
                                                />
                                                <label className="form-label" htmlFor="form2Example11">
                                                    Email
                                                </label>
                                            </div>
                                            <div data-mdb-input-init="" className="form-outline mb-4">
                                                <input
                                                    type="password"
                                                    id="form2Example22"
                                                    className="form-control"
                                                    placeholder="Enter password"
                                                    name="password"
                                                    onInput={handleInput}
                                                />
                                                <label className="form-label" htmlFor="form2Example22">
                                                    Password
                                                </label>
                                            </div>
                                            <div className="text-center pt-1 mb-5 pb-1">
                                                <button
                                                    data-mdb-button-init=""
                                                    data-mdb-ripple-init=""
                                                    className="btn btn-outline-danger"
                                                    type="submit"
                                                >
                                                    Log in
                                                </button>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center pb-4">
                                                <p className="mb-0 me-2">Don't have an account?</p>
                                                <a href="/register" className="link-danger">
                                                    <button
                                                        type="button"
                                                        data-mdb-button-init=""
                                                        data-mdb-ripple-init=""
                                                        className="btn btn-outline-danger"
                                                    >
                                                        Register
                                                    </button>
                                                </a>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">

                                        <h4 className="mb-4">We are more than just a company</h4>
                                        <p className="small mb-0">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default LoginPage