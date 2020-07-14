import React from 'react';
import propTypes from 'prop-types';

function Select(props) {
  return (
    <div className="select is-rounded">
      <select
        onChange={props.onSelect}
      >
        <option>{props.allTitle}</option>
        {props.options.map((option) => (
          <option 
            key={option[props.valueKey]}
            value={option[props.valueKey]}
          >
            {option[props.titleKey]}
          </option>
        ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  allTitle: propTypes.string,
  options: propTypes.array,
  valueKey: propTypes.string,
  titleKey: propTypes.string,
  value: propTypes.string,
  onSelect: propTypes.func,
};

export default Select;