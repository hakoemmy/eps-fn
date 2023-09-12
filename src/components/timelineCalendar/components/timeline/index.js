import React from "react";
import classnames from "classnames";
import { Popover } from "antd";
import PropTypes from 'prop-types';

import Day from "components/timelineCalendar/components/day";
import './index.scss';

const getWith = (start, end) => {
  const diff = (end - start) + 1;
  const width = diff + diff * 50;
  return `${width}px`;
};

const Timeline = ({
  hasBorder,
  data,
  days = [],
}) => {
  const {
    startDate,
    title,
    color,
    endDate,
    renderPopover: RenderPopover,
    onEdit
  } = data;

  return (
    <div className="d-flex h-100">
      {days.map((day, index) => {
        if (startDate === day) {
          return (
            <Day
              hasBorder={hasBorder}
              className="cursor-pointer"
              key={index}>
              <Popover
                title={title}
                content={
                  <RenderPopover
                    data={data}
                    onEdit={onEdit}
                  />}
                  trigger="click"
                >
                <span
                  style={{ width: getWith(startDate, endDate) }}
                  className={classnames("p-1 rounded position-absolute", color)}
                >
                  {title}
                </span>
              </Popover>
            </Day>
          );
        }
        return <Day
          hasBorder={hasBorder}
          key={index}
        />;
      })}
    </div>
  );
};

Timeline.propTypes = {
  hasBorder: PropTypes.bool,
  data: PropTypes.object,
  days: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]))
}

Timeline.defaultProps = {
  hasBorder: false,
  data: {},
  days: []
};

export default Timeline;
