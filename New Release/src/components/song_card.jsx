import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
export const SongCard = ({image,title})=>{
    const [response, setResponse] = useState([]);
    
    //console.log(title)
    const getSong = (name)=>{
        //console.log(title)
        axios
      .get(
        `https://apg-saavn-api.herokuapp.com/result/?q=${name}`
      )
      .then((res) => setResponse(res.data));
    }
    //console.log(response);
    return (
                    <Link to={""} style={{textDecoration:"none",color:"black"}} onClick={()=>{getSong(title)}}> 
                        <img style={{width: "100%",height: "60%", borderRadius: "4%",}} src={image} alt="" />
                        <h4>{title}</h4>
                    </Link>
            )
}