import React from 'react'

export const ResultComponent = ({data}) => {
    console.log('stateNamestateName',data)
  return (
    
    <div>
        <h1>You Have selected the State:{data.statename}</h1>
        <h1>You Have selected the City :{data.cityname}</h1>
    </div>
  )
}
