import React from "react";
import { useSelector } from "react-redux";
import {
  useHistory,
} from "react-router-dom";
import PropTypes from "prop-types";
import { Layout, Skeleton } from "antd";
import "./layout.scss";
import SideBar from "./sideBar/index.js";
import Header from "./header";
import Content from "./content";
import store from "store";

const LayoutContainer = ({ children }) => {
  const history = useHistory();
  let profile = useSelector(
    ({
      auth: {
        profile: { data = [] },
      },
    }) => data
  );
  let profileLoading = useSelector(
    ({
      auth: {
        profile: { loading = false },
      },
    }) => loading
  );
  const goTo = (path, role) => {
    return history.push(path);
  };
  const isAuthenticated = store.get("token");
  !isAuthenticated && goTo("/login");
  return (
    <div>
      <Layout className="dashboard">
        <Header data={profile} />
        <Skeleton
          loading={profileLoading}
          active
          avatar={{ shape: "square", active: true, size: 300 }}
          paragraph={{ rows: 4 }}
          round
        >
          <Layout className="content-layout">
            <SideBar to={goTo} />
            <Content children={children} />
          </Layout>
        </Skeleton>
      </Layout>
    </div>
  );
};

LayoutContainer.defaultProps = {
  children: "",
};

LayoutContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]),
};

export default LayoutContainer;
