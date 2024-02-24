//import PlanetOne from './assets/planet-one.svg';
//import PlanetTwo from './assets/planet-two.svg';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import "./HomeScreen.css"
import PlanetOne from "./Planet.jpeg"
import PlanetTwo from "./PlanetTwo.jpeg"
export default function HomeScreen() {
    // Function to handle navigation when a planet is selected
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false)
    const navigateToLevel = (level) => {
      // This function will contain logic to navigate to different levels of the game
      console.log(`Navigate to level ${level}`);
      if (level === 1){
        navigate("/planetone")
        }
    else if (level === 2){
        navigate("/planettwo")

    }
      // In the web app, we might use React Router or state management to change views
    };
    const genreport = async () =>{
      setLoading(true)
      const response = await axios.get("https://anthropicapi-hrjw5cc7pa-uc.a.run.app/create_profile_for_teacher")
      let result = response.data
      console.log(result)
      setLoading(false)

    }
    // Render the HomeScreen component
    return (
      <div style={{backgroundColor:"#000000",height:window.innerHeight}} className="homeScreen">
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h1 style={{color:"white",fontSize:"50px",fontFamily:"sans-serif"}}>Cosmic Communication</h1>
        </div>
    
        <div className="planets">
          {/* Images for planets that users can click to select a level */}
          <img src={PlanetOne} style={{position:"absolute",left:"500px",top:"500px",borderRadius:"100px",cursor:"pointer"}} alt="Planet One" onClick={() => navigateToLevel(1)} />
          <img src={PlanetTwo} style={{position:"absolute",right:"500px",top:"300px",borderRadius:"100px",cursor:"pointer"}} alt="Planet One" onClick={() => navigateToLevel(2)} />


          <div style={{display:"flex",flexDirection:"column",marginLeft:"100px",gap:"10px"}}>
            <a  style={{backgroundColor:"white",width:"100px",padding:"5px",cursor:"pointer"}} onClick={() =>{navigate("/teachersarea")}}>
              <div style={{color:"black"}}>Teachers Page</div>
            </a>
            <a style={{backgroundColor:"white",width:"100px",padding:"5px",cursor:"pointer"}} onClick={() =>{navigate("/parentsarea")}}>
            <div style={{color:"black"}}>Parents Page</div>
            </a>
            <a style={{backgroundColor:"white",width:"100px",padding:"5px",cursor:"pointer"}} onClick={() =>{genreport()}}>
            <div style={{color:"black"}}>Generate Report</div>
            </a>
          </div>
          {loading === true &&
          <LoadingSpinner/>}
          {/* We can add more clickable planets here */}
        </div>
      </div>
    );
  }