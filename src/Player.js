import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import "./Player.css";
import Sidebar from "./Sidebar";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body spotify={spotify}/>
      </div>
      <Footer spotify={spotify}/>
      {/* <h1>Welcome to spotify</h1> */}
    </div>
  );
};

export default Player;
