import React from "react";
import { FiAirplay, FiChevronDown } from "react-icons/fi";
import Card from "../../components/Ticket/Card";
import TopNavbar from '../../components/LandingPage/Nav/TopNavbar';

const TicketPage = () => {
  return (
    <div className="containers">
      <div className="contain">
        {/* Navbar */}
        <TopNavbar />

        <div className="mt-5 d-flex justify-content-between">
          <div className="d-flex mt-lg-5">
            <FiAirplay className="icon-select-departure" />
            <div>
              <h5>Select Departure Flight</h5>
              <p className="font-weight-light">JKTA - DPS Mon, 5 Dec</p>
            </div>
          </div>
          <div>
          </div>
        </div>
        {/* departure */}
        <div
          className="p-3 bg-white rounded mt-4"
          style={{ boxShadow: "0 2px 4px 0 rgb(0 0 0 / 10%)" }}
        >
          <div className="d-flex justify-content-between">
            <div className="">
              <h4> Departure flight to Bali Denpasar</h4>
              <p className="font-weight">Mon, 5 Dec 2022 1 Traveler</p>
            </div>
            <div className="">
              <button className="border px-3 py-1"><a href='/landing' className="text-black">Change Search</a></button>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <h6 className="d-inline-block">Sort: </h6>
              <button className="border px-3 py-1 mx-2">
                Lowest Price <FiChevronDown />
              </button>
            </div>
          </div>
        </div>
        {/* free */}
        <Card />
        <Card />
        <Card />
        {/* sign up */}
        <div className="card-signup-login p-3 bg-white rounded mt-4">
          <div className="d-flex justify-content-between">
            <h6 className="text-white">
              Sign up or log in now to get a perfect booking experience
            </h6>
            <div>
              <button
                className="border px-3 py-1 mx-2"
                style={{ borderRadius: "4px" }}
              >
                <a href='/login' className="text-white">Login</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
