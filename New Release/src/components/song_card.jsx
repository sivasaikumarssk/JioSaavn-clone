import { Link } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";
export const SongCard = ({image,title})=>{
  //console.log(title)
  const [response, setResponse] = useState([]);

  const getSong = (name) => {
    axios
      .get(
        `https://saavn.me/search/albums?query=${name}`
      )
      .then((res) => setResponse([...res.data.results]));
  };
  //useEffect(() => {
    console.log(response);
  //}, [response]);
    

    return (
                    <Link to={""} style={{textDecoration:"none",color:"black"}} onClick={()=>{getSong(title)}}> 
                        <img style={{width: "100%",height: "60%", borderRadius: "4%",}} src={image} alt="" />
                        <h4>{title}</h4>
                    </Link>
            )
}