import React from "react";
import "./styles/Products.css";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <>
      <div className="container pt-5 pb-5">
        <h1 className="text-center text-uppercase bold">
          Sectional Warping Machine
        </h1>
        <h3 className="text-uppercase bold mt-5 mb-5 border-dark">Creels</h3>
        <div className="products d-flex justify-content-center align-items-center gap-3 flex-wrap">
          <div class="card border-dark">
            <img
              src="https://www.prashantgroup.com/images/products/individually-controlled-tensioners-type-img.png"
              class="card-img-top p-3 "
              alt="RTR Creel"
            />
            <div class="card-body">
              <h5 class="card-title bold">WARPING CREEL MODEL : RTR</h5>
              {/* <p class="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </p> */}
              <Link to="/" class="btn bg-dark text-light btn-full">
                View Product
              </Link>
            </div>
          </div>
          <div class="card border-dark">
            <img
              src="https://www.clartechengineers.com/textile-machineries-equipments/sub-images/cepl_creel_cbr_main.png"
              class="card-img-top p-0 m-0"
              alt="RTR Creel"
            />
            <div class="card-body">
              <h5 class="card-title bold">WARPING CREEL MODEL : RBR</h5>
              {/* <p class="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </p> */}
              <Link to="/" class="btn bg-dark text-light btn-full">
                View Product
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
