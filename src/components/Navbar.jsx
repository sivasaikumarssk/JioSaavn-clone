import jioIcon from "../Assets/jioIcon.jpeg";
import { BasicMenu } from "./MusicLanMenu.jsx";
import Player from "react-material-music-player";
import { Track, PlayerInterface } from "react-material-music-player";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// console.log(uuid())

export const Navbar = () => {
  const [text, setText] = useState("");
  const [response, setResponse] = useState([]);
  const navigate = useNavigate();

  // PlayerInterface.play([
  //   new Track(
  //     "1",
  //     "",
  //     "Arijit Singh",
  //     "Arijit Singh",
  //     "http://h.saavncdn.com/987/cd902d048c13e5ce6ca84cc409746a5d.mp3"
  //  )
  // ])

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      //make network request;
      getSong(text);
    }
  };

  if (response.length > 0) {
    PlayerInterface.play([
      new Track(
        response[0].id,
        response[0].image,
        response[0].album,
        "arijit",
        response[0].media_url
      ),
    ]);

    PlayerInterface.playLater([
      new Track(
        response[1].id,
        response[1].image,
        response[1].album,
        "arijit",
        response[1].media_url
      ),
    ]);

    PlayerInterface.playNext([
      new Track(
        response[2].id,
        response[2].image,
        response[2].album,
        "arijit",
        response[2].media_url
      ),
    ]);
  }

  const getSong = (name) => {
    axios
      .get(`https://apg-saavn-api.herokuapp.com/result/?q=${name}`)
      .then((res) => setResponse(res.data));
  };

  
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="jioNavbar">
        <img src={jioIcon} alt="" />
        <p className="mediaNone"
        onClick={()=>navigate("/")}>Home</p>
        
        <p className="mediaNone"
        onClick={()=>navigate("/browse")}>Browse</p>
        <p className="mediaNone">Upgrade</p>
        <input
          className="searchBox mediaNone"
          
          type="text"
          placeholder="Search"
          onKeyDown={(e) => {
            handleKeyDown(e);
          }}
          onChange={handleChange}
        />
        <BasicMenu className="menuComponent mediaNone" />
        <p className="mediaNone">Login</p>
        <p className="mediaNone">Sign Up</p>
        <Player />
      </div>
    </>
  );
};
