import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, weight, unit, url } = this.props;

    return (
      <div className="infos">
        <div className="text">
          <div className="name">{name}</div><br />
          {type}<br />
          Average Weight: {weight}{unit}<br />
        </div>
        <div className="image">
          <img src={url} ></img>
        </div>
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  weight: PropTypes.number,
  unit: PropTypes.string,
  url: PropTypes.string

}

export default Pokemon;
