import React, { Component } from "react";
import { connect } from "react-redux";

import { removeHero } from "../actions";

class SquadStats extends Component {
  state = {};

  _renderStrength() {
    let strength = 0;
    this.props.heroes.forEach(hero => (strength += hero.strength));
    return strength;
  }
  _renderSpeed() {
    let speed = 0;
    this.props.heroes.forEach(hero => (speed += hero.speed));
    return speed;
  }
  
  _renderIntel() {
    let intelligence = 0;
    this.props.heroes.forEach(hero => (intelligence += hero.intelligence));
    return intelligence;
  }

  render() {
    if (this.props.heroes.length > 0) {
      return (
        <ul className="list-group">
          <li className="list-group-item">
            <div className="list-item">Strength</div>
            <div className="list-item pull-right">{this._renderStrength()}</div>
          </li>
          <li className="list-group-item">
            <div className="list-item">Speed</div>
            <div className="list-item pull-right">{this._renderSpeed()}</div>
          </li>
          <li className="list-group-item">
            <div className="list-item">Speed</div>
            <div className="list-item pull-right">{this._renderIntel()}</div>
          </li>
        </ul>
      );
    } else {
      return <h5 className="text-center">No stats available</h5>;
    }
  }
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes
  };
}

export default connect(mapStateToProps, null)(SquadStats);
