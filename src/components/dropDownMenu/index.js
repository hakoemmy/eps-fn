import { Menu } from "antd";
import "./index.scss";
import PropTypes from "prop-types";

const dropDownMenu = ({ options, ...props }) => (
  <Menu>
    {options(props).map(({ label, name, icon, onClick }, index) => (
      <Menu.Item
        key={index}
        icon={
          icon && (
            <div>
              <img src={icon} alt={name} />
            </div>
          )
        }
        onClick={onClick}
      >
        {label}
      </Menu.Item>
    ))}
  </Menu>
);

dropDownMenu.propTypes = {
  label: PropTypes.any,
  name: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};

export default dropDownMenu;
