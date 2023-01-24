import {useEffect, useState} from "react";

import {CarForm, Cars} from "./components";
import {carService} from "./service";


function App() {

  const [cars, setCars] = useState([]);

  useEffect( () => {
    carService.getAll().then(({data}) => setCars([...data]))

  },[])


  return (
    <div>
    <CarForm setCars={setCars}/>
      <hr/>
      <Cars cars={cars}/>
      <hr/>
    </div>
  );
}

export default App;
