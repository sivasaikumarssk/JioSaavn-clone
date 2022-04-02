import { useState, useEffect } from "react";
import axios from "axios";

export const Discover = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    axios
      .get("https://saavn.me/home")
      .then((res) => setData(res.data.results.radio));
  }, []);

  return (
    <>
      <h2 className="name">Discover Artists</h2>

      <div className="playlist-div">
        {data.map((e, i) => {
          if (i >= 36 && i <50) {
            return (
              <div className="playlist-item" key={i}>
                <img src={e.image} alt="" />
                <p className="Songs-title">{e.title}</p>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};
