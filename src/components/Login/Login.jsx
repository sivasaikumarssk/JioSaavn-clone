import "./Login.css";
import saavanlogo from "./saavanlogo.png";
import DiljitDosanjh from "./DiljitDosanjh.png";
import { Button as RegisterButton } from "../RegisterButton.jsx";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  console.log(user);

  const handdlechange = (event) => {
    setUser({ ...user, [event.target.className]: event.target.value });
  };
  return (
    <>
      <div id="signup_page">
        {/* -----------------------------------------Left------------------------------------------- */}
        <div className="sp_left">
          <img className="saavanlogoo" src={saavanlogo} alt="" />
          <br />
          <img className="DiljitDosanjh" src={DiljitDosanjh} alt="" />
          <br />
          <p className="AllYourMusic">All Your Music.</p>
          <p className="Anytimeanywhere">Anytime, anywhere.</p>
        </div>

        {/* ------------------------------------------Right------------------------------------------ */}
        <div className="Sp_right">
          <div className="topbtnflex">
            <p className="Alreadyhave">Already have an account?</p>
            <Link to={"/register"}>
              <RegisterButton className="loogbtn">Signup</RegisterButton>
            </Link>
          </div>
          {/* <Link className="Login" to={"/"}>Login</Link> */}
          <div className="lineheight1">
            <p className="Welcometo">Welcome to JioSaavn.</p>
            <p className="Signupwithyou">Sign up with your email address.</p>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();

              axios
                .post("https://jiosaavan-clone.herokuapp.com/login", user)
                .then((res) => {
                  alert("Login Sucessful");
                  window.location.href = "./";
                })
                .catch((err) => {
                  alert("Invalid Email Or Password");
                });
            }}
          >
            <input
              onChange={(e) => {
                handdlechange(e);
              }}
              type="text"
              className="email"
              placeholder="Email Address"
            />{" "}
            <br /> <br />
            <input
              onChange={(e) => {
                handdlechange(e);
              }}
              type="password"
              className="password"
              placeholder="Password"
            />{" "}
            <br /> <br />
            <input className="submitBtn" type="submit" />
          </form>

          <p className="Byselecting">
            By selecting ‘Continue’, you agree to JioSaavn’s Terms of Service
            and Privacy Policy.
          </p>
          <p className="ORCONTINUE">OR CONTINUE WITH</p>

          <div className="btnflex">
            <RegisterButton background="#2a2d36" color="white" className="mob1">
              Mobile Number
            </RegisterButton>
            <RegisterButton background="#3d5798" color="white" className="fb1">
              {" "}
              FaceBook{" "}
            </RegisterButton>
          </div>
        </div>
      </div>
    </>
  );
};
