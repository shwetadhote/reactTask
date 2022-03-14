//import Home from './Components/Home';
//import Array from './Components/Array';
//import Datetime from "./Components/Datetime";
//import Greetings from "./Components/Greetings";
//import Calc from './Components/Calc';
import Card from "./Components/Card.jsx";

const App = () => {
    return ( 
      <>
<h1 className="heading_style">
  List of 5 Netflix series
</h1>

      <Card imgsrc = "https://wallpapercave.com/wp/wp4056410.jpg"
sname = "Dark"
title = "A Netflix Original Series"
link = "https://www.netflix.com/in/title/80990668" />

<Card imgsrc = "https://m.media-amazon.com/images/M/MV5BMzM2NTAzMzYtNWVlNi00NzFmLWE3MjgtMWI5NWI2MjAzZjdmXkEyXkFqcGdeQXVyODE2MzY0ODM@._V1_.jpg"
sname = "extra curricular"
title = "A Netflix Original Series"
link = "https://www.netflix.com/in/title/80990668" />

<Card imgsrc = "https://flxt.tmsimg.com/assets/p12991700_b1t_v8_ab.jpg"
sname = "Stranger Things"
title = "A Netflix Original Series"
link = "https://www.netflix.com/in/title/80990668" />
      </>
    )
}  
export default App;