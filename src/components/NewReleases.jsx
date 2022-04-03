import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getSong } from "../../Redux/action";

export const NewReleases = () => {
  const [data, setData] = useState([]);
  const [res, setRes] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://saavn.me/home")
      .then((res) => setData(res.data.results.new_albums));
  }, []);

  const handleClick = (name) => {
    dispatch(getSong(name));
    setRes(name);
  };

  useEffect(() => {
    dispatch(getSong(res));
  }, [res]);
  return (
    <>
      <h2 className="name">New Releases</h2>

      <div className="playlist-div">
        {data.map((el, i) => {
          if (i <= 13) {
            return (
              <div
                className="playlist-item"
                key={i}
                onClick={() => handleClick(el.title)}
              >
                <img src={el.image} alt="" />
                <p className="Songs-title">{el.title}</p>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};
