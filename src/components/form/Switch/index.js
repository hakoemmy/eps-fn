import React from 'react';
import { Form, Switch } from "antd";
import PropTypes from 'prop-types';

import './index.scss';

const CustomSwitch = ({
  name,
  label,
  labelAlign,
  ...props
}) => {
  return <Form.Item
   valuePropName="checked"
   name={name}
   label={label}
   labelAlign={labelAlign}
   className="custom-antd-switch"
  >
    <Switch
      checkedChildren="Enabled"
      unCheckedChildren="Disabled"
      {...props}
    />
  </Form.Item>
};

CustomSwitch.defaultProps = {
  labelAlign: 'left'
}

CustomSwitch.propTypes = {
  name: PropTypes.string,
  label: PropTypes.node,
  labelAlign: PropTypes.string,
}

export default CustomSwitch;
