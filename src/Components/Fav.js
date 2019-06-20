import React, { Component } from 'react';

class Fav extends Component {

  render() {
     return (
       <div className='favorites'>
         <h1>Favorites:</h1>
           <div>
             <h2>{this.props.favorite.title}</h2>
             <img src={this.props.favorite.poster} alt='favImage'/> <br/>
             <button onClick={()=>this.props.removeFavorite(this.props.favorite)}>
               Remove Favorite
             </button>
           </div>
       </div>
     );
   }

}

export default Fav;
