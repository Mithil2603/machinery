import React from "react";
import video from "./images/Machinery_video.mp4";
import "./styles/NavLandingPage.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div className="container-fluid">
        <div className="container full-height d-flex align-items-center flex-wrap gap-1">
          <div className="left-side">
            <h1>FIND CREELS THAT BENEFITS YOUR BUSINESS</h1>
            <p>
              Browse through our diverse range of meticulously maufactured
              creels, designed to bring out your individuality and cater to your
              sense of style.
            </p>
            <button className="mybtn2">
              <Link to="/">Shop Now</Link>
            </button>
            <div className="d-flex mt-5">
              <div>
                <div className="text-center numbers">50+</div>
                <p>Satisfied Businesses</p>
              </div>
              <hr />
              <div>
                <div className="text-center numbers">A Legacy</div>
                <p>Since 2012</p>
              </div>
            </div>
          </div>
          <div className="right-side">
            <video className="p-2" src={video} controls autoplay></video>
          </div>
        </div>
      </div>
    </>
  );
}
