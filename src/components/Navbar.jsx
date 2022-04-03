import jioIcon from "../Assets/jioIcon.jpeg";
import { BasicMenu } from "./MusicLanMenu.jsx";
import Player from "react-material-music-player";
import { Track, PlayerInterface } from "react-material-music-player";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// console.log(uuid())

export const Navbar = () => {
  const [song, setSong] = useState("arijit");
  const item = useSelector((store) => store);
  const [text, setText] = useState("");
  const [response, setResponse] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setSong(item!==undefined?item.store:"arijit")
      getSong(song)
  }, [item]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      getSong(text);
    }
  };

  if (response.length > 0) {
    PlayerInterface.play([
      new Track(
        response[0].id,
        response[0].image[0].link,
        response[0].album.name,
        response[0].artist,
        response[0].downloadUrl[3].link
      ),
    ]);

    PlayerInterface.playLater([
      new Track(
        response[1].id,
        response[1].image[0].link,
        response[1].album.name,
        response[1].artist,
        response[1].downloadUrl[3].link
      ),
    ]);

    PlayerInterface.playNext([
      new Track(
        response[2].id,
        response[2].image[0].link,
        response[2].album.name,
        response[2].artist,
        response[2].downloadUrl[3].link
      ),
    ]);
  }

  // const getSong = (name) => {
  //   axios
  //     .get(`https://apg-saavn-api.herokuapp.com/result/?q=${name}`)
  //     .then((res) => setResponse(res.data));
  // };

  const getSong = (name) => {
    axios
      .get(`https://saavn.me/search/songs?query=${name}`)
      .then((res) => setResponse(res.data.results));
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="jioNavbar">
        <img src={jioIcon} alt="" />
        <p className="mediaNone" onClick={() => navigate("/")}>
          Home
        </p>

        <p className="mediaNone" onClick={() => navigate("/browse")}>
          Browse
        </p>
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
        <p className="mediaNone" onClick={() => navigate("/login")}>
          Login
        </p>

        <p className="mediaNone" onClick={() => navigate("/register")}>
          Sign Up
        </p>
        <Player />
      </div>
    </>
  );
};
