import React from 'react'
import { Route, BrowserRouter, Switch } from "react-router-dom"
import HomeScreen from '../components/HomeScreen'
import Login from '../login/Login'
//import NextPage from './NextPage'
const Routing = () => {
    return (
        <div>
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/homescreen" component={HomeScreen}/>
            </Switch>
            </BrowserRouter>
            
        </div>
    )
}

export default Routing
