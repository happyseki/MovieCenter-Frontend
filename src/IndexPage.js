import React from 'react'

class IndexPage extends React.Component {
  componentDidMount() {
    fetch("http://localhost:3000/profile", {
      headers: {
        'Authorization': localStorage.getItem("token")
      }
    })
  }

  handleClick = () => {
    delete localStorage.token
  }

  render () {
    console.log("IndexPage")
    return (
      <div>
        "Hello from Index"
        <button onClick={this.handleClick}>Log out</button>
      </div>
    )
  }
}

export default IndexPage
