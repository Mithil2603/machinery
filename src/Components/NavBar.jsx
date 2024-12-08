import React from 'react'
import Search_icon from "./images/search_icon.svg";
import "./styles/NavLandingPage.css";
import { Link } from "react-router-dom";

export default function NavBar() {
    const closeOffer = function () {
        const offerDiv = document.querySelector('.first-offer');
        if (offerDiv) {
            offerDiv.classList.add('hidden');
        } else {
            console.error("Element with class 'first-offer' not found.");
        }
    };
  return (
    <>
        <div className="first-offer d-flex align-items-center gap-3">
        <p>Sign up and get 20% off on your first order. <Link to="/signup">Sign Up Now</Link></p>
        <p className="close" onClick={closeOffer}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-x"
                viewBox="0 0 16 16">
                <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
        </p>
    </div>
    <nav className="navbar navbar-expand-lg bg-body-nav shadow w-100">
        <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <span className="navbar-brand main-title">RADHE ENTERPRISE</span>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Our Products
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/products">Creels</Link></li>
                        </ul>
                    </li>
                </ul>
                <div className="d-flex gap-3 align-items-center flex-wrap">
                    <form className="d-flex search-bar" role="search">
                        <button className="btn btn-light" type="submit"><img src={Search_icon} alt='search_icon'/></button>
                        <input className="form-control1 me-2 transparent" type="search" placeholder="Search Products"
                            aria-label="Search" />
                    </form>
                    {/* <button className="mybtn"><Link to="/">Sign-in</Link></button> */}
                    <Link className="btn" to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                            className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path fill-rule="evenodd"
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}
