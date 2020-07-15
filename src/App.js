import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.sass';
import './App.css';

import Header from './components/Header.js';
import FilterableRoutesTable from './components/FilterableRoutesTable.js';
import Map from './components/Map.js';

import { routes } from './data.js';

const allRoutes = routes.map((route) => Object.assign(route, { id: uuidv4() }));

export default class App extends React.Component {
  state = {
    airlineFilter: "",
    airportFilter: "",
    currentPage: 1,
  };

  optionsWithDisabled = (options, identifier) => {
    let filterObjectKey;

    if (identifier === 'id') {
      filterObjectKey = 'airlineFilter';
    } else if (identifier === 'code') {
      filterObjectKey = 'airportFilter';
    }

    return options.map((option) => {
      const filterObj = {};
      filterObj[filterObjectKey] = option[identifier]
      const disabled = this.filteredRoutes(filterObj).length === 0;
      return Object.assign({}, option, { disabled });
    });
  }

  filteredRoutes = (filterObj = {}) => {
    const airlineFilter = filterObj.airlineFilter || this.state.airlineFilter;
    const airportFilter = filterObj.airportFilter || this.state.airportFilter;

    const byAirline = this.filteredRoutesBy(allRoutes, airlineFilter, ['airline'])
    return this.filteredRoutesBy(byAirline, airportFilter, ['src', 'dest']);
  };


  filteredRoutesBy = (routes, filter, identifiersArr) => {
    if (filter === "") {
      return routes;
    } else {
      return routes.filter((route) => {
        return identifiersArr.some((identifier) => String(route[identifier]) === String(filter));
      });
    }
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

  handleFilterSelect = (filterName, newValue) => {
    const newState = { currentPage: 1 };
    newState[filterName] = newValue;

    this.setState(newState);
  }

  render() {
    return (
      <>
        <Header
          heading="Airline Routes"
        />
        <Map
          routes={this.filteredRoutes()}
        />
        <FilterableRoutesTable
          options={this.optionsWithDisabled}
          airlineFilterValue={this.state.airlineFilter}
          onFilterSelect={this.handleFilterSelect}
          airportFilterValue={this.state.airportFilter}
          onClearFilterClick={this.handleClearFilterClick}
          rows={this.filteredRoutes()}
          currentPage={this.state.currentPage}
          onPageClick={this.handlePageClick}
        />
      </>
    );
  }
}
