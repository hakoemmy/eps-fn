import React from 'react';
import { DatePicker } from "antd";
import PropTypes from "prop-types";

const RawDatePicker = ({
  format,
  ...props
}) => {
  return <DatePicker
  format={format}
  {...props}
  />
};

export default RawDatePicker;

RawDatePicker.propTypes = {
  format: PropTypes.string
}

RawDatePicker.defaultProps = {
  format: 'DD/MM/YYYY'
}
