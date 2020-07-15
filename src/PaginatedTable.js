import React from 'react';
import propTypes from 'prop-types';

import Table from './Table.js';
import Paginator from './Paginator.js';


class PaginatedTable extends React.Component {
  static propTypes = {
    format: propTypes.func.isRequired,
    columns: propTypes.array.isRequired,
    rows: propTypes.array.isRequired,
    currentPage: propTypes.number.isRequired,
    onPageClick: propTypes.func.isRequired,
    maxRows: propTypes.number.isRequired,
  };

  maxPages = () => Math.ceil(this.props.rows.length / this.props.maxRows);

  startingRow = () => (this.props.currentPage - 1) * this.props.maxRows;

  endingRow = () => {
    const boundedLimit = this.props.currentPage * this.props.maxRows;
    return boundedLimit < this.props.rows.length ? boundedLimit : this.props.rows.length;
  }

  visibleRows = () => this.props.rows.slice(this.startingRow(), this.endingRow());

  render() {
    return (
      <section className="section" style={{paddingTop: '1rem'}}>
        <div className="container">
          <Table
            format={this.props.format}
            columns={this.props.columns}
            rows={this.visibleRows()}
          />
          <Paginator
            maxPages={this.maxPages()}
            currentPage={this.props.currentPage}
            onPageClick={this.props.onPageClick}
          />
          <p className='has-text-centered'>{`Showing ${this.startingRow() + 1}-${this.endingRow()} of ${this.props.rows.length} records.`}</p>
        </div>
      </section>
    );
  }
}

export default PaginatedTable;