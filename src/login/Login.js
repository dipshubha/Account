import React, { useState } from 'react'
import { useHistory } from 'react-router'

const Login = () => {
    const history = useHistory();
    const admin = {
        email: "abc@gmail.com",
        password: "12345"
    }
    const [item, setItem] = useState({ em: "", pass: "" })
    const hSubmit = (e) => {
        e.preventDefault()
        console.log(item.em)
        console.log(item.pass)
        if (item.em === admin.email && item.pass===admin.password) {
            console.log("login")
            history.push("/homescreen")

        } else {
            console.log("not log in")
        }


    }
    const block1 = {
        height: "10%",
        width: "50%",
        // background: color,
        position: "absolute",
        top: "25%",
        left: "50%",
        transform: "translate(-50%,-50%)"
    }

    return (
        <form onSubmit={hSubmit}>
            <div>
                <div style={block1}>
                    <label>Enter Email Address</label>
                    <input className="form-control" type="email" name="email" id="email" placeholder="Enter Email" onChange={(e) => setItem({ ...item, em: e.target.value })} />
                    <br />
                    <br/>
                    <label>Enter Password</label>

                    <input className="form-control" type="password" name="password" id="password" placeholder="Enter Password" onChange={(e) => setItem({ ...item, pass: e.target.value })} />
                </div>
                <div style={{ position: "absolute", top: "60%", left: "50%", transform: "translate(-50%,-50%)" }}>
                    <button type="submit" style={{ height: "3rem", width: "12rem", background: "blue", color: "white", border: "none" }} >submit</button>
                </div>

            </div>
        </form>
    )
}

export default Login
