import React from 'react';
import propTypes from 'prop-types';

import Select from './Select.js';
import Table from './Table.js';

import { airlines, airports, getAirlineById, getAirportByCode } from './data.js';

const columns = [
  {name: 'Airline', property: 'airline'},
  {name: 'Source Airport', property: 'src'},
  {name: 'Destination Airport', property: 'dest'},
];

const formatValue = (property, value) => {
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

function FilterableRoutesTable(props) {
  return (
    <>
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
      <section className="section" style={{paddingTop: '1rem'}}>
        <Table
          format={formatValue}
          columns={columns}
          rows={props.rows}
          currentPage={props.currentPage}
          onPageClick={props.onPageClick}
          maxRows={25}
        />
      </section>
    </>
  );
}

FilterableRoutesTable.propTypes = {
  options: propTypes.func.isRequired,
  airlineFilterValue: propTypes.string.isRequired,
  onFilterSelect: propTypes.func.isRequired,
  airportFilterValue: propTypes.string.isRequired,
  onClearFilterClick: propTypes.func.isRequired,
  rows: propTypes.array.isRequired,
  currentPage: propTypes.number.isRequired,
  onPageClick: propTypes.func.isRequired,
};

export default FilterableRoutesTable;