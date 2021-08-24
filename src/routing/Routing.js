import React from 'react'
import { Route, BrowserRouter, Switch, Router } from "react-router-dom"
import HomeScreen from '../components/HomeScreen'
// import Login from '../login/Login'
import Login from '../mainCom/Login'
import AddEdit from "../editEmployee/AddEdit"
import EditEmp from '../mainCom/EditEmp'
import Update from '../mainCom/Update'

//import NextPage from './NextPage'
const Routing = () => {
    return (
        <div>
            <BrowserRouter>
          
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/edit" component={EditEmp}/>
                <Route exact path="/update" component={Update}/>
            </Switch>
            </BrowserRouter>
            
        </div>
    )
}

export default Routing
