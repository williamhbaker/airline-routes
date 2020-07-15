import React from 'react';
import propTypes from 'prop-types';

import Select from './Select.js';

import { airlines, airports } from './data.js';

function FilterBar(props) {
  return (
    <nav className="level" style={{margin: '1rem 0 auto'}}>
      <div className="level-item has-text-centered">
        <p style={{marginRight: '0.5rem'}}>Show routes on</p>
        <Select 
          allTitle="All Airlines"
          options={props.options(airlines, 'id')}
          valueKey="id"
          titleKey="name"
          value={props.airlineFilterValue}
          onSelect={(event) => props.onFilterSelect('airlineFilter', event.target.value)}
        />
        <p style={{margin: 'auto 0.5rem'}}>flying in or out of</p>
        <Select 
          allTitle="All Airports"
          options={props.options(airports, 'code')}
          valueKey="code"
          titleKey="name"
          value={props.airportFilterValue}
          onSelect={(event) => props.onFilterSelect('airportFilter', event.target.value)}
        />
        <button
          className="button is-warning"
          style={{marginLeft: '0.5rem'}}
          onClick={props.onClearFilterClick}
        >
          Clear Filters
        </button>
      </div>
    </nav>
  );
}

FilterBar.propTypes = {
  options: propTypes.func.isRequired,
  airlineFilterValue: propTypes.string.isRequired,
  airportFilterValue: propTypes.string.isRequired,
  onFilterSelect: propTypes.func.isRequired,
  onClearFilterClick: propTypes.func.isRequired,
};

export default FilterBar;
