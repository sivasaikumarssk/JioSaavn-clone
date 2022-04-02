import "./Signup.css"
import saavanlogo  from "./saavanlogo.png"
import DiljitDosanjh from "./DiljitDosanjh.png"
import { Button } from '../Button.jsx';
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom"
export const Signup = () =>{
    const [user,setUser] = useState({
        email : "",
        password : ""
    })
    console.log(user)

    const handdlechange = (event) =>{
        setUser({...user,[event.target.className]:event.target.value})

    }
    return(
        <>
        <div id="signup_page">
{/* -----------------------------------------Left------------------------------------------- */}
            <div className="sp_left">
                <img className="saavanlogoo" src={saavanlogo} alt="" /><br />
                <img className="DiljitDosanjh" src={DiljitDosanjh} alt="" /><br />
                <p className="AllYourMusic">All Your Music.</p>
                <p className="Anytimeanywhere">Anytime, anywhere.</p>
            </div>

{/* ------------------------------------------Right------------------------------------------ */}
            <div className="Sp_right">
                <div  className="topbtnflex">
                <p className="Alreadyhave">Already have an account?</p>
                <Link to={"/login"}><Button className="loogbtn">Login</Button></Link>
            
                </div>

                {/* <Link className="Login" to={"/"}>Login</Link> */}
                <div className="lineheight1">
                    <p className="Welcometo">Welcome to JioSaavn.</p>
                    <p className="Signupwithyou">Sign up with your email address.</p>
                </div>

                <form onSubmit={(event)=>{
                    event.preventDefault()
                    if(user.password !== document.getElementsByClassName("confirm_password")[0].value){
                        alert("Password not matched")
                        return ;
                    } 
                    axios.post("https://jiosaavan-clone.herokuapp.com/register",user).then((res)=>{
                        alert("Sign Up Successful")
                        window.location.href="/login"

                    }).catch((err)=>{
                        alert("Try With Another Email")
                    })
                }}>
                    <input onChange={(e)=>{handdlechange(e)}} type="text" className="email"  placeholder="Email Address"/> <br /> <br />
                    <input onChange={(e)=>{handdlechange(e)}}type="password" className="password" placeholder="Password" /> <br /> <br />
                    <input onChange={(e)=>{handdlechange(e)}}type="password" className="confirm_password" placeholder="Confirm Password" /> <br /> <br />
            
                    <input className="submitBtn" type="submit" />
             
                    </form>

                    <p className="Byselecting">By selecting ‘Continue’, you agree to JioSaavn’s Terms of Service and Privacy Policy.</p>    
                    <p className="ORCONTINUE">OR CONTINUE WITH</p>

                    <div className="btnflex">
                    <Button background='#2a2d36' color='white' className="mob1">Mobile Number</Button>
                    <Button background='#3d5798' color="white" className="fb1">  FaceBook  </Button>                       
                    </div>

                     
            </div>



        </div>
        
        </>
    )

}