import React from 'react';
import propTypes from 'prop-types';

import Paginator from './Paginator.js';

class Table extends React.Component {
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
      <div className="container">
        <table className="table is-striped is-fullwidth" style={{margin: '0 auto'}}>
          <thead>
            <tr>
              {this.props.columns.map((col) => (
                <th key={col.property}>
                  {col.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.visibleRows().map((row) => (
              <tr key={row.id}>
                {this.props.columns.map((col) => (
                  <td key={col.property}>
                    {this.props.format(col.property, row[col.property])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <Paginator
          maxPages={this.maxPages()}
          currentPage={this.props.currentPage}
          onPageClick={this.props.onPageClick}
        />
        <p className='has-text-centered'>{`Showing ${this.startingRow() + 1}-${this.endingRow()} of ${this.props.rows.length} records.`}</p>
      </div>
    );
  }
}

export default Table;