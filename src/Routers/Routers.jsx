import { Route, Routes } from "react-router-dom"
import { Login } from "../Components/Login/Login"
import { Signup } from "../Components/Signup/Signup"

export const Routers =()=>{
    return (
        <Routes>
            <Route path="/register" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
    )
}