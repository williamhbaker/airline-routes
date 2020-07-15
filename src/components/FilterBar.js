import React from 'react';
import propTypes from 'prop-types';

import Select from './Select.js';

function FilterBar(props) {
  return (
    <div className="container">
      <nav className="level">
        <p className="level-item">Show routes on</p>
        <div className="level-item">
          <Select 
            allTitle="All Airlines"
            options={props.options(props.airlines, 'id')}
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
            options={props.options(props.airports, 'code')}
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
    </div>
  );
}

FilterBar.propTypes = {
  options: propTypes.func.isRequired,
  airlineFilterValue: propTypes.string.isRequired,
  airportFilterValue: propTypes.string.isRequired,
  onFilterSelect: propTypes.func.isRequired,
  onClearFilterClick: propTypes.func.isRequired,
  airlines: propTypes.array.isRequired,
  airports: propTypes.array.isRequired,
};

export default FilterBar;
