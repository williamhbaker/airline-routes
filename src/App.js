import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.sass';
import './App.css';

import Table from './Table.js';
import Header from './Header.js';
import Select from './Select.js';

import { routes, airlines, getAirlineById, getAirportByCode } from './data.js';

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

  handleSelect = (event) => {
    const selectedAirlineId = event.target.value;
    console.log(selectedAirlineId);
  };

  render() {
    return (
      <>
        <Header
          heading="Airline Routes"
        />
        <nav className="level" style={{margin: '1rem 0 auto'}}>
          <div className="level-item has-text-centered">
            <Select 
              allTitle="All Airlines"
              options={airlines}
              valueKey="id"
              titleKey="name"
              value=""
              onSelect={this.handleSelect}
            />
          </div>
        </nav>
        <section className="section" style={{paddingTop: '1rem'}}>
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
