import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.sass';
import './App.css';

import Table from './Table.js';

import { routes, getAirlineById, getAirportByCode } from './data.js';

const columns = [
  {name: 'Airline', property: 'airline'},
  {name: 'Source Airport', property: 'src'},
  {name: 'Destination Airport', property: 'dest'},
];

export default class App extends React.Component {
  state = {
    allRoutes: routes.map((route) => Object.assign(route, { id: uuidv4() })),
  };

  formatValue = (property, value) => {
    switch (property) {
      case 'airline':
        return getAirlineById(value);
      case 'src':
        return getAirportByCode(value);
      case 'dest':
        return getAirportByCode(value);
      default:
        return value;
    };
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
          <Table
            format={this.formatValue}
            columns={columns}
            rows={this.state.allRoutes}
            maxRows={25}
          />
        </section>
      </>
    );
  }
}
