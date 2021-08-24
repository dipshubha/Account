import React from 'react'
import RJSlogo from '../assets/rjs-logo.png'
import { Link } from 'react-router-dom'

const Update = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm mt-2">
                    <div className="container">
                        <a href="https://rjs.in" target="_blank" className="navbar-brand text-dark"><img src={RJSlogo} alt="RJS" width="25" className="mr-2" /> HDFC Statement Converter</a>
                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <div className="icon mt-1"></div>
                            <div className="icon my-1"></div>
                            <div className="icon my-1"></div>
                        </button>
                        <div className="navbar-collapse collapse" id="navbarCollapse">
                            <ul className="navbar-nav nav-pills ml-auto mt-2">
                               
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle pointer" data-toggle="dropdown">Settings</a>
                                    <div className="dropdown-menu">
                                    <a className="dropdown-item p-0 px-2 pointer" data-toggle="modal" data-target="#clearDataModal"></a>
                                    <Link to="/"  style={{paddingLeft:"15px"}}>Login</Link><br/>
                                      <Link to="/edit"  style={{paddingLeft:"15px"}}>Edit</Link>  <br/>
                                      <Link to="/update"  style={{paddingLeft:"15px"}}>Update</Link>
                                            
                                            
                                    </div>
                                </li>
                                <li><a className="nav-item nav-link pointer" href="mailto:info@rjs.in" target="_blank" >Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            update
        </div>
    )
}

export default Update
