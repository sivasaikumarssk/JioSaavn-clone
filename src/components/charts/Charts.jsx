import axios from "axios";
import { useEffect, useState } from "react"
import "./charts.css"


export const Chart = () =>{
  

   
    // const [data,setData] = useState([]);
    // useEffect(()=>{
    //     axios.get("https://saavn.me/search/albums").then((res)=>{
    //         setData(res.data.results);
    //         console.log(res.data)
    //     })
    // },[]);


    // return <>
    //     <div className="albums">
    //         <p>TopMusicCharts</p>
    //         <div className="album_div">
    //             {data.map((e,i)=>{
    //                 console.log("e",e)
    //                 //if(i <= 13){
    //                     return <div>
                            
    //                         <img src={e.image[2].link}/>
    //                         <p><h3>{e.name}</h3></p>
    //                     </div>
    //               //  }
    //             })}
    
           return <>
           <h1>Top Music Charts</h1>
           <div className="album_div" >
               
             <div>
                <img src="https://c.saavncdn.com/editorial/charts_TrendingToday_149406_20220319164713_500x500.jpg" alt="" />
                <p className="album_info">Trending Today <br />
                JioSaavan</p>
            
            </div>
            <div>
                <img src="	https://c.saavncdn.com/editorial/charts_HindiChartbusters_158236_20220311194231_500x500.jpg" alt="" />
                <p className="album_info">Trending Today <br />
                JioSaavan</p>

            </div>
            <div>
                <img src="https://c.saavncdn.com/editorial/charts_RomanticTop40_167985_20220311173413_500x500.jpg" alt="" />
                <p className="album_info">Trending Today <br />
                JioSaavan</p>
            
            </div>
            <div>
                <img src="https://c.saavncdn.com/editorial/logo/charts_Hindi00s_122250_20190906160607_500x500.jpg" alt="" />
                <p className="album_info">Trending Today <br />
                JioSaavan</p>
            
            </div>
            </div>
            
            


             <div className="album_div">
            <div>
                <img src="https://c.saavncdn.com/editorial/logo/charts_Hindi90s_142072_20190906160631_500x500.jpg" alt="" />
                <p className="album_info">Hindi 90s <br />
                JioSaavan</p>
            
            </div>
            <div>
                <img src="https://c.saavncdn.com/editorial/logo/charts_Hindi80s_108023_20220105060041_500x500.jpg" alt="" />
                <p className="album_info">Hindi 80s <br />
                JioSaavan</p>

            </div>
            <div>
                <img src="https://c.saavncdn.com/editorial/logo/charts_Hindi70s_119337_20220105060121_500x500.jpg" alt="" />
                <p className="album_info">Hindi 70s <br />
                JioSaavan</p>
            
            </div>
            <div>
                <img src="https://c.saavncdn.com/editorial/logo/charts_Hindi60s_124027_20220105060140_500x500.jpg" alt="" />
                <p className="album_info">Hindi 60s <br />
                JioSaavan</p>
            
            </div>
            
            
            </div>
            
        
       
        </>
}