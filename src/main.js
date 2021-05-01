import React, { useState ,useEffect } from 'react' ;
import { Route } from 'react-router';
import './App.css';
import App from "./App"
import Data from './components/Data';
import Navbar from './components/Navbar';
//import Travellist from './components/Travellist';
import Image from './components/image'
import Addnewtour from './components/Addnewtour'
import Description from "./components/Description";
import{Link} from "react-router-dom"
import {Button} from "semantic-ui-react"

function Main() {
   
  const [city ,setCity]= useState(Data)
  const [interTours, setInterTours] = useState(Data);
  const [search,setSearch]=useState("")
  const add =(newadd)=>{
    setCity ([...city,newadd])
    
  }
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const refresh = () => {
    setInterTours(Data);
    setSearch("");
  };
  const deletecity =(id)=>{
    setInterTours (interTours.filter((cityy)=>cityy.id==!id))
    
  };
  
 
  const filtered = interTours.filter((cityy) =>
  cityy.name.toUpperCase().includes(search.toUpperCase())
);
const toggleRead = (id) => {
    setInterTours(
      interTours.map((cityy) =>
         cityy.id === id ? { ...cityy, read: !cityy.read } : city
      )
    );
};

  return (
    <div className="App">
     
    <Navbar setSearch={setSearch} search={search}/>
    <Route  exact path  = "/" component={Image}/>
    <Route
        path="/tours"
        render={() => (
          <div>
            <Link to="/">
              {" "}
              <Button
                style={{ marginLeft: "45%" }}
                content="retour page home"
                basic
                color="brown"
              />
            </Link>

            <App
              Data={Data}
              interTours={filtered}
              deletecity={deletecity}
              refresh={refresh}
              toggleRead={toggleRead}
            />
          </div>
            )}
            />
            <Route
        path="/addTour"
        render={() => (
          <div>
            {" "}
            <Link to="/">
              {" "}
              <Button
                style={{ marginLeft: "45%" }}
                content="retour page home"
                basic
                color="brown"
              />
            </Link>
            <Addnewtour Addnewtour={Addnewtour} />{" "}
          </div>
        )}
      />
      <Route
        path="/tour/:id"
        render={(props) => (
          <div>
            <Link to="/">
              {" "}
              <Button
                style={{ marginLeft: "45%" }}
                content="retour page home"
                basic
                color="brown"
              />
            </Link>

            <Description interTours={interTours} {...props} />
          </div>
        )}
      />
    </div>
  );
}

export default Main;