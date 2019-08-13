import React from 'react';
// import { Redirect } from 'react-router-dom';

class SignUpPage extends React.Component {
  state = {
    username: "",
    password: ""
  }

  handleLogin = (event) => {
    event.preventDefault()
    console.log(event.target)
    console.log(event.target.username.value)
    console.log(event.target.password.value)

    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        username: event.target.username.value,
        password: event.target.password.value
      })
    }).then(res => res.json())
      .then(data => {
        console.log("in signup",data)
        localStorage.setItem('token', data.token)
        this.props.history.push("/login")
      })

  }

  render () {
     console.log(this.props)
    return (
      <form onSubmit={this.handleLogin}>
        <input type="text" name="username" onChange={this.handleChange}/>
        <input type="password" name="password" onChange={this.handleChange}/>
        <input type="submit" value="Sign up"/>
      </form>
    )
  }
}

export default SignUpPage
