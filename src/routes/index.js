import React from 'react'
import { Switch, Route } from 'react-router-dom'


import Dashboard from '../pages/Dashboard'
import Creating from '../pages/Creating'



const Routes= ()=>{
    return(
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/creating"  component={Creating} />

            {/* <Route path="/dashboard"  component={Dashboard} isPrivate /> */}
        </Switch>
    )
}

export default Routes