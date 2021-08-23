import React from 'react'
import { Route, BrowserRouter, Switch, Router } from "react-router-dom"
import HomeScreen from '../components/HomeScreen'
import Login from '../login/Login'
import AddEdit from "../editEmployee/AddEdit"
//import NextPage from './NextPage'
const Routing = () => {
    return (
        <div>
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/homescreen" component={HomeScreen}/>
                <Route exact path="/editpage" component={AddEdit}/>
            </Switch>
            </BrowserRouter>
            
        </div>
    )
}

export default Routing
