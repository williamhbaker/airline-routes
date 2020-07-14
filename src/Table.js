import React from 'react';
import propTypes from 'prop-types';

function Table(props) {
  return (
    <table className="table is-striped is-fullwidth" style={{margin: '0 auto'}}>
      <thead>
        <tr>
          <th>Airline</th>
          <th>Source Airport</th>
          <th>Destination Airport</th>
        </tr>
      </thead>
      <tbody>
        {props.routes.map((route) => {
          return (
            <tr key={route.id}>
              <td>{route.airline}</td>
              <td>{route.src}</td>
              <td>{route.dest}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  routes: propTypes.array.isRequired,
};

export default Table;