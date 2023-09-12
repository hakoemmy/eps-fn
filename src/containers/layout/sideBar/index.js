import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import PropTypes from "prop-types";
import { useMediaQuery } from 'react-responsive';
import classnames from 'classnames';

import "./index.scss";
import menus from "./menus";
import { IS_MOBILE } from '../../../constants';
import { useProfile } from "hooks/profile";

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideBar = ({ to }) => {
  const { data: { role } = {} } = useProfile();
  const location = useLocation();
  const locationNow = location.pathname;
  const [newKey, setKey] = useState(locationNow);
  const [collapsed, setCollapsed] = useState(useMediaQuery({ query: IS_MOBILE }));

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  useMediaQuery({ query: IS_MOBILE },null, (matches) => {
    setCollapsed(matches)
  });

  return (
    <Sider
      style={{
        backgroundColor: "transparent",
        height: 'calc(100vh - 86px)',
        overflow: 'auto'
      }}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      width={260}
    >
      <Menu
        theme="light"
        selectedKeys={[newKey]}
        defaultOpenKeys={[newKey]}
        defaultSelectedKeys={[newKey]}
        mode="inline"
      >
        {menus
          .filter(({ access }) => access.includes(role?.name))
          .map(({
            path,
            label,
            Icon,
            submenus,
            disabled,
            unsubscribed
          }) => {
            if (submenus) {
              return (
                <SubMenu
                  key={path}
                  icon={<img src={Icon} alt="submenu" />}
                  title={label}
                  disabled={disabled}
                >
                  {submenus.map(({
                    path,
                    label,
                    Icon,
                    disabled,
                    unsubscribed
                  }) => (
                    <Menu.Item
                      style={{
                        marginBottom: "5px",
                        fontWeight: "normal",
                      }}
                      key={path}
                      disabled={disabled}
                      icon={<img src={Icon} alt="submenu-item" />}
                      className={classnames('submenu-item', {
                        'ant-menu-item-unsubscribed': unsubscribed
                      })}
                      onClick={() => {
                        to(path);
                        setKey(path);
                      }}
                    >
                      {label}
                    </Menu.Item>
                  ))}
                </SubMenu>
              );
            } else
              return (
                <Menu.Item
                  style={{
                    marginBottom: "5px",
                    fontWeight: "normal",
                  }}
                  key={path}
                  disabled={disabled}
                  icon={<img src={Icon} alt="menu-item" />}
                  className={classnames('menu-item', {
                    'ant-menu-item-unsubscribed': unsubscribed
                  })}
                  onClick={() => {
                    to(path);
                    setKey(path);
                  }}
                >
                  {label}
                </Menu.Item>
              );
          })}
      </Menu>
    </Sider>
  );
};

SideBar.propTypes = {
  to: PropTypes.func.isRequired,
};

export default SideBar;
