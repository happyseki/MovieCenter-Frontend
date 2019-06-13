import React from 'react'

class SignUpPage extends React.Component {

handleLogin = (event) => {
  event.preventDefault()

  fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(this.state)
  }).then(res => res.json())
    .then(data => {
      localStorage.setItem('token', data.token)
      this.props.redirect("index")
    })

}

  render () {
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
