import { Form, Radio } from "antd";
import PropTypes from "prop-types";
import './index.scss';

const RadioGroup = ({ 
  options, 
  label, 
  name, 
  key, 
  hasFeedback, 
  rules,
  vertical,
  className,
  ...radioGroupProps
 }) => {
  return (
    <Form.Item
      options={options}
      label={label}
      name={name}
      key={key}
      hasFeedback={hasFeedback}
      rules={rules}
    >
      <Radio.Group
        className={`${vertical ? 'column' : 'row'} ${className}`}
        {...radioGroupProps}
       >
         {options.map(({ value, label }) => <Radio value={value}>{label}</Radio>)}
      </Radio.Group>
    </Form.Item>
  );
};

export default RadioGroup;

RadioGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.any),
};

RadioGroup.defaultProps = {
  options: [],
};
