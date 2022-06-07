import { useEffect, useState } from "react";
import "./topPlaylists.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getSong } from "../../../Redux/action";

export const TopPlayLists = () => {
  const [res, setRes] = useState("");

  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("https://saavn.me/home").then((res) => {
      setData(res.data.results.top_playlists);
    });
  }, []);

  const handleClick = (name) => {
    dispatch(getSong(name));
    setRes(name);
  };
  useEffect(() => {
    dispatch(getSong(res));
    // console.log(response);
  }, [res]);

  return (
    <>
      <div>
        <h1>Top Playlists</h1>
        <div className="songs_div">
          {data.map((ele, i) => {
            console.log("f", ele);
            //if(i <= 13){
            return (
              <div
                className="songs_info"
                key={i}
                onClick={() => handleClick(ele.title)}
              >
                <img src={ele.image} />
                <p>{ele.title}</p>
                <small>{ele.subtitle}</small>
              </div>
            );
            // }
          })}
        </div>
        <p>
          <h2>Yay! You have seen it all 🤩</h2>
        </p>
      </div>

      {/* <div className="songs_div">
    <div className="songs_info">
    <img src={data.data.songs[0].image}/> <br />
    <small>{data.data.songs[0].album}</small>        
    </div>

    <div className="songs_info">
    <img src={data.data.songs[1].image}/>
<br />    <small>{data.data.songs[1].album}</small>        
    </div>

    <div className="songs_info">
    <img src={data.data.songs[2].image}/>
<br />    <small>{data.data.songs[2].album}</small>        
    </div>

    <div className="songs_info">
    <img src={data.data.songs[3].image}/>
<br />    <small>{data.data.songs[3].album}</small>        
    </div>

    <div className="songs_info">
    <img src={data.data.songs[4].image}/>
<br />    <small>{data.data.songs[4].album}</small>        
    </div>

    <div className="songs_info">
    <img src={data.data.songs[5].image}/>
<br />    <small>{data.data.songs[5].album}</small>        
    </div>

    <div className="songs_info">
    <img src={data.data.songs[6].image}/>
<br />    <small>{data.data.songs[6].album}</small>        
    </div>

    <div className="songs_info">
    <img src={data.data.songs[7].image}/>
<br />    <small>{data.data.songs[7].album}</small>        
    </div>
    
    <div className="songs_info">
    <img src={data.data.songs[8].image}/>
<br />    <small>{data.data.songs[8].album}</small>        
    </div>

    <div className="songs_info">
    <img src={data.data.songs[9].image}/>
<br />    <small>{data.data.songs[9].album}</small>        
    </div>

    <div className="songs_info">
    <img src={data.data.songs[10].image}/>
<br />    <small>{data.data.songs[10].album}</small>        
    </div>

    <div className="songs_info">
    <img src={data.data.songs[11].image}/>
<br />    <small>{data.data.songs[11].album}</small>        
    </div>

    <div className="songs_info">
    <img src={data.data.songs[12].image}/>
<br />    <small>{data.data.songs[12].album}</small>        
    </div>

    <div className="songs_info">
    <img src={data.data.songs[13].image}/>
<br />    <small>{data.data.songs[13].album}</small>        
    </div>

    <div className="songs_info">
    <img src={data.data.songs[14].image}/>
<br />    <small>{data.data.songs[14].album}</small>        
    </div>

    <div className="songs_info">
    <img src={data.data.songs[15].image}/>
<br />    <small>{data.data.songs[15].album}</small>        
    </div>

    <div className="songs_info">
    <img src={data.data.songs[16].image}/>
<br />    <small>{data.data.songs[16].album}</small>        
    </div>

    <div className="songs_info">
    <img src={data.data.songs[17].image}/>
<br />    <small>{data.data.songs[17].album}</small>        
    </div>

</div>  */}
    </>
  );
};
