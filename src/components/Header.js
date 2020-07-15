import React from 'react';

export default function Header(props) {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            {props.heading}
          </h1>
        </div>
      </div>
    </section>
  );
}