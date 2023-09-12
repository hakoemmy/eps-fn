import React, { 
  useRef, 
  useMemo, 
  createRef,
  useState,
  useEffect,
  useCallback
} from 'react';
import PropTypes from "prop-types";
import { Col, Row, Spin, Empty } from 'antd';
import { range } from 'lodash';
import moment from 'moment';

import LegendGroup from './components/legendGroup';
import TimelineHeader from './components/timelineHeader';
import TimelineList from './components/timelineList';

import './index.scss';
import Logger from 'services/logger';


const Loader = () => {
  return <div className="w-100 d-flex align-items-center justify-content-center mt-4">
    <Spin size="large" />
  </div>
}

const EmptyState = () => {
  return <div className="w-100 d-flex align-items-center justify-content-center mt-4">
    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
  </div>
}

const TimelineCalendar = ({ 
  timelines = [], 
  legends = [], 
  month,
  loading
 }) => {
  const [noOfDays, setNoOfDays] = useState(moment(month).daysInMonth());
  const days = range(1, noOfDays + 1);
  const headerRef = useRef();

  const truckRefs = useMemo(() => Array(timelines.length).fill().map(() => createRef()), [timelines])

  const onScrollX = useCallback((e) => {
    try {
      const scrollWidth = e.target.scrollLeft;
      headerRef.current.scrollLeft = scrollWidth;
      truckRefs.forEach(truckRef => truckRef.current.scrollLeft = scrollWidth);
    } catch(error) {
      Logger.log(error);
    }
  }, [truckRefs]);

  useEffect(() => {
    setNoOfDays(moment(month).daysInMonth());
  }, [month]);

  useEffect(() => {
    const toDayDate = parseInt(moment().format('D')) - 1;
    onScrollX({
      target: {
        scrollLeft: toDayDate * 50
      }
    });
  }, [loading]);

  return (
    <div className="bg-white timeline-calendar">
      <Row className="sticky-top w-100">
        <Col span={4}></Col>
        <Col span={20}>
          <TimelineHeader onScroll={onScrollX} ref={headerRef} days={days} />
        </Col>
      </Row>
      {loading ? <Loader /> : timelines.map(({ name, timelines }, index) => (
        <div className="d-flex w-100" key={index}>
          <Row  
          className="w-100 overflow-auto scroll-bar-hidden" 
          onScroll={onScrollX}
          ref={truckRefs[index]}
          >
            <Col className="d-flex sticky-left" span={4}>
              <div className="pl-4">{name}</div>
            </Col>
            <Col span={20}>
                <div>
                  <TimelineList 
                   days={days} 
                   timelines={timelines}
                   month={month}
                  />
                </div>
            </Col>
          </Row>
        </div>
      ))}
      {!loading && !timelines.length && <EmptyState />}
      <div className="sticky-bottom w-100 py-2">
          <LegendGroup legends={legends} />
      </div>
    </div>
  );
};

TimelineCalendar.propTypes = {
  timelines: PropTypes.arrayOf(PropTypes.object),
  month: PropTypes.string,
  onTimelineClick: PropTypes.func
}

TimelineCalendar.defaultProps = {
  timelines: [],
  month: moment().format('MMM YYYY'),
  onTimelineClick: () => {}
};

export default TimelineCalendar;
