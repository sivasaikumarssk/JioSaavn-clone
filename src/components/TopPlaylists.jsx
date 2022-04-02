import { useEffect, useState } from "react";
import axios from "axios";

export const TopPlay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://saavn.me/home").then((res) => setData(res.data.results.top_playlists));
  }, []);

  return (
    <>
      <div>
        <h2 className="name">Top Charts</h2>
        <div className="playlist-div">

        {data.map((e,i)=>{
            return <div className="playlist-item" key={i}>

            <img src={e.image} alt="" />
            <p className="Songs-title">{e.title}</p>
            </div>
        })}
        
        </div>
      </div>
    </>
  );
};
