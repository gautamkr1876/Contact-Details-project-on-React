import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import DashboardPage from './pages/DashboardPage'
import Contact from './pages/Contact'
import Home from './pages/Home'
import { Link } from 'react-router-dom'



const App = () => {
  return (

<Router> 
<div className="App"> 
 <div className="App-header"> 
   <span className="home"> 
     <Link to="/">Home</Link> 
   </span> 
   <span className="home"> 
   <Link to="/posts" className="button">
      Details
    </Link>
   </span> 
 </div> 
 <Switch> 
   <Route exact path='/' component={Home}></Route> 
   <Route exact path="/posts"  component={Contact}></Route>  
 </Switch> 
 <div className="footer">Footer</div>
</div> 
</Router> 

    
  )
}

export default App