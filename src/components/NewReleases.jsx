import {useState,useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getSong } from "../../Redux/action";

export const NewReleases = () => {
    const [data,setData] = useState([]);
   
   const dispatch = useDispatch();
    useEffect(() =>{
        axios.get("https://saavn.me/home")
        .then((res)=>setData(res.data.results.new_albums))
    },[])

    const handleClick = (name)=>{
        dispatch(getSong(name))
    }

    return <>
    <h2 className="name">New Releases</h2>
    
    <div className="playlist-div">
    {data.map((e,i)=>{
       if(i<=13){
        return <div className="playlist-item" key={i} onClick={() =>handleClick(e.title)}>
        <img src={e.image} alt="" />
        <p className="Songs-title">{e.title}</p>
    </div>
       }
    })}
    </div>
    </>
}