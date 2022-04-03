import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getSong } from "../../Redux/action";

export const TopCharts = () => {
  const [data, setData] = useState([]);
  const [res, setRes] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://saavn.me/home")
      .then((res) => setData(res.data.results.top_playlists));
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
      <div>
        <h2 className="name">Top Charts</h2>
        <div className="playlist-div">
          {data.map((ele, i) => {
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
          })}
        </div>
      </div>
    </>
  );
};
