import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { getSong } from "../../Redux/action";

export const SongCard = ({ image, title }) => {
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
    <Link
      to={""}
      style={{ textDecoration: "none", color: "black" }}
      onClick={() => {
        handleClick(title);
      }}
    >
      <img
        style={{ width: "100%", height: "60%", borderRadius: "4%" }}
        src={image}
        alt=""
      />
      <h4>{title}</h4>
    </Link>
  );
};
