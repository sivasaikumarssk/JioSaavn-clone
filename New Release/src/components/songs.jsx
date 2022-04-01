import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { SongCard } from "./song_card";


export const Songs = ()=>{

    const [Newsongs,setNewsongs] = useState([]);

    useEffect(()=>{
        axios.get("https://apg-saavn-api.herokuapp.com/playlist/?q=https://www.jiosaavn.com/featured/romantic-hits-2020---hindi/ABiMGqjovSFuOxiEGmm6lQ").then((res)=>{
            console.log(res)
            setNewsongs([...res.data.songs]);
        })
    },[]);

    //console.log(Newsongs)
    const Songs = styled.div`
    display: grid;
    grid-template-columns: repeat(5,16%);
    grid-gap:3rem;
    width: 98%
    `


    return (
        <>
        <h1 style={{textAlign: "left"}}>New Songs</h1>
        <Songs>
            {Newsongs.map((el)=>{
                return (
                    <SongCard key={el.id} image={el.image} title ={el.song} media_url={el.media_url} Newsongs={Newsongs}></SongCard>
                )
            })}
        </Songs>
        </>
    )
}