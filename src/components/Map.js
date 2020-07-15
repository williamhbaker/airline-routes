import React from 'react';
import propTypes from 'prop-types';

import { getAirportInfoByCode } from '../data.js';

function Map(props) {
  const paths = props.routes.map((route) => {
    const source = getAirportInfoByCode(route.src);
    const dest = getAirportInfoByCode(route.dest);

    return {
      airline: route.airline,
      sourceName: source.name,
      destinationName: dest.name,
      x1: source.long,
      y1: source.lat,
      x2: dest.long,
      y2: dest.lat,
    }
  });

  return (
    <section className="section">
      <div className="container" style={{textAlign: 'center'}}>
        <svg className="map" viewBox="-180 -90 360 180">
          <g transform="scale(1 -1)">
            <image xlinkHref="equirectangular_world.jpg" href="equirectangular_world.jpg" x="-180" y="-90" height="100%" width="100%" transform="scale(1 -1)"/>
            
            {paths.map((path) => (
              <g key={`${path.sourceName} to ${path.destinationName} by ${path.airline}`}>
                <circle className="source" cx={path.x1} cy={path.y1}>
                  <title>{path.sourceName}</title>
                </circle> 
                <circle className="destination" cx={path.x2} cy={path.y2}>
                  <title>{path.destinationName}</title>
                </circle>
                <path d={`M${path.x1} ${path.y1} L ${path.x2} ${path.y2}`} />
              </g>
            ))}
            
          </g>
        </svg>
      </div>
    </section>
  );
}

Map.propTypes = {
  routes: propTypes.array.isRequired,
};

export default Map;