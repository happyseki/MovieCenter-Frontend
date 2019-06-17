import React, { Component } from 'react';

class Search extends Component {


  render() {
    return (
      <div className="filter" >
      <input
        id="search-bar"
        type="text"
        placeholder="Search Movies"
       onChange={this.props.userInput}
      />
    </div>
    );
  }

}

export default Search;
