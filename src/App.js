import React from 'react';

import './App.sass';
import './App.css';

import Table from './Table.js';

import airlineData from './data.js';

export default class App extends React.Component {

  render() {
    return (
      <>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
                Airline Routes
              </h1>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <Table
              routes={airlineData.routes}
            />
          </div>
        </section>
      </>
    );
  }
}
