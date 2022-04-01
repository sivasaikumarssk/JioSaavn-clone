import artistInfo from "./artist.json";
import "./artist.css";
import axios from "axios";
import uniqid from "uniqid";
import { useEffect, useState } from "react";

export const Artists = () => {
  const [response, setResponse] = useState([]);

  const getSong = (name) => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://apg-saavn-api.herokuapp.com/result/?q=${name}`
      )
      .then((res) => setResponse(res.data));
  };
  useEffect(() => {
    console.log(response);
  }, [response]);
  return (
    <>
      <h1 id="mainHeading">Top Artists</h1>
      <div className="mainDiv">
        {artistInfo.selection1.map((e) => {
          return (
            <div
              key={uniqid()}
              className="secondaryDiv"
              onClick={() => {
                getSong(e.name);
              }}
            >
              <div className="container">
                <img className="artistImg" src={e.url} alt="" />
                <div className="middle">
                  <div>
                    <img
                      src="https://www.nicepng.com/png/detail/8-80536_circular-play-button-svg-png-icon-free-download.png"
                      className="logo"
                      alt="playLogo"
                    />
                  </div>
                </div>
              </div>
              <p className="artistName">{e.name}</p>
              <p>{Math.floor(Math.random() * 10000000)} Fans</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
