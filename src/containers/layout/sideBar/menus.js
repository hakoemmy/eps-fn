import dashboardIcon from "assets/icons/dashboard.svg";
import { roleAccess } from "../../../constants";

const { VENDOR_LEVEL, PLATFORM_LEVEL } = roleAccess;

const menus = [
  {
    Icon: dashboardIcon,
    label: "Dashboard",
    path: "/",
    key: 1,
    access: VENDOR_LEVEL
  }
]

export default menus;
