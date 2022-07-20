import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../App";

function Intro() {
  const { setMoney } = useContext(MainContext);

  return (
    <div className="intro-container">
      <h1 className="intro-header">Select Your Hero</h1>
      <div className="wrapper">
        <div className="card">
          <div className="card-img">
            <img
              src="https://images.mktw.net/im-582182?width=700&height=457"
              title="Tusk"
            />
          </div>
          <div className="card-body">
            <span className="price">$230,000,000,000</span>
            <Link to="/home">
              <button
                className="button get-started"
                onClick={() => setMoney(230000000000)}
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img
              src="https://cdnntr1.img.sputniknews.com/img/07e6/05/1a/1056706589_352:0:1195:843_1920x0_80_0_0_f3905d871e97ad937ef96aec0edfb63d.jpg"
              title="Hayaldi, Gerçek oldu"
            />
          </div>
          <div className="card-body">
            <span className="price">$128,000,000,000</span>
            <Link to="/home">
              <button
                className="button get-started"
                onClick={() => setMoney(128000000000)}
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img
              src="https://i.ibb.co/Wv2Ptfv/Any-Conv-com-FLh8-AS2-WYAEOZh8.jpg"
              title="wake up mr.west"
            />
          </div>
          <div className="card-body">
            <span className="price">$6,600,000,000</span>
            <Link to="/home">
              <button
                className="button get-started"
                onClick={() => setMoney(6600000000)}
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img
              src="https://static.wixstatic.com/media/1b3e6c_8d66cbbd921e4d21ae957caa5fab8aea~mv2.jpeg/v1/fill/w_1000,h_1006,al_c,q_90,usm_0.66_1.00_0.01/1b3e6c_8d66cbbd921e4d21ae957caa5fab8aea~mv2.jpeg"
              title="Kriptoya girişin ataş"
            />
          </div>
          <div className="card-body">
            <span className="price">$400,000,000,000</span>
            <Link to="/home">
              <button
                className="button get-started"
                onClick={() => setMoney(400000000000)}
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
