import React from "react";
import { Input, Form } from "antd";
import classNames from "classnames";
import PropTypes from 'prop-types';

import "components/form/TextArea/index.scss";

const { TextArea } = Input;

const CustomTextArea = ({
  label,
  name,
  rules,
  hasFeedback,
  className,
  ...props
}) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={rules}
      hasFeedback={hasFeedback}
      className={classNames("custom-textarea", className)}
      labelAlign="left"
    >
      <TextArea 
       autoSize
       name={name}
      {...props} 
      />
    </Form.Item>
  );
};

CustomTextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  rules: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
  hasFeedback: PropTypes.bool
};

CustomTextArea.defaultProps = {
  label: '',
  rules: [],
  className: '',
  hasFeedback: false
};

export default CustomTextArea;
