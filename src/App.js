import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.sass';
import './App.css';

import Table from './Table.js';
import Header from './Header.js';
import Select from './Select.js';

import { routes, airlines, airports, getAirlineById, getAirportByCode } from './data.js';

const columns = [
  {name: 'Airline', property: 'airline'},
  {name: 'Source Airport', property: 'src'},
  {name: 'Destination Airport', property: 'dest'},
];

const allRoutes = routes.map((route) => Object.assign(route, { id: uuidv4() }));

export default class App extends React.Component {
  state = {
    airlineFilter: "",
    airportFilter: "",
    currentPage: 1,
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

  handlePageClick = (event) => {
    const clickedPage = Number(event.target.dataset.page);
    this.setState({
      currentPage: clickedPage,
    });
  };

  handleClearFilterClick = (event) => {
    event.preventDefault();
    this.setState({
      airlineFilter: "",
      airportFilter: "",
      currentPage: 1,
    });
  };

  handleAirlineFilterSelect = (event) => {
    const airlineFilter = event.target.value;
    this.setState({
      airlineFilter,
      currentPage: 1,
    });
  };

  handleAirportFilterSelect = (event) => {
    const airportFilter = event.target.value;
    this.setState({
      airportFilter,
      currentPage: 1,
    });
  };

  filteredRoutes = () => {
    return this.filterByAirport(this.filterByAirline(allRoutes));
  };

  filterByAirport = (routes) => {
    if (this.state.airportFilter === "") {
      return routes;
    } else {
      return routes.filter((route) => (
        route.src === this.state.airportFilter ||
        route.dest === this.state.airportFilter
      ));
    }
  };

  filterByAirline = (routes) => {
    if (this.state.airlineFilter === "") {
      return routes;
    } else {
      return routes.filter((route) => (
        String(route.airline) === this.state.airlineFilter
      ));
    }
  };

  render() {
    return (
      <>
        <Header
          heading="Airline Routes"
        />
        <nav className="level" style={{margin: '1rem 0 auto'}}>
          <div className="level-item has-text-centered">
            <p style={{marginRight: '0.5rem'}}>Show routes on</p>
            <Select 
              allTitle="All Airlines"
              options={airlines}
              valueKey="id"
              titleKey="name"
              value={this.state.airlineFilter}
              onSelect={this.handleAirlineFilterSelect}
            />
            <p style={{margin: 'auto 0.5rem'}}>flying in or out of</p>
            <Select 
              allTitle="All Airports"
              options={airports}
              valueKey="code"
              titleKey="name"
              value={this.state.airportFilter}
              onSelect={this.handleAirportFilterSelect}
            />
            <button
              className="button is-warning"
              style={{marginLeft: '0.5rem'}}
              onClick={this.handleClearFilterClick}
            >
              Clear Filters
            </button>
          </div>
        </nav>
        <section className="section" style={{paddingTop: '1rem'}}>
          <Table
            format={this.formatValue}
            columns={columns}
            rows={this.filteredRoutes()}
            currentPage={this.state.currentPage}
            onPageClick={this.handlePageClick}
            maxRows={25}
          />
        </section>
      </>
    );
  }
}
