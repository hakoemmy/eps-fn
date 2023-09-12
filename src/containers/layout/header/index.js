import React from "react";
import PropTypes from "prop-types";
import store from "store";
import { useSelector } from "react-redux";
import logoutIcon from "assets/icons/logout.svg";
import TooltipButton from "components/TooltipButton";

import "./index.scss";

const HeaderComponent = ({ data }) => {
  const companyName = useSelector(
    ({
      auth: {
        profile: {
          data: {
             name = ""
          },
        },
      },
    }) => name
  );

  const onLogout = () => {
    window.location.replace("/login");
    store.remove("token");
  }

  const getDisplayName = () => {
    return data?.name ?
      `Welcome, ${data?.name}` :
      'Loading...'
  }

  return (
    <div className="site-layout-sub-header-background p-3 fleetcon-header">
      <div className="fleetcon-header-container">
        <div className="fleetcon-header-left">
          <div className="title ml-4">EPS</div>
        </div>
        <div className="fleetcon-header-middle">
          <span className="company-name">{companyName}</span>
        </div>
        <div className="fleetcon-header-right">
          <div className="username">
            <span>
              {getDisplayName()}
            </span>
          </div>
          <TooltipButton
           title="Logout"
           icon={<img src={logoutIcon} alt="logout" />}
           onClick={onLogout}
          />
        </div>
      </div>
    </div>
  );
};

HeaderComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]),
};

export default HeaderComponent;
