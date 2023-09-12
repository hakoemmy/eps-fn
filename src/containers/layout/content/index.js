import React from "react";
import { Layout } from "antd";
import PropTypes from "prop-types";
import "./index.scss";

const { Content } = Layout;

const ContentComponent = ({ children }) => {
    return  <Content
        className="dashboard-body"
      >
        <div className="body-content">{children}</div>
      </Content>;
}

ContentComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]),
};

export default ContentComponent;
