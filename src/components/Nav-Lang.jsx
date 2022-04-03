import { Link } from "react-router-dom"
import styled from "styled-components"

export const Navbarlang = ()=>{
    const Lang = styled.div`
    width: 100%;
    height:5rem;
    display:flex;
    align-items: center;
    justify-content: space-between;
    `

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
    const lang = ["Hindi","Tamil","Telugu","English","Malayalam","Urdu"]
    return(
        <Lang>
            <div>
            <TextButton value = "For You" ><Link style={{textDecoration:"none", color: "black"}} to={`/browse`}>For You</Link></TextButton>
            {lang.map((el)=>{
                return <TextButton value = {el} ><Link style={{textDecoration:"none", color: "black"}} to={`/browse/${el}`}>{el}</Link></TextButton>
            })}
            </div>
        </Lang>
    )
}