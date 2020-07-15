import React from 'react';
import propTypes from 'prop-types';

import Select from './Select.js';

import { airlines, airports } from './data.js';

function FilterBar(props) {
  return (
    <nav className="level">
      <p className="level-item">Show routes on</p>
      <div className="level-item">
        <Select 
          allTitle="All Airlines"
          options={props.options(airlines, 'id')}
          valueKey="id"
          titleKey="name"
          value={props.airlineFilterValue}
          onSelect={(event) => props.onFilterSelect('airlineFilter', event.target.value)}
        />
      </div>
      <p className="level-item">flying in or out of</p>
      <div className="level-item">
        <Select 
          allTitle="All Airports"
          options={props.options(airports, 'code')}
          valueKey="code"
          titleKey="name"
          value={props.airportFilterValue}
          onSelect={(event) => props.onFilterSelect('airportFilter', event.target.value)}
        />
      </div>
      <div className="level-item">
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
