import React, { Component } from "react";
import AllHeroes from './AllHeroes';
import HeroesList from './HeroesList'
import SquadStats from './SquadStats'
import '../styles.css'

export default class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h2 className="text-center">Welcome Hero Maker!</h2>
        <div className="row">
          <div className="col-sm-4">
          <h4 className="text-center" >All Heroes</h4>
            <AllHeroes />
          </div>
          <div className="col-sm-4">
            <h4 className="text-center" >My Heroes</h4>
            <HeroesList/>
          </div>
          <div className="col-sm-4">
            <h4 className="text-center">Squad Stats</h4>
            <SquadStats />
          </div>
        </div>
      </div>
    );
  }
}

