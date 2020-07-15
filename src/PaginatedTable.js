import React from 'react';
import propTypes from 'prop-types';

import Table from './Table.js';
import Paginator from './Paginator.js';

function PaginatedTable(props) {
  const maxPages = Math.ceil(props.rows.length / props.maxRows);
  const startingRow = (props.currentPage - 1) * props.maxRows;
  const boundedLimit = props.currentPage * props.maxRows;
  const endingRow = boundedLimit < props.rows.length ? boundedLimit : props.rows.length;
  const visibleRows = props.rows.slice(startingRow, endingRow);

  return (
    <section className="section" style={{paddingTop: '1rem'}}>
      <div className="container">
        <Table
          format={props.format}
          columns={props.columns}
          rows={visibleRows}
        />
        <Paginator
          maxPages={maxPages}
          currentPage={props.currentPage}
          onPageClick={props.onPageClick}
        />

        <p className='has-text-centered'>{`Showing ${startingRow + 1}-${endingRow} of ${props.rows.length} records.`}</p>
      </div>
    </section>
  );
}

PaginatedTable.propTypes = {
  format: propTypes.func.isRequired,
  columns: propTypes.array.isRequired,
  rows: propTypes.array.isRequired,
  currentPage: propTypes.number.isRequired,
  onPageClick: propTypes.func.isRequired,
  maxRows: propTypes.number.isRequired,
};

export default PaginatedTable;
