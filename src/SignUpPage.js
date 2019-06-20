import React from 'react';
import { Redirect } from 'react-router-dom';

class SignUpPage extends React.Component {

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
        localStorage.setItem('token', data.token)
      })
      .then(blah => <Redirect to='/' />)
  }

  render () {
    // console.log(this.props.redirect())
    return (
      <form onSubmit={this.handleLogin}>
        <input type="text" name="username" onChange={this.handleChange}/>
        <input type="password" name="password" onChange={this.handleChange}/>
        <input type="submit" value="Log in" />
      </form>
    )
  }
}

export default SignUpPage
