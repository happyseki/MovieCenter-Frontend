import React, { Component } from 'react';

class Detail extends Component{
    render(){
      return(
        <div>
         {this.props.currentMovie.title}
        </div>
      )
    }

}

export default Detail;
