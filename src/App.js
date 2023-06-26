import './App.css';
import StatesListComponent from './StatesListComponent';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import { ResultComponent } from './ResultComponent';
import { useState } from 'react';


function App() {
  const [data,setData]=useState({
    cityname:'',
    statename:''
  });
  console.log('citynamecityname',data)

  return (
    <div className="App ">
  

<Routes>
  <Route path='/' exact element={ <StatesListComponent setData={setData}/>}/>
  <Route path='/result' exact element={ <ResultComponent data={data}/>}/>

</Routes>
    </div>
  );
}

export default App;
