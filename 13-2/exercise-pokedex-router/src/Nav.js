import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/favoritepokemon'>Favorite Pokemon</Link>
      </div>
    )
  }
}

export default Nav;