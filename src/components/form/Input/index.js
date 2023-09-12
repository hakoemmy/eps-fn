import React from "react";
import { Form, Input, InputNumber } from "antd";
import PropTypes from "prop-types";
import classnames from "classnames";
import checkMinAndMax from "helpers/validators/checkMinAndMax";
import "./index.scss";

const CustomInput = ({
  rules = [],
  hasFeedback,
  label,
  placeholder,
  size,
  className = "",
  name,
  suffix,
  type = "text",
  inputProps = {},
  id,
  formItemProps = {},
  value,
  onChange = () => {},
  children,
  arrowsEnabled = false,
}) => {
  const allInputProps = {
    label,
    placeholder,
    size,
    className: classnames(
      "input",
      "w-100",
      className,
      type === "number" && {
        "arrows-enabled": arrowsEnabled,
        "arrows-disabled": !arrowsEnabled,
      }
    ),
    name,
    suffix,
    type,
    ...inputProps,
    id,
    value,
    onChange,
  };

  return (
    <Form.Item
      hasFeedback={hasFeedback}
      rules={[...rules, checkMinAndMax(label, inputProps)]}
      label={label}
      name={name}
      {...formItemProps}
      extra={children}
      labelAlign="left"
      className="custom-input"
    >
      {type === "number" ? (
        <InputNumber {...allInputProps} />
      ) : (
        <Input {...allInputProps} />
      )}
    </Form.Item>
  );
};

CustomInput.propTypes = {
  rules: PropTypes.array,
  hasFeedback: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  inputProps: PropTypes.object,
  formItemProps: PropTypes.object,
  suffix: PropTypes.node,
  type: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.node,
  id: PropTypes.string,
  value: PropTypes.string,
};

export default CustomInput;
