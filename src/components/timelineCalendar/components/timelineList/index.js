import React from "react";
import { Col, Row } from "antd";
import moment from "moment";
import Day from "components/timelineCalendar/components/day";
import Timeline from "components/timelineCalendar/components/timeline";

const TimelinePlaceholder = ({ days }) => {
  return (
    <div className="d-flex h-100">
      {days.map((day) => (
        <Day key={day} hasBorder />
      ))}
    </div>
  );
};

const TimelineList = ({ 
  timelines, 
  days, 
  month
}) => {

  const getMonth = (date) => {
    return moment(date).format('MMM YYYY');
  }
  const getDate = (date) => {
    return parseInt(moment(date).format('D'))
  }
  const getDateRange = (start, end) => {
    const currentMonth = getMonth(month);
    const startMonth = getMonth(start);
    const endMonth = getMonth(end);
    const isBetweenStartAndEnd = moment(currentMonth).isBetween(start, end);
    if (startMonth === currentMonth) {
      return {
        startDate: getDate(start),
        endDate: getDate(end),
      };
    } else if (
      isBetweenStartAndEnd &&
      currentMonth === endMonth
    ) {
      return {
        startDate: 1,
        endDate: getDate(end),
      };
    } else if (isBetweenStartAndEnd) {
      return {
        startDate: 1,
        endDate: days.length,
      };
    }
    return null;
  };

  const filteredTimelines = timelines.filter(({ start, end }) =>
    getDateRange(start, end)
  );

  return !filteredTimelines.length ? (
    <TimelinePlaceholder days={days} />
  ) : (
    filteredTimelines.map((data = {}, index, filteredTimelines) => (
      <Row key={index}>
        <Col span={24}>
          <Timeline
            days={days}
            data={{
              ...data,
              ...getDateRange(data.start, data.end),
            }}
            hasBorder={index === filteredTimelines.length - 1}
            month={month}
          />
        </Col>
      </Row>
    ))
  );
};

TimelineList.propTypes = {
}

TimelineList.defaultProps = {
};

export default TimelineList;
