import React from 'react'
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import App from '../App'
import LocationMap from '../LocationMap'
function Routing() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route patth='/loc' element={<LocationMap/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default Routing
