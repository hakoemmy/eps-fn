import React from 'react';
import { Col, Row } from 'antd';
import Legend from 'components/timelineCalendar/components/legend';

const LegendGroup = ({ legends = [] }) => {
  return (
    <Row justify="space-around">
      {legends.map(({ color, title }) => (
        <Col key={color}>
          <Legend color={color} title={title} />
        </Col>
      ))}
    </Row>
  );
};

export default LegendGroup;
