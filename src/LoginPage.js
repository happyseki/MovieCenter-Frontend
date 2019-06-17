import React from 'react'

class LoginPage extends React.Component {
  state = {
    username: "",
    password: ""
  }

  componentDidMount() {
    if (!!localStorage.getItem("token")) {
      this.props.history.push("/")
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLogin =(event) => {
    event.preventDefault()
    // console.log('state from handleLogin',this.state)
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(res => res.json())
      .then(data => {
        localStorage.setItem('token', data.token)
        this.props.history.push("/")
      })
  }

  render () {
    console.log("LoginPage props", this.props)
    return (
      <form onSubmit={this.handleLogin}>
        <input type="text" name="username" onChange={this.handleChange}/>
        <input type="password" name="password" onChange={this.handleChange}/>
        <input type="submit" value="Log in" />
      </form>
    )
  }
}


export default LoginPage
