import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom';


function Hometest() {

  const location=useLocation()


  return (
    <div>
        <h2>Hello {location.state.id}</h2>
    </div>
  )
}

export default Hometest;