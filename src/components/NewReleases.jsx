import {useState,useEffect} from "react";
import axios from "axios";

export const NewReleases = () => {
    const [data,setData] = useState([]);
    console.log(data);
    useEffect(() =>{
        axios.get("https://saavn.me/home")
        .then((res)=>setData(res.data.results.new_albums))
    },[])

    return <>
    <h2 className="name">New Releases</h2>
    
    <div className="playlist-div">
    {data.map((e,i)=>{
       if(i<=13){
        return <div className="playlist-item" key={i}>
        <img src={e.image} alt="" />
        <p className="Songs-title">{e.title}</p>
    </div>
       }
    })}
    </div>
    </>
}