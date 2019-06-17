import React, { Component } from 'react';

class Top5 extends Component {
  state ={
    top5: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/movies/top5")
    .then(res => res.json())
    .then(movies => {
      this.setState({
        top5: movies
      })
    })
  }

  render() {
    console.log("in Top5", this.state)
    return (
      <div>Top5</div>

    );
  }

}

export default Top5;
