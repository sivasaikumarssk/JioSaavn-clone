import artistInfo from "./artist.json";
import "./artist.css";
import uniqid from "uniqid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSong } from "../../../Redux/action";
import { store } from "../../../Redux/store";

export const Artists = () => {
  const [response, setResponse] = useState([]);
  const [res, setRes] = useState("");
  const dispatch = useDispatch();
  const handleClick = (name) => {
    dispatch(getSong(name));
    setRes(name);
  };
  useEffect(() => {
    dispatch(getSong(res));
  }, [res]);
  return (
    <>
      <h1 id="ArtistMainHeading">Top Artists</h1>
      <div className="ArtistMainDiv">
        {artistInfo.selection1.map((ele) => {
          return (
            <div
              key={uniqid()}
              className="ArtistSecondaryDiv"
              onClick={() => {
                handleClick(ele.name);
              }}
            >
              <div className="ArtistContainer">
                <img className="artistImg" src={ele.url} alt="" />
                <div className="ArtistMiddle">
                  <div>
                    <img
                      src="https://www.nicepng.com/png/detail/8-80536_circular-play-button-svg-png-icon-free-download.png"
                      className="ArtistLogo"
                      alt="playLogo"
                    />
                  </div>
                </div>
              </div>
              <p className="artistName">{ele.name}</p>
              <p>{Math.floor(Math.random() * 10000000)} Fans</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
