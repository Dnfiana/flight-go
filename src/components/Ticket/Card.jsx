import React, { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import {
  FaAmericanSignLanguageInterpreting,
  FaArrowRight,
  FaCube,
  FaLanguage,
  FaWpforms,
} from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Card = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="p-3 bg-white rounded mt-4"
      style={{ boxShadow: "0 2px 4px 0 rgb(0 0 0 / 10%)" }}
    >
      <div className="d-flex justify-content-between">
        <p className="px-2 py-1 ">Free 20kg baggage</p>
        <BsFillHeartFill color="red" />
      </div>
      <div className="d-flex justify-content-between">
        <div>
          <div className="d-flex mt-4">
            <div className="mx-3">
              <h6>Air Asia</h6>
              <h6>Indonesia AirAsia</h6>
            </div>
            <div className="mx-3">
              <h6>22:15</h6>
              <h6 className="fonts-light">CGK</h6>
            </div>
            <div>
              <FaArrowRight color="gray" />
            </div>
            <div className="mx-3">
              <h6>01:05</h6>
              <h6 className="fonts-light">Air Asia</h6>
            </div>
            <div className="mx-3">
              <h6>1th 50m</h6>
              <h6 className="fonts-light">Direct</h6>
            </div>
            <div style={{ marginLeft: "50px" }}>
              <FaCube style={{ marginRight: "10px" }} />
              <span className="d-inline-block">20kg</span>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div style={{ marginRight: "20px" }}>
            <h6 className="text-danger">
              Rp 816.760 <span style={{ color: "gray" }}>/ pax</span>
            </h6>
          </div>
          <div>
            <button className="border px-3 py-1 mx-2 rounded text-white" style={{backgroundColor: "#F97316"}}>
            <a href='/ticket/book' className="text-white">Choose Flight</a>
            </button>
          </div>
          <div>
            {!show && <FiChevronDown onClick={() => setShow(true)} />}
            {show && <FiChevronUp onClick={() => setShow(false)} />}
          </div>
        </div>
      </div>
      {show && (
        <div className="d-flex mt-4 border-top pt-4">
          <div className="mx-3">
            <h6>Air Asia</h6>
            <p className="font-weight-light">Indonesia AirAsia</p>
            <p className="fonts-light">QZ7518</p>
          </div>
          <div style={{ margin: "0 70px" }}>
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
          <div>
            <div>
              <h6 className="fonts-medium"> Jakarta (CGK)</h6>
              <h6 className="fonts-medium">
                Soeharto Hatta International Airport
              </h6>
              <h6 className="fonts-medium">Terminal 1A</h6>
            </div>
            <div className="mt-4">
              <h6 className="fonts-medium">Bali Denpasar ( DPS )</h6>
              <h6 className="fonts-medium">Ngurah Rai International Airport</h6>
              <h6 className="fonts-medium">Terminal Domestic</h6>
            </div>
          </div>
          <div style={{ marginLeft: "200px" }}>
            <div className="text-success">
              <FaWpforms style={{ marginRight: "10px" }} />
              <h6 className="d-inline-block">Reschedule</h6>
            </div>
            <div className="text-secondary">
              <FaAmericanSignLanguageInterpreting
                style={{ marginRight: "10px" }}
              />
              <h6 className="d-inline-block">Non Refundable</h6>
            </div>
            <div>
              <FaCube style={{ marginRight: "10px" }} />
              <h6 className="d-inline-block">Cabin baggage 7kg</h6>
            </div>
            <div>
              <FaLanguage style={{ marginRight: "10px" }} />
              <h6 className="d-inline-block">Entertainment</h6>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
