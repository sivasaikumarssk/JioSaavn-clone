import { useEffect, useState } from "react"
import "./topPlaylists.css"
import axios from "axios";


export const TopPlaylists = ()=>{
    const [data,setData] = useState([]);
useEffect(()=>{
    axios.get("https://saavn.me/home").then((res)=>{
        
        setData(res.data.results.top_playlists);
        console.log("e" ,res.data.results.top_playlists);
        
        
    })
},[]);

return <>
         <div >
             <h1>Top Playlists</h1>
             <div className="songs_div">
                 {data.map((e,i)=>{
                     console.log("f",e);
                     //if(i <= 13){
                         return <div className="songs_info" key={i}>
                            
                            <img src={e.image}/>
                           <p>{e.title}</p>
                           <small>{e.subtitle}</small>
                        </div>
                // }
                 })}

                 </div>
                 <p><h2>Yay! You have seen it all 🤩</h2></p>
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

}