import React from "react";
import { Form } from "antd";
import PropTypes from "prop-types";
import DatePicker from "components/RawDatePicker";

import 'components/form/DatePicker/index.scss'

const CustomDatePicker = ({
  label,
  name,
  rules,
  hasFeedback,
  format,
  placeholder,
  size,
  className,
  formItemProps = {},
  ...datePickerProps
}) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={rules}
      hasFeedback={hasFeedback}
      {...formItemProps}
      className="custom-datepicker"
      labelAlign="left"
    >
      <DatePicker
       label={label}
       name={name}
       format={format}
       placeholder={placeholder}
       size={size}
       className={`input ${className}`}
       {...datePickerProps}
      />
    </Form.Item>
  );
};

export default CustomDatePicker;

CustomDatePicker.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  rules: PropTypes.arrayOf(PropTypes.object),
  format: PropTypes.string,
  formItemProps: PropTypes.objectOf(PropTypes.any),
  placeholder: PropTypes.string,
  hasFeedback: PropTypes.bool
}