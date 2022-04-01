
import './App.css'
import { Footer } from './components/Footer/Footer';
import { Chart } from './components/charts/Charts';
import { TopPlaylists } from './components/TopPlaylists/TopPlayLists';
import {Routes,Route} from "react-router-dom";
import {Link} from "react-router-dom"

function App() {


  return (
    <div className="App">
      <h1>saavan</h1>

      <div className='link_names'>
        <Link to="/charts" >Charts</Link>
        <Link to="/featured-playlists">Top Playlists</Link>
      </div>

      <Routes>
        <Route path="/charts" element={<Chart/>}/>
        <Route path="/featured-playlists" element={<TopPlaylists/>}/>
      </Routes>

      
      <Footer/>
    </div>
  )
}

export default App
