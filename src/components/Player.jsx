import React from "react";
import Footer from "../components/footer/Footer";
import "./Player.css";
import Sidebar from "../components/home/SideBar";
import MainPage from './home/MainPage';

function Player({ spotify }) {
    return (
        <div className="player">
        <div className="player__body">
          <Sidebar />
          <MainPage spotify={spotify} />
        </div>
        <Footer />
      </div>
    );
}

export default Player