import styled from "styled-components"
import { Buttons } from "./button"

export const Navbarlist = ()=>{
    const List = styled.div`
    width: 100%;
    height:5rem;
    display:flex;
    align-items: center;
    justify-content: space-between;
    `;

    const TextButton = styled.button`
    border:none;
    background-color: transparent;
    font-size: 1rem;
    margin-right: 1rem;

    &:hover {
        background-color: rgb(236, 228, 228);
        padding: .5rem;
        border-radius: 1rem;
    }
    `
    return(
        <List>
            <div>
            <TextButton >New Releases</TextButton>
            <TextButton >Charts</TextButton>
            <TextButton >Top Playlists</TextButton>
            <TextButton >Podcasts</TextButton>
            <TextButton >Top Artists</TextButton>
            <TextButton >Radio</TextButton>
            </div>
            <div>
            <Buttons>Surprise Me</Buttons>
            </div>
            
        </List>
    )
}