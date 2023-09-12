import React, { useState, useCallback } from 'react';
import { DatePicker, Button } from "antd";
import { debounce } from 'lodash';
import PropTypes from 'prop-types';
import moment from 'moment';


import prevIcon from '../../assets/icons/prev.svg';
import nextIcon from '../../assets/icons/next.svg';

const formats = {
  month: 'MMM YYYY',
  year: 'YYYY',
}

const DateIncrementor = ({
  picker,
  onChange,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const [displayValue, setDisplayValue] = useState(moment().format(formats[picker]))

  const onOpen = useCallback(() => {
    setOpen(true)
  }, []);

  const onClose = debounce(useCallback(() => {
    setOpen(false)
  }, []), 100);

  const onChangeHandler = (value) => {
    setDisplayValue(moment(value).format(formats[picker]));
    onChange(value)
  };

  const onNext = () => {
    const nextDate = moment(displayValue).add(1, picker);
    onChangeHandler(nextDate);
  };

  const onPrev = () => {
    const prevDate = moment(displayValue).add(-1, picker);
    onChangeHandler(prevDate)
  }

  return <div>
    <DatePicker
      className="invisible position-absolute"
      onOpenChange={onClose}
      open={open}
      picker={picker}
      onChange={onChangeHandler}
      defaultValue={moment(displayValue)}
      {...props}
    />
    <Button
      type="text"
      shape="circle"
      icon={<img src={prevIcon}
        alt="prev" />}
      onClick={onPrev}
    />
    <Button
      type="text"
      onClick={onOpen}>{displayValue}
    </Button>
    <Button
      type="text"
      shape="circle"
      icon={<img src={nextIcon} alt="next" />}
      onClick={onNext}
    />
  </div>
};

DateIncrementor.defaultProps = {
  picker: 'month',
  onChange: () => {}
}

DateIncrementor.propTypes = {
  picker: PropTypes.string,
  onChange: PropTypes.func
}

export default DateIncrementor;
