import React from 'react';
import propTypes from 'prop-types';

import Paginator from './Paginator.js';

class Table extends React.Component {
  static propTypes = {
    format: propTypes.func.isRequired,
    columns: propTypes.array.isRequired,
    rows: propTypes.array.isRequired,
    maxRows: propTypes.number,
  };

  state = {
    currentPage: 1,
  }

  maxPages = () => Math.ceil(this.props.rows.length / this.props.maxRows);

  startingRow = () => (this.state.currentPage - 1) * this.props.maxRows;

  endingRow = () => this.state.currentPage * this.props.maxRows

  visibleRows = () => this.props.rows.slice(this.startingRow(), this.endingRow());

  handlePageClick = (event) => {
    const clickedPage = Number(event.target.dataset.page);
    this.setState({
      currentPage: clickedPage,
    });
  };

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
          currentPage={this.state.currentPage}
          onPageClick={this.handlePageClick}
        />
        <p className='has-text-centered'>{`Showing ${this.startingRow() + 1}-${this.endingRow()} of ${this.props.rows.length} records.`}</p>
      </div>
    );
  }
}

export default Table;