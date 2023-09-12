import React, { forwardRef } from "react";
import Day from "components/timelineCalendar/components/day";
import './index.scss'

const TimelineHeader = forwardRef(({ days = [], onScroll }, ref) => {
  return (
    <div onScroll={onScroll} ref={ref} className="timeline-header d-flex w-100 overflow-auto scroll-bar-hidden">
      {days.map((day) => (
        <Day className="bg-white">
          {day}
        </Day>
      ))}
    </div>
  );
});

export default TimelineHeader;
