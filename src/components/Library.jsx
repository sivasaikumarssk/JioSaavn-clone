import { BiHistory } from "react-icons/bi";
import { IoMusicalNoteOutline } from "react-icons/io5";
import {BiAlbum} from "react-icons/bi";
import {MdPodcasts} from "react-icons/md";
import {GiMicrophone} from "react-icons/gi";
export const Library = () => {
  return (
    <>
    <div className="Library-div">
      <p>Library</p>
      <p>
        <BiHistory />
        History
      </p>
      <p>
        <IoMusicalNoteOutline />
        Songs
      </p>
      <p>
          <BiAlbum/>
          Albums
          </p>
      <p>
          <MdPodcasts/>
          Podcasts
          </p>
      <p>
          <GiMicrophone/>
          Artists
          </p>
          
    </div>
   
       
    </>
  );
};
