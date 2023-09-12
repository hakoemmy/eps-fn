import accountIcon from "assets/icons/user.svg";
import logoutIcon from "assets/icons/logout.svg";

import store from "store";

const options = () => [
  { label: "My account", name: "account", icon: accountIcon },
  {
    label: "Log out",
    name: "avatar",
    icon: logoutIcon,
    onClick: () => {
      window.location.replace("/login");
      store.remove("token");
    },
  },
];

export default options;
