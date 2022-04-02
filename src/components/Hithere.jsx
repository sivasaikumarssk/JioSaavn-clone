import {useState,useEffect} from "react";
import axios from "axios";
export const HiThere = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        axios.get("https://saavn.me/trending")
        .then((res)=>setData(res.data.results))
    },[])

    return <>
    <div >
        <h2>Hi There</h2>
        <p>TRENDING NOW</p>    
        <div className="trending-div" >
        {data.map((e,i)=>{
           if(i <=13){
            return  <div className="trending-item" key={i}
           >
            <img src={e.image} alt="" />
            <p className="Songs-title">{e.title}</p>
            {/* <p>{e.more_info.fan_count}</p> */}
            </div >
           }
        })}

        </div>
    </div>
    </>
}