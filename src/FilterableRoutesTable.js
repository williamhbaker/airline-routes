import React from 'react';
import propTypes from 'prop-types';

import PaginatedTable from './PaginatedTable.js';
import FilterBar from './FilterBar.js';

import { getAirlineById, getAirportByCode } from './data.js';

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
      <FilterBar
        options={props.options}
        airlineFilterValue={props.airlineFilterValue}
        airportFilterValue={props.airportFilterValue}
        onFilterSelect={props.onFilterSelect}
        onClearFilterClick={props.onClearFilterClick}
      />
      <PaginatedTable
        format={formatValue}
        columns={columns}
        rows={props.rows}
        currentPage={props.currentPage}
        onPageClick={props.onPageClick}
        maxRows={25}
      />
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