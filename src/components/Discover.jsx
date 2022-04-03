import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getSong } from "../../Redux/action";

export const Discover = () => {
  const [data, setData] = useState([]);
  const [res, setRes] = useState("");
  const dispatch = useDispatch();
  console.log(data);
  useEffect(() => {
    axios
      .get("https://saavn.me/home")
      .then((res) => setData(res.data.results.radio));
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
      <h2 className="name">Discover Artists</h2>

      <div className="playlist-div">
        {data.map((ele, i) => {
          if (i >= 36 && i < 50) {
            return (
              <div
                className="playlist-item"
                key={i}
                onClick={() => handleClick(ele.title)}
              >
                <img src={ele.image} alt="" />
                <p className="Songs-title">{ele.title}</p>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};
