import React, { Component } from "react";
import { connect } from "react-redux";

import { removeHero } from "../actions";

class HeroesList extends Component {
  state = {};

  render() {
    if (this.props.heroes.length > 0) {
      return (
        <ul className="list-group">
          {this.props.heroes.map(hero => {
            return (
              <li key={hero.id} className="list-group-item">
                <div className="list-item">{hero.name}</div>
                <div
                  onClick={() => this.props.removeHero(hero.id)}
                  className="list-item pull-right"
                >
                  x
                </div>
              </li>
            );
          })}
        </ul>
      );
    } else {
      return <h5 className="text-center">No hero selected</h5>;
    }
  }
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes
  };
}

export default connect(mapStateToProps, { removeHero })(HeroesList);
