import React, { useEffect, useState } from "react";

import {useNavigate} from 'react-router-dom'

const CitiesListComponent = ({ selectedState,stateName,setData }) => {
    console.log('selectedStateeeee',selectedState)
  const [cityList, setCityList] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const navigate=useNavigate();
  console.log('selectedCity',selectedCity)
  useEffect(() => {
    if (selectedState) {
      FetchCitiesData(selectedState);
    } else {
      setCityList([]);
    }
  }, [selectedState]);
  const FetchCitiesData = async (stateId) => {
    try {
      const response = await fetch(
        `http://api.minebrat.com/api/v1/states/cities/${stateId}`
      );
      const data = await response.json();
      setCityList(data);
    } catch (error) {
      console.error("unable to fetch cities list", error);
    }
  };

  const cityChangeHandler=(e)=>{
    setSelectedCity(e.target.value);
  }
  const handleSubmit=(e)=>{
    setData({
        cityname:selectedCity,
        statename:stateName  
    })
    navigate('/result')

  }
  console.log()
 
  return (
<>
    <select value={selectedCity} onChange={cityChangeHandler}>
        <option value=''>Select a City</option>
        {
         cityList.map((city)=>(
            <option key={city.cityId} value={city.cityName}>{city.cityName}</option>
         ))   
        }
    </select>
    <br/>
    <button onClick={handleSubmit}>Submit Data</button>
    
    </>
  )
};

export default CitiesListComponent;
