import React, { useEffect, useState } from "react";
import axios from "axios";
import video from "./images/Machinery_video.mp4";
import "./styles/NavLandingPage.css";
import { Link } from "react-router-dom";
import star from "./images/star.svg";

export default function LandingPage() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch feedbacks from the server
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get("http://localhost:8000/feedbacks");
        setFeedbacks(response.data); // Populate feedbacks
        setLoading(false);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <img
        key={i}
        src={star}
        alt="star"
        className={`star ${i < rating ? "filled" : "empty"}`}
        style={{ width: "20px", height: "20px" }}
      />
    ));
  };

  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/send-inquiry", {
        email,
        inquiry,
      });
      setResponseMessage("Inquiry sent successfully!");
      setEmail("");
      setInquiry("");
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      setResponseMessage("Failed to send inquiry. Please try again later.");
    }
  };

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
          <h2 className="capitalize mb-5">Our Happy Customers</h2>
          <div className="feedbacks">
            {loading ? (
              <p>Loading feedbacks...</p>
            ) : feedbacks.length > 0 ? (
              <div className="feedback-list mb-5 d-flex justify-content-center align-items-center gap-2 flex-wrap">
                {feedbacks.map((feedback) => (
                  <div className="feedback" key={feedback.feedback_id}>
                    <h3>
                      {feedback.first_name} {feedback.last_name}
                    </h3>
                    <div className="rating">{renderStars(feedback.rating)}</div>
                    <p className="mt-3 ">"{feedback.comment}"</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No feedbacks available.</p>
            )}
          </div>

          <footer className="container-fluid bg-dark text-white py-5">
            <div className="container">
              <div className="row align-items-center justify-content-center text-center text-md-start">
                {/* Heading Section */}
                <div className="col-12 col-md-6 mb-4 mb-md-0">
                  <h1 className="display-5 fw-bold">
                    Have a Question? We're Here to Help!
                  </h1>
                </div>
                {/* Form Section */}
                <div className="col-12 col-md-6">
                  <form
                    onSubmit={handleSubmit}
                    className="d-flex flex-column align-items-center"
                  >
                    <input
                      type="email"
                      name="email"
                      className="form-control mb-3 w-100"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <textarea
                      name="inquiry"
                      className="form-control mb-3 w-100"
                      placeholder="Enter your query"
                      value={inquiry}
                      onChange={(e) => setInquiry(e.target.value)}
                      rows="4"
                      required
                    />
                    <button
                      type="submit"
                      className="btn btn-outline-light w-100 w-md-auto"
                    >
                      Submit Inquiry
                    </button>
                  </form>
                  {responseMessage && <p className="mt-3">{responseMessage}</p>}
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div className="container-fluid bottom-shadow">
        <div className="container company-info d-flex justify-content-between align-items-center gap-3 mt-5 flex-wrap">
          <div className="about">
            <h3 className="navbar-brand main-title font-2x">
              RADHE ENTERPRISE
            </h3>
            <p>
              We have creels that helps your business to make reach new heights.
            </p>
          </div>
          <div className="links">
            <h5 className="mb-3">COMPANY</h5>
            <p>About</p>
            <p>Features</p>
            <p>Works</p>
            <p>Career</p>
          </div>
          <div className="links">
            <h5 className="mb-3">Help</h5>
            <p>Customer Support</p>
            <p>Delivery Details</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  );
}
