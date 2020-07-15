import React from 'react';
import propTypes from 'prop-types';

function Table(props) {
  return (
    <table className="table is-striped is-fullwidth" style={{margin: '0 auto'}}>
      <thead>
        <tr>
          {props.columns.map((col) => (
            <th key={col.property}>
              {col.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row) => (
          <tr key={row.id}>
            {props.columns.map((col) => (
              <td key={col.property}>
                {props.format(col.property, row[col.property])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  format: propTypes.func.isRequired,
  columns: propTypes.array.isRequired,
  rows: propTypes.array.isRequired,
};

export default Table;