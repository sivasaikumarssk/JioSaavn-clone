import { useEffect, useState } from "react"
import "./topPlaylists.css"
import axios from "axios";


export const TopPlaylists = ()=>{
    const [data,setData] = useState([]);
useEffect(()=>{
    axios("https://apg-saavn-api.herokuapp.com/playlist/?q=https://www.jiosaavn.com/featured/romantic-hits-2020---hindi/ABiMGqjovSFuOxiEGmm6lQ").then((data)=>{
        
        setData(data);
        console.log(data.data.songs);
        
        
    })
},[]);

return(
   
<div className="songs_div">
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

</div> 

)


}