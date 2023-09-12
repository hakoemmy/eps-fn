import React from "react";
import { Select } from "antd";
import PropTypes from "prop-types";

const RawSelect = ({ options, className, placeholder, size, ...props }) => {
  return (
    <span className={className}>
      <Select
        options={options}
        placeholder={placeholder}
        size={size}
        {...props}
      >
        {options.map((option) => (
          <Select.Option key={option.value} value={option.value}>
            {option.label}
          </Select.Option>
        ))}
      </Select>
    </span>
  );
};

export default RawSelect;

RawSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
};

RawSelect.defaultProps = {
  options: [],
  className: "",
  placeholder: "",
  size: "",
};
