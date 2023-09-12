import React from "react";
import { Form } from "antd";
import PropTypes from "prop-types";
import Select from 'components/RawSelect';

import 'components/form/Select/index.scss'

const CustomSelect = ({
  label,
  name,
  rules,
  hasFeedback,
  options,
  className,
  placeholder,
  size,
  ...props
}) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={rules}
      hasFeedback={hasFeedback}
      className="form-custom-select"
      labelAlign="left"
    >
      <Select
        className={`input ${className}`}
        placeholder={placeholder}
        size={size}
        options={options}
        {...props}
      />
    </Form.Item>
  );
};

export default CustomSelect;

CustomSelect.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  rules: PropTypes.arrayOf(PropTypes.object),
  hasFeedback: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object),
};

CustomSelect.defaultProps = {
  label: "",
  name: "",
  rules: [],
  options: [],
};
