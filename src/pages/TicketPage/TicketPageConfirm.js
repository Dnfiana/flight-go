import React, { useState } from "react";
import {
  FaAmericanSignLanguageInterpreting,
  FaArrowRight,
  FaCube,
  FaLanguage,
  FaWpforms,
} from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import TopNavbar from '../../components/LandingPage/Nav/TopNavbar';

const TicketPageConfirm = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="contains-head mt-lg-4">
        <div className="bg-whites">
          {/* Navbar */}
          <TopNavbar />

          <div className="d-flex">
            {/* Departure Flight */}
            <div className="p-3 bg-white rounded dapature-flight">
              <h6 className="px-2">Departure Flight</h6>
              <div className="d-flex justify-content-between">
                <div className="d-flex mt-4">
                  <div className="mx-3">
                    <h6>Jakarta (CGK)</h6>
                    <h6 style={{ fontSize: "12px", color: "gray" }}>
                      1 Pax Direct
                    </h6>
                  </div>
                  <div>
                    <FaArrowRight color="gray" />
                  </div>
                  <div className="mx-3">
                    <h6>Bali Denpasar (DPS)</h6>
                  </div>
                </div>
                <div>
                  <button className="border px-3 py-1 mx-2 rounded text-white" style={{ backgroundColor: "#F97316" }}>
                  <a href='/ticket' className="text-white">Choose Flight</a>
                  </button>
                </div>
              </div>
              <div className="d-flex mt-4 border-top pt-4">
                <div className="mx-3">
                  <h6>Air Asia</h6>
                  <p className="font-weight-light">Indonesia AirAsia</p>
                  <p className="fonts-light">QZ7518</p>
                </div>
                <div style={{ margin: "0 20px" }}>
                  <div className="">
                    <h6 className="fonts-bold">22:15</h6>
                    <p className="font-weight-light fonts-light">6 Dec 2022</p>
                  </div>
                  <p className="font-wight-light my-4 fonts-light">1h 50m</p>
                  <div className="">
                    <p className="fonts-bold">01:05</p>
                    <p className="fonts-light">6 Dec 2022</p>
                  </div>
                </div>
                <div style={{ margin: "0 60px" }}>
                  <div>
                    <h6 className="fonts-medium"> Jakarta (CGK)</h6>
                    <h6 className="fonts-medium">
                      {" "}
                      Soeharto Hatta International Airport
                    </h6>
                    <h6 className="fonts-medium"> Terminal 1A</h6>
                  </div>
                  <div className="mt-5">
                    <h6 className="fonts-medium">Bali Denpasar ( DPS )</h6>
                    <h6 className="fonts-medium">
                      Ngurah Rai International Airport
                    </h6>
                    <h6 className="fonts-medium">Terminal Domestic</h6>
                  </div>
                </div>
                <div>
                  <div className="text-secondary">
                    <FaAmericanSignLanguageInterpreting className="mrs-3" />
                    <small className="d-inline-block">Non Refundable</small>
                  </div>
                  <div className="text-success">
                    <FaWpforms className="mrs-3" />
                    <small className="d-inline-block ">Reschedule</small>
                  </div>
                  <div>
                    <FaCube className="mrs-3" />
                    <small className="d-inline-block">Cabin baggage</small>
                  </div>
                  <div>
                    <FaLanguage className="mrs-3" />
                    <small className="d-inline-block">Entertainment</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Detail Harga  */}
            <div
              className="p-3 bg-white rounded price-detail"
              style={{
                height: `${show ? "40vh" : "25vh"}`,
              }}
            >
              <h6>Price detail</h6>
              <div className="">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6
                      className="d-inline-block"
                      style={{ fontWeight: "500", fontSize: "14px" }}
                    >
                      Depart (CGK =&gt; DPS)
                    </h6>
                    {!show && <FiChevronDown onClick={() => setShow(true)} />}
                    {show && <FiChevronUp onClick={() => setShow(false)} />}
                  </div>
                  <div>
                    <h6>Rp 849.044</h6>
                  </div>
                </div>
                {show && (
                  <>
                    <div className="d-flex justify-content-between">
                      <h6 className="d-inline-block text-secondary">
                        Adult x 1
                      </h6>
                      <h6 className="text-secondary">Rp 849.044</h6>
                    </div>
                    <div className="d-flex justify-content-between">
                      <h6 className="d-inline-block text-secondary">Tax</h6>
                      <h6 className="text-secondary">Rp 423.044</h6>
                    </div>
                  </>
                )}
                <div className="d-flex justify-content-between card-price-detail position-absolute">
                  <h6 className="fonts-normal">Total Price</h6>
                  <h6 className="">Rp 849.044</h6>
                  <button className="btn buttons-continue-booking" style={{ backgroundColor: "#F97316" }}>
                  <a href='/payment' className="text-white">Continue Booking</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketPageConfirm;
