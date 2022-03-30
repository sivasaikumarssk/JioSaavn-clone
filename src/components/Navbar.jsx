import jioIcon from "../Assets/jioIcon.jpeg";
import { BasicMenu } from "./MusicLanMenu.jsx";


export const Navbar = () => {
  return (
    <>
      <div className="jioNavbar">
        <img src={jioIcon} alt="" />
        <p>Home</p>
        <p>Browse</p>
        <p>Upgrade</p>
        <input className="searchBox" type="text" placeholder="Search" />
        < BasicMenu  className="menuComponent"/>
        <p>Login</p>
        <p>Sign Up</p>
      </div>
    </>
  );
};
