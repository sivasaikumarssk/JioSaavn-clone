import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { SongCard } from "./song_card";

export const Language = ()=>{
    const {language} = useParams();
    console.log(language)
    const [Newsongs,setNewsongs] = useState([]);

    useEffect(()=>{
        axios.get(`https://saavn.me/search/albums?query=${language}`).then((res)=>{
            console.log(res)
            setNewsongs([...res.data.results]);
        })
    },[language]);

    //console.log(Newsongs)
    const Songs = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-gap:3rem;
    width: 98%
    `
    return (
        <>
        <h1 style={{textAlign: "left"}}>New {language} Songs</h1>
        <Songs>
            {Newsongs.map((el)=>{
                return (
                    <SongCard key={el.id} image={el.image[2].link} title ={el.name}></SongCard>
                )
            })}
        </Songs>
        </>
    )
}