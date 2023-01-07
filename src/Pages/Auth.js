
import React, { useState } from "react"
import "../Css/Auth.css"
import axios from "axios"

export default function Auth (props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

    const login_submit = (e) => {
        e.preventDefault();
        const form_data = {
          "username":username,
          "password":password
        }
        console.log(form_data);
        axios.post(`http://localhost:5000/${props.type}/login`, form_data)
            .then(res => {
                console.log(res.data)
                    localStorage.setItem("token", res.data.data.token);
                    localStorage.setItem("username", res.data.data.username);
                    window.location = props.type === "doctor" ? "/dashboard" : "/"
            })
            .catch(err => {
                console.log(err)
            })
    }


  return (
      <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="email"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              className="form-control mt-1"
              placeholder="Enter Username"
            />
          </div>
          <div className="form-group mt-4">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-4">
            <button type="submit" onClick={(e)=> login_submit(e)} className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-3">
            Forgot <a href="/user/forgotPassword">password?</a>
          </p>
        </div>
      </form>
      </div>
  )
}