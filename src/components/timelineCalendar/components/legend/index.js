import React from "react";
import classnames from "classnames";
import { Col, Row } from "antd";

import './index.scss';

const Legend = ({ color, title }) => {
  return (
    <Row className="legend" gutter={4}>
      <Col>
        <div className={classnames("py-2 px-3 rounded color", color)} />
      </Col>
      <Col flex="auto">
        <span>{title}</span>
      </Col>
    </Row>
  );
};

export default Legend;
