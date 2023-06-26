import React, { useEffect, useState } from 'react'
import CitiesListComponent from './CitiesListComponent';

const StatesListComponent = ({setData}) => {
    const [states,setStates]=useState([]);
    const[selectedState,setSelectedState]=useState();
    const [stateName,setStateName]=useState('')

    console.log('statesssss',stateName)
useEffect(()=>{
    fetchStatesData();

},[]);
const fetchStatesData=async()=>{
    try{
        const response=await fetch ("http://api.minebrat.com/api/v1/states");
        const data=await response.json();
        console.log('datadata',data)
        setStates(data);
    } catch(error){
        console.error('unable to fetch states data',error)
    }
}
const stateChangeHandler=(event)=>{
    setSelectedState(event.target.value);
    const fetchStateName=states.find((state)=>state.stateId===event.target.value);
    setStateName(fetchStateName?.stateName)

}
  return (
    <div>
<select value={selectedState} onChange={stateChangeHandler}>
    <option value="">Select a State</option>
    {
        states.map((state)=>(
            <option key={state.stateId} value={state.stateId}>{state.stateName}</option>
        ))
    }
</select>
<CitiesListComponent selectedState={selectedState} stateName={stateName} setData={setData} />
    </div>
  )
}

export default StatesListComponent
