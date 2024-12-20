import React from "react";
import "./styles/SignUp.css";
// import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <div className="container mt-5">
        <h1 className="bold text-center mb-5">Welcome from Radhe Enterprise!</h1>
        <div className="container">

        <form className="">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn bg-dark text-light">
            Submit
          </button>
        </form>
        </div>
      </div>
    </>
  );
}
