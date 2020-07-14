import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.sass';
import './App.css';

import Table from './Table.js';

import { routes, getAirlineById, getAirportByCode } from './data.js';

export default class App extends React.Component {

  humanReadableRoutes = () => {
    return routes.map((route) => {
      return {
        id: uuidv4(),
        airline: getAirlineById(route.airline),
        src: getAirportByCode(route.src),
        dest: getAirportByCode(route.dest),
      };
    });
  };

  render() {
    return (
      <>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
                Airline Routes
              </h1>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <Table
              routes={this.humanReadableRoutes()}
            />
          </div>
        </section>
      </>
    );
  }
}
