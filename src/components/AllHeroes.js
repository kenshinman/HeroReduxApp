import React, { Component } from "react";
import { connect } from "react-redux";

import { createCharacter } from "../actions/characters";

class AllHeroes extends Component {
  state = {};

  render() {
    return (
      <ul className="list-group">
        {this.props.characters.map(character => {
          return (
            <li key={character.id} className="list-group-item">
              <div className="list-item">{character.name}</div>
              <div
                onClick={() => this.props.createCharacter(character.id)}
                className="list-item pull-right"
              >
                +
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    characters: state.characters
  };
}

export default connect(mapStateToProps, { createCharacter })(AllHeroes);
