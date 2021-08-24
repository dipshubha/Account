import React from 'react'
import { Link } from 'react-router-dom'
import RJSlogo from '../assets/rjs-logo.png'
const Login = () => {
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
            <div style={{ height: "70%", width: "70%", position: "absolute", top: "60%", left: "50%", transform: "translate(-50%,-50%)" }}>
                        <div className="container">
                            <div className="row row-cols-2 row-cols-lg-4">
                                <div class="col">
                                    <div className=""></div>
                                </div>
                                <div className="col">
                                    <div className="">
                                        <label><strong>Gitlab Personal Access Token</strong></label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="">
                                        <input type="password"style={{ height: "50%", width: "100%" }} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className=""></div>
                                </div>

                            </div>
                            <br />
                            <div className="row row-cols-2 row-cols-lg-4">
                                <div className="col">
                                    <div className=""></div>
                                </div>
                                <div className="col">
                                    <div className="">
                                        <label><strong>Base API</strong></label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="">
                                        <input type="text" style={{ height: "50%", width: "100%" }} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className=""></div>
                                </div>

                            </div>
                            <div >
                                <button style={{ height: "50px", width: "48%",marginLeft:"15rem",marginTop:"2rem",background:"#3DB2FF" ,color:"white"}}><strong>Submit</strong> </button>
                            </div>

                        </div>
                    </div>
        </div>
    )
}

export default Login
