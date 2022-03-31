import artistInfo from "./artist.json";
import "./artist.css";
import axios from "axios";
import { useEffect, useState } from "react";

export const Artists = () => {
  const [response, setResponse] = useState([]);
  const getSong = (name) => {
    axios
      .get(`https://apg-saavn-api.herokuapp.com/result/?q=${name}`)
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
              className="secondaryDiv"
              onClick={() => {
                getSong(e.name);
              }}
            >
              <img className="artistImg" src={e.url} alt="" />
              <p className="artistName">{e.name}</p>
              <p>{Math.floor(Math.random() * 10000000)} Fans</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
