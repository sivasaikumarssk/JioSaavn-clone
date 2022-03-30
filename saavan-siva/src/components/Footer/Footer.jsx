import fb from "../Images/fb.png";
import twitter from "../Images/twitter"
import insta from "../Images/insta";
import youtube from "../Images/youtube"
import linkedin from "../Images/linkedin"

export const Footer = () => {
    return (
        <div>
        <div className="footer_div" style={{border:"1px solid red",display:"flex",gap:"9rem",textAlign:"left" ,color:"#3e3e3e",padding:"2rem"}}>
            
            <div>
            <h5>TOP ARTISTS</h5>
            <small>Neha Kakkar</small>
            <br/>
            <small>Arjit Singh</small>
            <br/>
            <small>Badshah</small>
            <br/>
            <small>Atif Aslam</small>
            <br/>
            <small>Justin Bieber</small>
            <br/>
            <small>Himesh Reshammiya</small>
            <br/>
            <small>Lata Mangeshkar</small>
            <br/>
            <small>Sanam Puri</small>
            <br/>
            <small>Arman Malik</small>
            <br/>
            </div>,

            <div >
            <h5>TOP ACTORS</h5>
            <small>Salman Khan Songs</small>
            <br/>
            <small>Allu Arjun Songs</small>
            <br/>
            <small>Sunny Leone Songs</small>
            <br/>
            <small>Amitabh Bachchan Songs</small>
            <br/>
            <small>Varun Dhawan Songs</small>
            <br/>
            
            <h5>BROWSE</h5>
            <small>New Releases</small>
            <br/>
            <small>Featured Playlists</small>
            <br/>
            <small>Weekly Top Songs</small>
            <br/>
            <small>Top Artists</small>
            <br/>
            <small>Top Charts</small>
            <br/>
            <small>Top Radios</small>
            </div>,

            <div>
            <h5>DEVOTIONAL SONGS</h5>
            <small>Krishna Bhajan</small>
            <br/>
            <small>Mahamrityunjaya Mantra</small>
            <br/>
            <small>Ganesh Ji Ki Aarti</small>
            <br/>
            <small>Hanuman Chalisa</small> 
            </div>,

            <div>
            <h5>LANGUAGE</h5>
            <small>Hindi Songs</small>
            <br/>
            <small>Punjabi Songs</small>
            <br/>
            <small>Telugu Songs</small>
            <br/>
            <small>Tamil Songs</small>
            <br/>
            <small>Kannada Songs</small>
            <br/>
            </div>,
            
            <div>
            <h5>ARTIST ORIGINALS</h5>
            <small>Zaeden - Dooriyan</small>
            <br/>
            <small>Raghav - Sufi</small>
            <br/>
            <small>SIXK - Dansa</small>
            <br/>
            <small>Siri - My Jam</small>
            <br/>
            <small>Lost Stories, "Mai Ni Meriye"</small>
            </div>,
            
            <div>
            <h5>COMPANY</h5>
            <small>About us</small>
            <br/>
            <small>Culture</small>
            <br/>
            <small>Blog</small>
            <br/>
            <small>Jobs</small>
            <br/>
            <small>Press</small>
            <br/>
            <small>Advertise</small>
            <br/>
            <small>Terms & Privacy</small>
            <br/>
            <small>Help & Support</small>
            <br/>
            <small>Grivances</small>
            <br/>
            <small>Artist Originals</small>
            <br/>
            <small>JioSaavn Artist Insights</small>
            <br/>
            <small>JioSaavn Your</small>
           
            </div>
            
        </div>,
       
        
         <div style={{display:"flex",gap:"2%",color:"#3e3e3e"}}>
            <small>JioSaavn Pro</small>
            <small>JioSaavn for IOS</small>
            <small>JioSaavn for Android</small>
            <small>New Releases</small>
            <small>Sitemap</small>
         </div>,
         
         
         <div style={{display:"flex",color:"#3e3e3e" }}>
             <div><p>© 2022 Saavn Media Pvt Ltd</p></div>,
             
                 <div>
                     <img src={fb}/>
                    <img src={twitter}/>
                    <img src={youtube}/>
                    <img src={instagram}/>
                    <img src={linkedin}/>
                    
                 </div>
             
         </div>
         </div>
    );
};